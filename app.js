// Medical Symptom Checker Application

class SymptomChecker {
    constructor() {
        this.medicalData = {
            "symptoms": {
                "constitutional": [
                    {"id": "fever", "name": "Fever", "description": "Body temperature above normal (>100.4°F/38°C)"},
                    {"id": "fatigue", "name": "Fatigue", "description": "Persistent tiredness or exhaustion"},
                    {"id": "weight_loss", "name": "Unexplained Weight Loss", "description": "Significant weight loss without trying"},
                    {"id": "weight_gain", "name": "Weight Gain", "description": "Unusual weight increase"},
                    {"id": "chills", "name": "Chills", "description": "Feeling cold, shivering"},
                    {"id": "night_sweats", "name": "Night Sweats", "description": "Excessive sweating during sleep"},
                    {"id": "loss_appetite", "name": "Loss of Appetite", "description": "Decreased desire to eat"},
                    {"id": "malaise", "name": "General Malaise", "description": "General feeling of being unwell"},
                    {"id": "weakness_general", "name": "General Weakness", "description": "Overall feeling of weakness"},
                    {"id": "sweating", "name": "Excessive Sweating", "description": "Unusual or excessive sweating"}
                ],
                "respiratory": [
                    {"id": "cough", "name": "Cough", "description": "Dry or productive cough"},
                    {"id": "shortness_breath", "name": "Shortness of Breath", "description": "Difficulty breathing or breathlessness"},
                    {"id": "chest_pain", "name": "Chest Pain", "description": "Pain or discomfort in chest area"},
                    {"id": "wheezing", "name": "Wheezing", "description": "High-pitched whistling sound when breathing"},
                    {"id": "sore_throat", "name": "Sore Throat", "description": "Pain or scratchiness in throat"},
                    {"id": "runny_nose", "name": "Runny Nose", "description": "Nasal discharge or congestion"},
                    {"id": "sneezing", "name": "Sneezing", "description": "Frequent sneezing episodes"},
                    {"id": "coughing_blood", "name": "Coughing Up Blood", "description": "Blood in sputum or cough"},
                    {"id": "hoarseness", "name": "Hoarseness", "description": "Changes in voice quality"},
                    {"id": "throat_clearing", "name": "Throat Clearing", "description": "Frequent need to clear throat"}
                ],
                "cardiovascular": [
                    {"id": "chest_pain_cardiac", "name": "Chest Pain (Cardiac)", "description": "Crushing, squeezing chest pain"},
                    {"id": "palpitations", "name": "Heart Palpitations", "description": "Irregular or fast heartbeat"},
                    {"id": "dizziness", "name": "Dizziness", "description": "Feeling lightheaded or unsteady"},
                    {"id": "fainting", "name": "Fainting", "description": "Loss of consciousness"},
                    {"id": "leg_swelling", "name": "Leg Swelling", "description": "Swelling in legs, ankles, or feet"},
                    {"id": "cold_extremities", "name": "Cold Hands/Feet", "description": "Persistently cold hands or feet"},
                    {"id": "rapid_heartbeat", "name": "Rapid Heartbeat", "description": "Heart beating faster than normal"},
                    {"id": "irregular_heartbeat", "name": "Irregular Heartbeat", "description": "Heart rhythm abnormalities"}
                ],
                "gastrointestinal": [
                    {"id": "nausea", "name": "Nausea", "description": "Feeling sick to stomach"},
                    {"id": "vomiting", "name": "Vomiting", "description": "Throwing up"},
                    {"id": "diarrhea", "name": "Diarrhea", "description": "Loose, watery stools"},
                    {"id": "constipation", "name": "Constipation", "description": "Difficulty passing stools"},
                    {"id": "abdominal_pain", "name": "Abdominal Pain", "description": "Pain in stomach or belly area"},
                    {"id": "heartburn", "name": "Heartburn", "description": "Burning sensation in chest/throat"},
                    {"id": "bloating", "name": "Bloating", "description": "Feeling of fullness or swelling in abdomen"},
                    {"id": "blood_stool", "name": "Blood in Stool", "description": "Visible blood in bowel movements"},
                    {"id": "stomach_cramps", "name": "Stomach Cramps", "description": "Painful contractions in stomach"},
                    {"id": "loss_bowel_control", "name": "Loss of Bowel Control", "description": "Inability to control bowel movements"}
                ],
                "neurological": [
                    {"id": "headache", "name": "Headache", "description": "Pain in head or neck area"},
                    {"id": "migraine", "name": "Migraine", "description": "Severe headache with other symptoms"},
                    {"id": "confusion", "name": "Confusion", "description": "Difficulty thinking clearly"},
                    {"id": "memory_loss", "name": "Memory Loss", "description": "Difficulty remembering things"},
                    {"id": "seizures", "name": "Seizures", "description": "Sudden electrical activity in brain"},
                    {"id": "numbness", "name": "Numbness", "description": "Loss of sensation in body parts"},
                    {"id": "weakness", "name": "Muscle Weakness", "description": "Reduced muscle strength"},
                    {"id": "tremor", "name": "Tremor", "description": "Involuntary shaking"},
                    {"id": "balance_problems", "name": "Balance Problems", "description": "Difficulty maintaining balance"},
                    {"id": "speech_problems", "name": "Speech Problems", "description": "Difficulty speaking or slurred speech"}
                ],
                "musculoskeletal": [
                    {"id": "joint_pain", "name": "Joint Pain", "description": "Pain in joints"},
                    {"id": "muscle_pain", "name": "Muscle Pain", "description": "Pain in muscles"},
                    {"id": "back_pain", "name": "Back Pain", "description": "Pain in back area"},
                    {"id": "neck_pain", "name": "Neck Pain", "description": "Pain in neck area"},
                    {"id": "stiffness", "name": "Joint Stiffness", "description": "Reduced range of motion in joints"},
                    {"id": "swelling_joints", "name": "Joint Swelling", "description": "Swelling around joints"},
                    {"id": "muscle_cramps", "name": "Muscle Cramps", "description": "Painful muscle contractions"},
                    {"id": "bone_pain", "name": "Bone Pain", "description": "Deep, aching pain in bones"}
                ],
                "dermatological": [
                    {"id": "rash", "name": "Skin Rash", "description": "Changes in skin color or texture"},
                    {"id": "itching", "name": "Itching", "description": "Desire to scratch skin"},
                    {"id": "bruising", "name": "Easy Bruising", "description": "Bruises appear easily"},
                    {"id": "dry_skin", "name": "Dry Skin", "description": "Skin feels dry or flaky"},
                    {"id": "skin_lesions", "name": "Skin Lesions", "description": "Unusual marks or growths on skin"},
                    {"id": "skin_discoloration", "name": "Skin Discoloration", "description": "Changes in skin color"},
                    {"id": "hives", "name": "Hives", "description": "Raised, itchy bumps on skin"},
                    {"id": "skin_peeling", "name": "Skin Peeling", "description": "Skin shedding or peeling off"}
                ],
                "genitourinary": [
                    {"id": "painful_urination", "name": "Painful Urination", "description": "Pain or burning during urination"},
                    {"id": "frequent_urination", "name": "Frequent Urination", "description": "Urinating more often than usual"},
                    {"id": "blood_urine", "name": "Blood in Urine", "description": "Visible blood in urine"},
                    {"id": "incontinence", "name": "Urinary Incontinence", "description": "Loss of bladder control"},
                    {"id": "urgency", "name": "Urinary Urgency", "description": "Sudden, strong need to urinate"},
                    {"id": "difficulty_urinating", "name": "Difficulty Urinating", "description": "Trouble starting or maintaining urination"},
                    {"id": "cloudy_urine", "name": "Cloudy Urine", "description": "Urine appears cloudy or murky"},
                    {"id": "reduced_urine", "name": "Reduced Urine Output", "description": "Urinating less than usual"}
                ]
            },
            "conditions": [
                {"id": "common_cold", "name": "Common Cold", "category": "respiratory", "symptoms": ["runny_nose", "sneezing", "sore_throat", "cough", "fatigue"], "severity": "mild", "description": "Viral upper respiratory tract infection", "doctor_type": "family_medicine"},
                {"id": "influenza", "name": "Influenza (Flu)", "category": "respiratory", "symptoms": ["fever", "fatigue", "muscle_pain", "headache", "cough", "sore_throat", "chills"], "severity": "moderate", "description": "Viral infection affecting respiratory system", "doctor_type": "family_medicine"},
                {"id": "pneumonia", "name": "Pneumonia", "category": "respiratory", "symptoms": ["fever", "cough", "shortness_breath", "chest_pain", "fatigue", "chills"], "severity": "severe", "description": "Infection that inflames air sacs in lungs", "doctor_type": "pulmonology"},
                {"id": "asthma", "name": "Asthma", "category": "respiratory", "symptoms": ["wheezing", "shortness_breath", "cough", "chest_pain"], "severity": "moderate", "description": "Condition where airways narrow and swell", "doctor_type": "pulmonology"},
                {"id": "heart_attack", "name": "Heart Attack", "category": "cardiovascular", "symptoms": ["chest_pain_cardiac", "shortness_breath", "nausea", "dizziness", "cold_extremities", "sweating"], "severity": "emergency", "description": "Blockage of blood flow to heart muscle", "doctor_type": "emergency_medicine"},
                {"id": "hypertension", "name": "High Blood Pressure", "category": "cardiovascular", "symptoms": ["headache", "dizziness", "fatigue"], "severity": "moderate", "description": "Elevated blood pressure", "doctor_type": "cardiology"},
                {"id": "diabetes_t2", "name": "Type 2 Diabetes", "category": "endocrine", "symptoms": ["frequent_urination", "fatigue", "weight_loss", "increased_thirst"], "severity": "moderate", "description": "Condition affecting blood sugar regulation", "doctor_type": "endocrinology"},
                {"id": "gastroenteritis", "name": "Gastroenteritis", "category": "gastrointestinal", "symptoms": ["nausea", "vomiting", "diarrhea", "abdominal_pain", "fever", "stomach_cramps"], "severity": "mild", "description": "Inflammation of stomach and intestines", "doctor_type": "family_medicine"},
                {"id": "appendicitis", "name": "Appendicitis", "category": "gastrointestinal", "symptoms": ["abdominal_pain", "nausea", "vomiting", "fever"], "severity": "emergency", "description": "Inflammation of the appendix", "doctor_type": "emergency_medicine"},
                {"id": "migraine", "name": "Migraine", "category": "neurological", "symptoms": ["headache", "nausea", "vomiting", "sensitivity_light"], "severity": "moderate", "description": "Severe recurring headaches", "doctor_type": "neurology"},
                {"id": "arthritis", "name": "Arthritis", "category": "musculoskeletal", "symptoms": ["joint_pain", "stiffness", "swelling_joints", "morning_stiffness"], "severity": "moderate", "description": "Inflammation of joints", "doctor_type": "rheumatology"},
                {"id": "uti", "name": "Urinary Tract Infection", "category": "genitourinary", "symptoms": ["painful_urination", "frequent_urination", "blood_urine", "urgency", "cloudy_urine"], "severity": "mild", "description": "Infection in urinary system", "doctor_type": "family_medicine"},
                {"id": "skin_infection", "name": "Skin Infection", "category": "dermatological", "symptoms": ["rash", "itching", "skin_lesions", "skin_discoloration"], "severity": "mild", "description": "Bacterial or fungal skin infection", "doctor_type": "dermatology"},
                {"id": "bronchitis", "name": "Bronchitis", "category": "respiratory", "symptoms": ["cough", "chest_pain", "fatigue", "shortness_breath", "throat_clearing"], "severity": "moderate", "description": "Inflammation of bronchial tubes", "doctor_type": "pulmonology"},
                {"id": "food_poisoning", "name": "Food Poisoning", "category": "gastrointestinal", "symptoms": ["nausea", "vomiting", "diarrhea", "abdominal_pain", "fever", "stomach_cramps"], "severity": "mild", "description": "Illness caused by contaminated food", "doctor_type": "family_medicine"}
            ],
            "doctor_specialties": {
                "family_medicine": {"name": "Family Medicine", "description": "Primary care physicians treating patients of all ages", "treats": ["Common illnesses", "Preventive care", "Chronic disease management", "Minor injuries"]},
                "emergency_medicine": {"name": "Emergency Medicine", "description": "Specialists treating life-threatening conditions", "treats": ["Heart attacks", "Strokes", "Severe trauma", "Life-threatening emergencies"]},
                "cardiology": {"name": "Cardiology", "description": "Heart and blood vessel specialists", "treats": ["Heart disease", "High blood pressure", "Heart rhythm problems", "Heart failure"]},
                "pulmonology": {"name": "Pulmonology", "description": "Lung and respiratory system specialists", "treats": ["Asthma", "COPD", "Pneumonia", "Sleep disorders"]},
                "neurology": {"name": "Neurology", "description": "Brain and nervous system specialists", "treats": ["Headaches", "Seizures", "Stroke", "Memory problems"]},
                "endocrinology": {"name": "Endocrinology", "description": "Hormone and metabolism specialists", "treats": ["Diabetes", "Thyroid disorders", "Hormone imbalances", "Osteoporosis"]},
                "rheumatology": {"name": "Rheumatology", "description": "Joint and autoimmune condition specialists", "treats": ["Arthritis", "Lupus", "Autoimmune diseases", "Joint disorders"]},
                "dermatology": {"name": "Dermatology", "description": "Skin, hair, and nail specialists", "treats": ["Skin cancer", "Acne", "Eczema", "Skin infections"]},
                "gastroenterology": {"name": "Gastroenterology", "description": "Digestive system specialists", "treats": ["Stomach problems", "Liver disease", "Intestinal disorders", "Digestive issues"]}
            }
        };

        this.selectedSymptoms = [];
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.questionAnswers = {};
        this.analysisResults = [];
        this.sessionId = this.generateSessionId();
        
        this.categoryIcons = {
            constitutional: '🌡️',
            respiratory: '🫁',
            cardiovascular: '❤️',
            gastrointestinal: '🦠',
            neurological: '🧠',
            musculoskeletal: '🦴',
            dermatological: '🩹',
            genitourinary: '🩺'
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderSymptomCategories();
        this.updateProgress();
    }

    generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    setupEventListeners() {
        // Navigation buttons
        document.getElementById('start-btn').addEventListener('click', () => this.showScreen('symptom-screen'));
        document.getElementById('back-to-welcome').addEventListener('click', () => this.showScreen('welcome-screen'));
        document.getElementById('continue-to-questions').addEventListener('click', () => this.startQuestions());
        document.getElementById('back-to-symptoms').addEventListener('click', () => this.showScreen('symptom-screen'));
        document.getElementById('analyze-symptoms').addEventListener('click', () => this.analyzeSymptoms());
        document.getElementById('start-over').addEventListener('click', () => this.resetApplication());
        document.getElementById('generate-report').addEventListener('click', () => this.generateReport());

        // Question buttons
        document.querySelectorAll('.question-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.answerQuestion(e.target.dataset.answer));
        });
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
        this.updateProgress();
    }

