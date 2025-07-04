// Medical Symptom Checker Application
class SymptomChecker {
    constructor() {
        this.currentStep = 1;
        this.patientData = {};
        this.selectedSymptoms = [];
        this.symptoms = {};
        this.conditions = [];
        this.doctors = [];
        this.analysisResults = null;

        this.init();
    }

    async init() {
        await this.loadMedicalData();
        this.renderSymptoms();
        this.setupEventListeners();
    }

    async loadMedicalData() {
        try {
            const [symptomsRes, conditionsRes, doctorsRes] = await Promise.all([
                fetch('/api/symptoms'),
                fetch('/api/conditions'),
                fetch('/api/doctors')
            ]);

            this.symptoms = await symptomsRes.json();
            this.conditions = await conditionsRes.json();
            this.doctors = await doctorsRes.json();

            console.log('Medical data loaded successfully');
        } catch (error) {
            console.error('Error loading medical data:', error);
            this.showError('Failed to load medical database. Please refresh the page.');
        }
    }

    renderSymptoms() {
        const container = document.getElementById('symptom-categories');
        container.innerHTML = '';

        Object.entries(this.symptoms).forEach(([category, symptomList]) => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'symptom-category';

            const categoryIcon = this.getCategoryIcon(category);

            categoryDiv.innerHTML = `
                <h3>${categoryIcon} ${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <div class="symptom-list">
                    ${symptomList.map(symptom => `
                        <div class="symptom-item" data-symptom="${symptom}">
                            <input type="checkbox" id="symptom-${symptom.replace(/\s+/g, '-')}" 
                                   onchange="app.toggleSymptom('${symptom}')">
                            <label for="symptom-${symptom.replace(/\s+/g, '-')}">${symptom}</label>
                        </div>
                    `).join('')}
                </div>
            `;

            container.appendChild(categoryDiv);
        });
    }

    getCategoryIcon(category) {
        const icons = {
            constitutional: '<i class="fas fa-thermometer-half"></i>',
            respiratory: '<i class="fas fa-lungs"></i>',
            cardiovascular: '<i class="fas fa-heartbeat"></i>',
            gastrointestinal: '<i class="fas fa-stomach"></i>',
            neurological: '<i class="fas fa-brain"></i>',
            musculoskeletal: '<i class="fas fa-bone"></i>',
            genitourinary: '<i class="fas fa-kidneys"></i>',
            dermatological: '<i class="fas fa-hand-paper"></i>'
        };
        return icons[category] || '<i class="fas fa-notes-medical"></i>';
    }

    toggleSymptom(symptom) {
        const index = this.selectedSymptoms.indexOf(symptom);
        const checkbox = document.getElementById(`symptom-${symptom.replace(/\s+/g, '-')}`);
        const symptomItem = checkbox.closest('.symptom-item');

        if (index === -1) {
            this.selectedSymptoms.push(symptom);
            symptomItem.classList.add('selected');
        } else {
            this.selectedSymptoms.splice(index, 1);
            symptomItem.classList.remove('selected');
        }

        this.updateSelectedList();
    }

    updateSelectedList() {
        const selectedList = document.getElementById('selected-list');

        if (this.selectedSymptoms.length === 0) {
            selectedList.innerHTML = '<p>No symptoms selected</p>';
            return;
        }

        selectedList.innerHTML = this.selectedSymptoms.map(symptom => `
            <span class="selected-tag">
                ${symptom}
                <span class="remove" onclick="app.toggleSymptom('${symptom}')">&times;</span>
            </span>
        `).join('');
    }

    setupEventListeners() {
        // Pain scale display
        const painScale = document.getElementById('pain-scale');
        if (painScale) {
            painScale.addEventListener('input', (e) => {
                const labels = document.querySelector('.pain-scale-labels');
                const value = e.target.value;
                labels.innerHTML = `
                    <span>1 (Mild)</span>
                    <span style="font-weight: bold; color: #3498db;">Current: ${value}</span>
                    <span>10 (Severe)</span>
                `;
            });
        }
    }

    nextStep(currentStep) {
        if (!this.validateStep(currentStep)) return;

        this.currentStep = currentStep + 1;
        this.showStep(this.currentStep);

        // Auto-analyze if moving to results step
        if (this.currentStep === 4) {
            this.performAnalysis();
        }
    }

    prevStep(currentStep) {
        this.currentStep = currentStep - 1;
        this.showStep(this.currentStep);
    }

    showStep(stepNumber) {
        // Hide all steps
        document.querySelectorAll('.step').forEach(step => {
            step.classList.remove('active');
        });

        // Show current step
        document.getElementById(`step-${stepNumber}`).classList.add('active');

        // Scroll to top
        window.scrollTo(0, 0);
    }

    validateStep(step) {
        switch (step) {
            case 1:
                const age = document.getElementById('age').value;
                const gender = document.querySelector('input[name="gender"]:checked');

                if (!age || age < 1 || age > 120) {
                    this.showError('Please enter a valid age (1-120)');
                    return false;
                }

                if (!gender) {
                    this.showError('Please select a gender');
                    return false;
                }

                this.patientData.age = parseInt(age);
                this.patientData.gender = gender.value;
                return true;

            case 2:
                if (this.selectedSymptoms.length === 0) {
                    this.showError('Please select at least one symptom');
                    return false;
                }
                return true;

            case 3:
                const duration = document.getElementById('symptom-duration').value;
                const painScale = document.getElementById('pain-scale').value;
                const medications = document.getElementById('medications').value;

                this.patientData.duration = duration;
                this.patientData.painScale = painScale;
                this.patientData.medications = medications;
                return true;

            default:
                return true;
        }
    }

    async analyzeSymptoms() {
        if (!this.validateStep(3)) return;

        this.nextStep(3);
    }

    async performAnalysis() {
        try {
            this.showLoading(true);

            const response = await fetch('/api/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    symptoms: this.selectedSymptoms,
                    patientData: this.patientData
                })
            });

            if (!response.ok) {
                throw new Error('Analysis failed');
            }

            this.analysisResults = await response.json();
            this.displayResults();

        } catch (error) {
            console.error('Analysis error:', error);
            this.showError('Analysis failed. Please try again.');
        } finally {
            this.showLoading(false);
        }
    }

    displayResults() {
        const resultsContent = document.getElementById('results-content');
        const emergencyAlert = document.getElementById('emergency-alert');

        // Show emergency alert if needed
        if (this.analysisResults.emergency) {
            emergencyAlert.style.display = 'block';
        } else {
            emergencyAlert.style.display = 'none';
        }

        // Display analysis results
        if (this.analysisResults.analysis.length === 0) {
            resultsContent.innerHTML = `
                <div class="alert alert-info">
                    <p>Based on your symptoms, we recommend consulting with a healthcare professional for a proper evaluation.</p>
                </div>
            `;
            return;
        }

        let resultsHTML = '<h3>Possible Conditions:</h3>';

        this.analysisResults.analysis.forEach((result, index) => {
            const severityClass = result.severity === 'emergency' ? 'emergency' : 
                                 result.severity === 'severe' ? 'severe' : '';

            resultsHTML += `
                <div class="condition-result ${severityClass}">
                    <div class="condition-name">
                        ${index + 1}. ${result.condition}
                        ${result.severity === 'emergency' ? '<i class="fas fa-exclamation-triangle" style="color: #e74c3c; margin-left: 10px;"></i>' : ''}
                    </div>
                    <div class="confidence-bar">
                        <div class="confidence-fill" style="width: ${result.confidence}%"></div>
                    </div>
                    <p><strong>Confidence:</strong> ${result.confidence}%</p>
                    <p><strong>Description:</strong> ${result.description}</p>
                    <p><strong>Matching Symptoms:</strong> ${result.matchingSymptoms.join(', ')}</p>

                    <div class="doctor-recommendation">
                        <strong><i class="fas fa-user-md"></i> Recommended Specialist:</strong> ${result.recommendedDoctor}
                    </div>
                </div>
            `;
        });

        // Add general recommendations
        resultsHTML += `
            <div class="alert alert-info">
                <h4>Next Steps:</h4>
                <ul>
                    <li>Schedule an appointment with the recommended healthcare provider</li>
                    <li>Bring this assessment report to your appointment</li>
                    <li>Monitor your symptoms and seek immediate care if they worsen</li>
                    <li>Follow up with your healthcare provider as recommended</li>
                </ul>
            </div>
        `;

        resultsContent.innerHTML = resultsHTML;
    }

    generateReport() {
        const reportData = {
            timestamp: new Date().toLocaleString(),
            patientInfo: this.patientData,
            symptoms: this.selectedSymptoms,
            analysis: this.analysisResults
        };

        const reportHTML = this.generateReportHTML(reportData);
        this.downloadReport(reportHTML);
    }

    generateReportHTML(data) {
        return `
<!DOCTYPE html>
<html>
<head>
    <title>Medical Symptom Assessment Report</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; border-bottom: 2px solid #3498db; padding-bottom: 20px; margin-bottom: 30px; }
        .section { margin-bottom: 30px; }
        .condition { background: #f8f9fa; padding: 15px; margin: 10px 0; border-left: 4px solid #3498db; }
        .emergency { border-left-color: #e74c3c; background: #fee; }
        .disclaimer { background: #fff4e6; border: 1px solid #f39c12; padding: 20px; margin-top: 30px; }
        .confidence-bar { background: #eee; height: 10px; margin: 5px 0; }
        .confidence-fill { background: #3498db; height: 100%; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Medical Symptom Assessment Report</h1>
        <p>Generated on: ${data.timestamp}</p>
    </div>

    <div class="section">
        <h2>Patient Information</h2>
        <p><strong>Age:</strong> ${data.patientInfo.age}</p>
        <p><strong>Gender:</strong> ${data.patientInfo.gender}</p>
        <p><strong>Symptom Duration:</strong> ${data.patientInfo.duration || 'Not specified'}</p>
        <p><strong>Pain Scale:</strong> ${data.patientInfo.painScale}/10</p>
        ${data.patientInfo.medications ? `<p><strong>Current Medications:</strong> ${data.patientInfo.medications}</p>` : ''}
    </div>

    <div class="section">
        <h2>Reported Symptoms</h2>
        <ul>
            ${data.symptoms.map(symptom => `<li>${symptom}</li>`).join('')}
        </ul>
    </div>

    <div class="section">
        <h2>Assessment Results</h2>
        ${data.analysis.emergency ? '<div class="emergency"><strong>⚠️ EMERGENCY ALERT:</strong> Symptoms may indicate a serious condition requiring immediate medical attention.</div>' : ''}

        ${data.analysis.analysis.map((result, index) => `
            <div class="condition ${result.severity === 'emergency' ? 'emergency' : ''}">
                <h3>${index + 1}. ${result.condition}</h3>
                <div class="confidence-bar">
                    <div class="confidence-fill" style="width: ${result.confidence}%"></div>
                </div>
                <p><strong>Confidence:</strong> ${result.confidence}%</p>
                <p><strong>Description:</strong> ${result.description}</p>
                <p><strong>Recommended Doctor:</strong> ${result.recommendedDoctor}</p>
            </div>
        `).join('')}
    </div>

    <div class="disclaimer">
        <h3>Medical Disclaimer</h3>
        <p><strong>IMPORTANT:</strong> This assessment is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for proper medical evaluation.</p>
        <p><strong>Emergency:</strong> If you are experiencing a medical emergency, call 911 immediately.</p>
    </div>
</body>
</html>
        `;
    }

    downloadReport(htmlContent) {
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `medical-assessment-report-${new Date().toISOString().split('T')[0]}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    restartAssessment() {
        this.currentStep = 1;
        this.selectedSymptoms = [];
        this.patientData = {};
        this.analysisResults = null;

        // Reset form
        document.getElementById('age').value = '';
        document.querySelectorAll('input[name="gender"]').forEach(radio => radio.checked = false);
        document.getElementById('symptom-duration').value = '';
        document.getElementById('pain-scale').value = '5';
        document.getElementById('medications').value = '';

        // Clear symptom selections
        document.querySelectorAll('.symptom-item').forEach(item => {
            item.classList.remove('selected');
            const checkbox = item.querySelector('input[type="checkbox"]');
            if (checkbox) checkbox.checked = false;
        });

        this.updateSelectedList();
        this.showStep(1);
    }

    showError(message) {
        alert(message); // Simple alert for now - could be enhanced with better UI
    }

    showLoading(show) {
        const buttons = document.querySelectorAll('.btn-primary');
        buttons.forEach(btn => {
            if (show) {
                btn.disabled = true;
                btn.innerHTML = '<span class="loading"></span> Analyzing...';
            } else {
                btn.disabled = false;
                btn.innerHTML = btn.innerHTML.replace(/<span class="loading"><\/span> Analyzing\.\.\./g, 'Generate Assessment');
            }
        });
    }
}

// Global functions for HTML onclick events
function nextStep(step) {
    app.nextStep(step);
}

function prevStep(step) {
    app.prevStep(step);
}

function analyzeSymptoms() {
    app.analyzeSymptoms();
}

function generateReport() {
    app.generateReport();
}

function restartAssessment() {
    app.restartAssessment();
}

// Initialize application
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new SymptomChecker();
});