    updateProgress() {
        const progressFill = document.getElementById('progress-fill');
        const questionsProgress = document.getElementById('questions-progress');
        
        if (progressFill) {
            const currentScreen = document.querySelector('.screen.active').id;
            let progress = 0;
            
            switch (currentScreen) {
                case 'welcome-screen': progress = 0; break;
                case 'symptom-screen': progress = 25; break;
                case 'questions-screen': progress = 50 + (this.currentQuestionIndex / Math.max(this.questions.length, 1)) * 25; break;
                case 'results-screen': progress = 100; break;
            }
            
            progressFill.style.width = progress + '%';
        }
        
        if (questionsProgress && this.questions.length > 0) {
            const questionProgress = (this.currentQuestionIndex / this.questions.length) * 100;
            questionsProgress.style.width = questionProgress + '%';
        }
    }

    renderSymptomCategories() {
        const container = document.getElementById('symptom-categories');
        container.innerHTML = '';

        Object.entries(this.medicalData.symptoms).forEach(([categoryKey, symptoms]) => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'symptom-category';
            
            const categoryName = categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);
            const icon = this.categoryIcons[categoryKey] || '📋';
            
            categoryDiv.innerHTML = `
                <div class="category-header">
                    <span class="category-icon">${icon}</span>
                    <h3 class="category-name">${categoryName}</h3>
                </div>
                <div class="symptoms-grid">
                    ${symptoms.map(symptom => `
                        <div class="symptom-checkbox">
                            <input type="checkbox" id="${symptom.id}" data-symptom-id="${symptom.id}">
                            <div class="symptom-info">
                                <label for="${symptom.id}" class="symptom-name">${symptom.name}</label>
                                <p class="symptom-description">${symptom.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            
            container.appendChild(categoryDiv);
        });

        // Add event listeners to checkboxes
        document.querySelectorAll('input[type="checkbox"][data-symptom-id]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => this.handleSymptomSelection(e));
        });
    }

    handleSymptomSelection(event) {
        const symptomId = event.target.dataset.symptomId;
        const isChecked = event.target.checked;
        
        if (isChecked) {
            this.selectedSymptoms.push(symptomId);
        } else {
            this.selectedSymptoms = this.selectedSymptoms.filter(id => id !== symptomId);
        }
        
        this.updateSelectedSymptoms();
        this.updateContinueButton();
    }

    updateSelectedSymptoms() {
        const container = document.getElementById('symptoms-list');
        container.innerHTML = '';

        if (this.selectedSymptoms.length === 0) {
            container.innerHTML = '<p style="color: var(--color-text-secondary); font-style: italic;">No symptoms selected</p>';
            return;
        }

        this.selectedSymptoms.forEach(symptomId => {
            const symptom = this.findSymptomById(symptomId);
            if (symptom) {
                const symptomTag = document.createElement('span');
                symptomTag.className = 'selected-symptom';
                symptomTag.innerHTML = `
                    ${symptom.name}
                    <button class="remove-symptom" data-symptom-id="${symptomId}">×</button>
                `;
                container.appendChild(symptomTag);
            }
        });

        // Add event listeners to remove buttons
        container.querySelectorAll('.remove-symptom').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const symptomId = e.target.dataset.symptomId;
                this.selectedSymptoms = this.selectedSymptoms.filter(id => id !== symptomId);
                document.getElementById(symptomId).checked = false;
                this.updateSelectedSymptoms();
                this.updateContinueButton();
            });
        });
    }

    findSymptomById(symptomId) {
        for (const category of Object.values(this.medicalData.symptoms)) {
            const symptom = category.find(s => s.id === symptomId);
            if (symptom) return symptom;
        }
        return null;
    }

    updateContinueButton() {
        const continueBtn = document.getElementById('continue-to-questions');
        continueBtn.disabled = this.selectedSymptoms.length === 0;
    }

    startQuestions() {
        this.questions = this.generateQuestions();
        this.currentQuestionIndex = 0;
        this.questionAnswers = {};
        
        if (this.questions.length > 0) {
            this.showScreen('questions-screen');
            this.showCurrentQuestion();
        } else {
            this.analyzeSymptoms();
        }
    }

    generateQuestions() {
        const questions = [];
        const questionMap = {
            'cough': 'Is your cough producing yellow or green mucus?',
            'chest_pain': 'Does your chest pain radiate to your arm or jaw?',
            'chest_pain_cardiac': 'Does your chest pain feel like crushing or squeezing?',
            'fever': 'Is your fever above 102°F (38.9°C)?',
            'headache': 'Is your headache severe and sudden in onset?',
            'abdominal_pain': 'Is your abdominal pain severe and constant?',
            'shortness_breath': 'Does your shortness of breath occur even at rest?',
            'dizziness': 'Do you feel dizzy when standing up quickly?',
            'fatigue': 'Has your fatigue been persistent for more than 2 weeks?',
            'joint_pain': 'Is your joint pain worse in the morning?',
            'nausea': 'Is your nausea accompanied by severe vomiting?',
            'weight_loss': 'Have you lost more than 10 pounds without trying?',
            'muscle_pain': 'Are your muscles sore without recent exercise?',
            'vomiting': 'Have you been vomiting for more than 24 hours?',
            'diarrhea': 'Is your diarrhea watery and frequent?',
            'painful_urination': 'Does the burning sensation occur throughout urination?',
            'rash': 'Is your rash spreading or getting worse?'
        };

        // Generate questions based on selected symptoms
        this.selectedSymptoms.forEach(symptomId => {
            if (questionMap[symptomId]) {
                questions.push({
                    id: symptomId,
                    text: questionMap[symptomId],
                    symptom: symptomId
                });
            }
        });

        return questions;
    }

    showCurrentQuestion() {
        if (this.currentQuestionIndex >= this.questions.length) {
            this.analyzeSymptoms();
            return;
        }

        const question = this.questions[this.currentQuestionIndex];
        document.getElementById('question-text').textContent = question.text;
        
        // Reset button states
        document.querySelectorAll('.question-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Update navigation buttons
        document.getElementById('analyze-symptoms').style.display = 
            this.currentQuestionIndex === this.questions.length - 1 ? 'inline-block' : 'none';
        
        this.updateProgress();
    }

    answerQuestion(answer) {
        const question = this.questions[this.currentQuestionIndex];
        this.questionAnswers[question.id] = answer;
        
        // Update button states
        document.querySelectorAll('.question-btn').forEach(btn => {
            btn.classList.remove('selected');
            if (btn.dataset.answer === answer) {
                btn.classList.add('selected');
            }
        });
        
        // Auto-advance to next question after a brief delay
        setTimeout(() => {
            this.currentQuestionIndex++;
            this.showCurrentQuestion();
        }, 500);
    }

    analyzeSymptoms() {
        this.showScreen('loading-screen');
        
        // Simulate analysis time
        setTimeout(() => {
            this.analysisResults = this.calculateConditionProbabilities();
            this.showResults();
        }, 2000);
    }

    calculateConditionProbabilities() {
        const results = [];
        
        this.medicalData.conditions.forEach(condition => {
            let matchCount = 0;
            let totalSymptoms = condition.symptoms.length;
            let bonusScore = 0;
            
            // Calculate base match score - only count symptoms that are actually selected
            condition.symptoms.forEach(symptom => {
                if (this.selectedSymptoms.includes(symptom)) {
                    matchCount++;
                }
            });
            
            // Only process conditions with at least one matching symptom
            if (matchCount === 0) {
                return;
            }
            
            // Add bonus points for question answers that align with the condition
            Object.entries(this.questionAnswers).forEach(([questionId, answer]) => {
                if (condition.symptoms.includes(questionId)) {
                    if (answer === 'yes') {
                        bonusScore += 15; // Increases probability for matching conditions
                    } else {
                        bonusScore -= 5; // Slightly reduces probability for non-matching conditions
                    }
                }
            });
            
            // Calculate probability based on symptom matches
            const baseScore = (matchCount / Math.max(this.selectedSymptoms.length, totalSymptoms)) * 100;
            const finalScore = Math.max(0, Math.min(baseScore + bonusScore, 100));
            
            if (finalScore > 5) { // Only include conditions with meaningful probability
                results.push({
                    condition: condition,
                    probability: Math.round(finalScore),
                    matchCount: matchCount,
                    totalSymptoms: totalSymptoms,
                    selectedSymptoms: this.selectedSymptoms.filter(s => condition.symptoms.includes(s))
                });
            }
        });
        
        // Sort by probability (highest first)
        results.sort((a, b) => b.probability - a.probability);
        
        // Return top 5 results
        return results.slice(0, 5);
    }

    showResults() {
        this.showScreen('results-screen');
        this.renderResults();
        this.renderDoctorRecommendations();
    }

    renderResults() {
        const container = document.getElementById('results-container');
        container.innerHTML = '';

        if (this.analysisResults.length === 0) {
            container.innerHTML = `
                <div class="card">
                    <div class="card__body">
                        <h3>No Clear Matches Found</h3>
                        <p>Based on your symptoms, we couldn't identify specific conditions. We recommend consulting with a healthcare professional for proper evaluation.</p>
                    </div>
                </div>
            `;
            return;
        }

        this.analysisResults.forEach(result => {
            const conditionCard = document.createElement('div');
            conditionCard.className = `condition-card ${result.condition.severity}`;
            
            conditionCard.innerHTML = `
                <div class="condition-header">
                    <h3 class="condition-name">${result.condition.name}</h3>
                    <span class="condition-probability">${result.probability}%</span>
                </div>
                <div class="condition-details">
                    <span class="severity-badge severity-${result.condition.severity}">
                        ${result.condition.severity}
                    </span>
                    <p class="condition-description">${result.condition.description}</p>
                    <p style="font-size: 12px; color: var(--color-text-secondary);">
                        Matching symptoms: ${result.matchCount} of ${result.selectedSymptoms.length} selected
                    </p>
                </div>
            `;
            
            container.appendChild(conditionCard);
        });
    }

    renderDoctorRecommendations() {
        const container = document.getElementById('doctors-grid');
        container.innerHTML = '';

        // Get unique doctor types from results
        const doctorTypes = new Set();
        this.analysisResults.forEach(result => {
            doctorTypes.add(result.condition.doctor_type);
        });

        // Always include family medicine if not already present
        if (!doctorTypes.has('family_medicine')) {
            doctorTypes.add('family_medicine');
        }

        doctorTypes.forEach(doctorType => {
            const doctor = this.medicalData.doctor_specialties[doctorType];
            if (doctor) {
                const doctorCard = document.createElement('div');
                doctorCard.className = 'doctor-card';
                
                doctorCard.innerHTML = `
                    <h3 class="doctor-name">${doctor.name}</h3>
                    <p class="doctor-description">${doctor.description}</p>
                    <div class="doctor-treats">
                        <h4>Treats:</h4>
                        <ul>
                            ${doctor.treats.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                `;
                
                container.appendChild(doctorCard);
            }
        });
    }

    generateReport() {
        const reportData = {
            sessionId: this.sessionId,
            timestamp: new Date().toISOString(),
            selectedSymptoms: this.selectedSymptoms.map(id => this.findSymptomById(id)).filter(s => s),
            questionAnswers: this.questionAnswers,
            analysisResults: this.analysisResults,
            recommendations: this.getDoctorRecommendations()
        };

        const reportHTML = this.generateReportHTML(reportData);
        this.downloadReport(reportHTML);
    }

    getDoctorRecommendations() {
        const doctorTypes = new Set();
        this.analysisResults.forEach(result => {
            doctorTypes.add(result.condition.doctor_type);
        });

        return Array.from(doctorTypes).map(type => this.medicalData.doctor_specialties[type]).filter(d => d);
    }

    generateReportHTML(data) {
        const date = new Date(data.timestamp);
        const formattedDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
        
        return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Medical Symptom Analysis Report</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
                .header { text-align: center; border-bottom: 2px solid #2563eb; padding-bottom: 20px; margin-bottom: 30px; }
                .section { margin-bottom: 30px; }
                .condition { border: 1px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 5px; }
                .emergency { border-color: #dc2626; background-color: #fef2f2; }
                .severe { border-color: #ea580c; background-color: #fff7ed; }
                .moderate { border-color: #ca8a04; background-color: #fefce8; }
                .mild { border-color: #16a34a; background-color: #f0fdf4; }
                .disclaimer { background-color: #fee2e2; border: 1px solid #fecaca; padding: 15px; border-radius: 5px; margin: 20px 0; }
                .symptoms-list { display: flex; flex-wrap: wrap; gap: 10px; }
                .symptom-tag { background-color: #e5e7eb; padding: 5px 10px; border-radius: 15px; font-size: 14px; }
                .doctor-card { border: 1px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 5px; }
                .question-answer { margin: 5px 0; font-size: 14px; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>Medical Symptom Analysis Report</h1>
                <p><strong>Session ID:</strong> ${data.sessionId}</p>
                <p><strong>Date:</strong> ${formattedDate}</p>
            </div>

            <div class="disclaimer">
                <h3>Important Medical Disclaimer</h3>
                <p>This report is for informational purposes only and should not replace professional medical advice. 
                Always consult with a qualified healthcare provider for proper diagnosis and treatment.</p>
            </div>

            <div class="section">
                <h2>Selected Symptoms</h2>
                <div class="symptoms-list">
                    ${data.selectedSymptoms.map(symptom => 
                        `<span class="symptom-tag">${symptom.name}</span>`
                    ).join('')}
                </div>
            </div>

            <div class="section">
                <h2>Follow-up Questions & Answers</h2>
                ${Object.entries(data.questionAnswers).map(([questionId, answer]) => {
                    const symptom = this.findSymptomById(questionId);
                    const question = this.questions.find(q => q.id === questionId);
                    return `<div class="question-answer">
                        <strong>Q:</strong> ${question ? question.text : 'Question about ' + (symptom ? symptom.name : questionId)}<br>
                        <strong>A:</strong> ${answer.charAt(0).toUpperCase() + answer.slice(1)}
                    </div>`;
                }).join('')}
            </div>

            <div class="section">
                <h2>Analysis Results</h2>
                ${data.analysisResults.map(result => `
                    <div class="condition ${result.condition.severity}">
                        <h3>${result.condition.name} (${result.probability}% match)</h3>
                        <p><strong>Severity:</strong> ${result.condition.severity}</p>
                        <p><strong>Description:</strong> ${result.condition.description}</p>
                        <p><strong>Matching Symptoms:</strong> ${result.matchCount} of ${result.selectedSymptoms.length} selected</p>
                    </div>
                `).join('')}
            </div>

            <div class="section">
                <h2>Doctor Recommendations</h2>
                ${data.recommendations.map(doctor => `
                    <div class="doctor-card">
                        <h3>${doctor.name}</h3>
                        <p>${doctor.description}</p>
                        <p><strong>Treats:</strong> ${doctor.treats.join(', ')}</p>
                    </div>
                `).join('')}
            </div>

            <div class="section">
                <h2>Next Steps</h2>
                <ul>
                    <li>Contact your primary care physician to discuss these findings</li>
                    <li>If you have emergency symptoms, seek immediate medical attention</li>
                    <li>Keep track of any changes in your symptoms</li>
                    <li>Bring this report to your healthcare appointment</li>
                </ul>
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
        a.download = `symptom-report-${this.sessionId}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    resetApplication() {
        this.selectedSymptoms = [];
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.questionAnswers = {};
        this.analysisResults = [];
        this.sessionId = this.generateSessionId();
        
        // Reset UI
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        this.updateSelectedSymptoms();
        this.updateContinueButton();
        
        this.showScreen('welcome-screen');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SymptomChecker();
});