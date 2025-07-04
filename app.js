// Medical Data
const medicalData = {
  "symptoms": {
    "constitutional": [
      {"id": "fever", "name": "Fever", "followUps": ["temperature", "duration", "associated_symptoms"]},
      {"id": "fatigue", "name": "Fatigue", "followUps": ["severity", "duration", "activity_impact"]},
      {"id": "weight_loss", "name": "Unexplained weight loss", "followUps": ["amount", "timeframe", "appetite"]},
      {"id": "night_sweats", "name": "Night sweats", "followUps": ["frequency", "severity", "associated_symptoms"]},
      {"id": "chills", "name": "Chills", "followUps": ["fever_present", "duration", "severity"]}
    ],
    "respiratory": [
      {"id": "cough", "name": "Cough", "followUps": ["type", "duration", "blood", "timing"]},
      {"id": "shortness_breath", "name": "Shortness of breath", "followUps": ["onset", "activity_related", "severity", "position"]},
      {"id": "chest_pain_resp", "name": "Chest pain", "followUps": ["location", "character", "triggers", "radiation"]},
      {"id": "wheezing", "name": "Wheezing", "followUps": ["triggers", "frequency", "severity"]},
      {"id": "sore_throat", "name": "Sore throat", "followUps": ["severity", "swallowing", "fever", "duration"]}
    ],
    "cardiovascular": [
      {"id": "chest_pain_cardiac", "name": "Chest pain", "followUps": ["character", "radiation", "triggers", "associated_symptoms"]},
      {"id": "palpitations", "name": "Heart palpitations", "followUps": ["frequency", "triggers", "associated_symptoms", "duration"]},
      {"id": "leg_swelling", "name": "Leg swelling", "followUps": ["bilateral", "duration", "associated_symptoms", "severity"]},
      {"id": "dizziness", "name": "Dizziness", "followUps": ["type", "triggers", "associated_symptoms", "frequency"]}
    ],
    "gastrointestinal": [
      {"id": "nausea", "name": "Nausea", "followUps": ["vomiting", "triggers", "severity", "associated_symptoms"]},
      {"id": "abdominal_pain", "name": "Abdominal pain", "followUps": ["location", "character", "severity", "associated_symptoms"]},
      {"id": "diarrhea", "name": "Diarrhea", "followUps": ["frequency", "consistency", "blood", "duration"]},
      {"id": "constipation", "name": "Constipation", "followUps": ["duration", "frequency", "associated_symptoms", "severity"]}
    ],
    "neurological": [
      {"id": "headache", "name": "Headache", "followUps": ["type", "location", "severity", "associated_symptoms"]},
      {"id": "confusion", "name": "Confusion", "followUps": ["onset", "severity", "associated_symptoms", "triggers"]},
      {"id": "weakness", "name": "Weakness", "followUps": ["location", "onset", "severity", "associated_symptoms"]},
      {"id": "numbness", "name": "Numbness/Tingling", "followUps": ["location", "onset", "progression", "associated_symptoms"]}
    ],
    "musculoskeletal": [
      {"id": "joint_pain", "name": "Joint pain", "followUps": ["location", "swelling", "stiffness", "triggers"]},
      {"id": "back_pain", "name": "Back pain", "followUps": ["location", "radiation", "triggers", "severity"]},
      {"id": "muscle_pain", "name": "Muscle pain", "followUps": ["location", "triggers", "severity", "associated_symptoms"]}
    ],
    "dermatological": [
      {"id": "rash", "name": "Skin rash", "followUps": ["appearance", "location", "itching", "spreading"]},
      {"id": "itching", "name": "Itching", "followUps": ["location", "severity", "rash_present", "triggers"]}
    ]
  },
  "conditions": [
    {
      "id": "heart_attack",
      "name": "Heart Attack",
      "urgency": "emergency",
      "symptoms": ["chest_pain_cardiac", "shortness_breath", "nausea"],
      "doctor": "emergency",
      "description": "Life-threatening condition requiring immediate medical attention"
    },
    {
      "id": "stroke",
      "name": "Stroke",
      "urgency": "emergency",
      "symptoms": ["weakness", "confusion", "headache"],
      "doctor": "emergency",
      "description": "Brain emergency requiring immediate treatment"
    },
    {
      "id": "pneumonia",
      "name": "Pneumonia",
      "urgency": "urgent",
      "symptoms": ["cough", "fever", "shortness_breath"],
      "doctor": "primary_care",
      "description": "Lung infection requiring prompt medical treatment"
    },
    {
      "id": "common_cold",
      "name": "Common Cold",
      "urgency": "routine",
      "symptoms": ["cough", "sore_throat", "fatigue"],
      "doctor": "primary_care",
      "description": "Viral upper respiratory infection"
    },
    {
      "id": "migraine",
      "name": "Migraine",
      "urgency": "routine",
      "symptoms": ["headache", "nausea"],
      "doctor": "neurology",
      "description": "Severe headache disorder"
    },
    {
      "id": "skin_infection",
      "name": "Skin Infection",
      "urgency": "urgent",
      "symptoms": ["rash", "fever"],
      "doctor": "dermatology",
      "description": "Bacterial or fungal skin infection"
    }
  ],
  "doctors": {
    "emergency": {
      "name": "Emergency Medicine",
      "description": "Immediate life-threatening conditions",
      "urgency": "Call 911 immediately"
    },
    "primary_care": {
      "name": "Primary Care Physician",
      "description": "General medical care and routine conditions",
      "urgency": "Schedule appointment within 24-48 hours"
    },
    "cardiology": {
      "name": "Cardiologist",
      "description": "Heart and cardiovascular conditions",
      "urgency": "Schedule specialty appointment"
    },
    "neurology": {
      "name": "Neurologist",
      "description": "Brain and nervous system conditions",
      "urgency": "Schedule specialty appointment"
    },
    "dermatology": {
      "name": "Dermatologist",
      "description": "Skin conditions and disorders",
      "urgency": "Schedule specialty appointment"
    },
    "gastroenterology": {
      "name": "Gastroenterologist",
      "description": "Digestive system conditions",
      "urgency": "Schedule specialty appointment"
    }
  },
  "redFlags": [
    "Chest pain lasting more than 2 minutes",
    "Difficulty breathing or respiratory distress",
    "Loss of consciousness",
    "Severe bleeding that won't stop",
    "Sudden severe headache unlike any before",
    "Sudden weakness or numbness on one side",
    "Signs of stroke (FAST: Face, Arms, Speech, Time)",
    "Severe allergic reaction with breathing difficulty"
  ]
};

// Question database
const questionDatabase = {
  temperature: {
    question: "What is your temperature?",
    options: ["Normal (98.6°F or below)", "Low grade (99-100.4°F)", "High (100.5-102°F)", "Very high (above 102°F)"],
    emergency: ["Very high (above 102°F)"]
  },
  duration: {
    question: "How long have you had this symptom?",
    options: ["Less than 24 hours", "1-3 days", "4-7 days", "More than a week"],
    emergency: []
  },
  severity: {
    question: "How severe is this symptom?",
    options: ["Mild", "Moderate", "Severe", "Very severe"],
    emergency: ["Very severe"]
  },
  onset: {
    question: "How did this symptom start?",
    options: ["Gradually over time", "Suddenly", "After activity", "At rest"],
    emergency: ["Suddenly"]
  },
  character: {
    question: "How would you describe the pain?",
    options: ["Dull ache", "Sharp/stabbing", "Burning", "Crushing/pressure"],
    emergency: ["Crushing/pressure"]
  },
  radiation: {
    question: "Does the pain spread to other areas?",
    options: ["No", "To arm(s)", "To jaw/neck", "To back"],
    emergency: ["To arm(s)", "To jaw/neck"]
  },
  associated_symptoms: {
    question: "Are you experiencing any of these additional symptoms?",
    options: ["None", "Nausea/vomiting", "Sweating", "Dizziness", "Shortness of breath"],
    emergency: ["Shortness of breath", "Sweating"]
  },
  triggers: {
    question: "What makes it worse?",
    options: ["Nothing specific", "Physical activity", "Stress", "Eating", "Lying down"],
    emergency: ["Physical activity"]
  },
  location: {
    question: "Where exactly is the symptom located?",
    options: ["Localized to one area", "Widespread", "Moving around", "Both sides"],
    emergency: []
  },
  type: {
    question: "What type of symptom is this?",
    options: ["Dry", "Productive (with mucus)", "Bloody", "Barking"],
    emergency: ["Bloody"]
  },
  blood: {
    question: "Is there any blood present?",
    options: ["No", "Small amounts", "Moderate amounts", "Large amounts"],
    emergency: ["Moderate amounts", "Large amounts"]
  },
  activity_impact: {
    question: "How does this affect your daily activities?",
    options: ["No impact", "Minor limitations", "Moderate limitations", "Severe limitations"],
    emergency: ["Severe limitations"]
  },
  frequency: {
    question: "How often does this occur?",
    options: ["Rarely", "Sometimes", "Often", "Constantly"],
    emergency: ["Constantly"]
  },
  position: {
    question: "Does your position affect this symptom?",
    options: ["No difference", "Better when sitting", "Better when lying down", "Worse when lying down"],
    emergency: ["Worse when lying down"]
  },
  activity_related: {
    question: "Is this related to physical activity?",
    options: ["No", "Only during exercise", "During light activity", "Even at rest"],
    emergency: ["Even at rest"]
  }
};

// Application state
let currentState = {
  currentScreen: 'disclaimer-screen',
  demographics: {},
  selectedCategory: null,
  selectedSymptoms: [],
  questionIndex: 0,
  questions: [],
  answers: {},
  assessment: null,
  emergencyDetected: false
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupEventListeners();
  showScreen('disclaimer-screen');
}

function setupEventListeners() {
  // Demographics form
  const demographicsForm = document.getElementById('demographics-form');
  if (demographicsForm) {
    demographicsForm.addEventListener('submit', handleDemographicsSubmit);
  }
  
  // Symptom category buttons
  document.querySelectorAll('.symptom-category-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      selectSymptomCategory(this.dataset.category);
    });
  });
}

function startAssessment() {
  showScreen('demographics-screen');
  updateNavProgress(1);
}

function handleDemographicsSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  currentState.demographics = {
    age: formData.get('age'),
    gender: formData.get('gender')
  };
  
  showScreen('symptom-categories-screen');
  updateNavProgress(2);
}

function selectSymptomCategory(category) {
  currentState.selectedCategory = category;
  
  // Reset selected symptoms when changing category
  currentState.selectedSymptoms = [];
  
  // Update UI
  document.querySelectorAll('.symptom-category-btn').forEach(btn => {
    btn.classList.remove('selected');
  });
  
  const selectedBtn = document.querySelector(`[data-category="${category}"]`);
  if (selectedBtn) {
    selectedBtn.classList.add('selected');
  }
  
  // Show specific symptoms with a small delay to ensure smooth transition
  setTimeout(() => {
    showSpecificSymptoms(category);
  }, 100);
}

function showSpecificSymptoms(category) {
  const symptoms = medicalData.symptoms[category];
  const container = document.getElementById('specific-symptoms-list');
  const description = document.getElementById('category-description');
  
  if (!symptoms || !container || !description) {
    console.error('Required elements not found');
    return;
  }
  
  // Update description
  const categoryNames = {
    constitutional: 'General symptoms affecting your overall well-being',
    respiratory: 'Symptoms related to breathing and lungs',
    cardiovascular: 'Symptoms related to heart and circulation',
    gastrointestinal: 'Symptoms related to stomach and digestion',
    neurological: 'Symptoms related to brain and nervous system',
    musculoskeletal: 'Symptoms related to muscles, joints, and bones',
    dermatological: 'Symptoms related to skin and appearance'
  };
  
  description.textContent = categoryNames[category] || 'Select the symptoms you are experiencing:';
  
  // Create symptom list with improved event handling
  container.innerHTML = symptoms.map(symptom => `
    <div class="symptom-item" data-symptom-id="${symptom.id}">
      <input type="checkbox" class="symptom-checkbox" id="checkbox-${symptom.id}">
      <label class="symptom-label" for="checkbox-${symptom.id}">${symptom.name}</label>
    </div>
  `).join('');
  
  // Add event listeners to symptom items
  container.querySelectorAll('.symptom-item').forEach(item => {
    item.addEventListener('click', function(e) {
      // Prevent double-firing if clicking on checkbox directly
      if (e.target.type === 'checkbox') return;
      
      const symptomId = this.dataset.symptomId;
      const checkbox = this.querySelector('.symptom-checkbox');
      
      // Toggle checkbox state
      checkbox.checked = !checkbox.checked;
      toggleSymptomSelection(symptomId, checkbox.checked);
    });
    
    // Also handle direct checkbox clicks
    const checkbox = item.querySelector('.symptom-checkbox');
    checkbox.addEventListener('change', function(e) {
      const symptomId = item.dataset.symptomId;
      toggleSymptomSelection(symptomId, this.checked);
    });
  });
  
  showScreen('specific-symptoms-screen');
  updateContinueButton();
}

function toggleSymptomSelection(symptomId, isSelected) {
  const item = document.querySelector(`[data-symptom-id="${symptomId}"]`);
  const checkbox = document.getElementById(`checkbox-${symptomId}`);
  
  if (isSelected) {
    item.classList.add('selected');
    checkbox.checked = true;
    if (!currentState.selectedSymptoms.includes(symptomId)) {
      currentState.selectedSymptoms.push(symptomId);
    }
  } else {
    item.classList.remove('selected');
    checkbox.checked = false;
    currentState.selectedSymptoms = currentState.selectedSymptoms.filter(id => id !== symptomId);
  }
  
  updateContinueButton();
}

function updateContinueButton() {
  const continueBtn = document.getElementById('continue-btn');
  if (continueBtn) {
    continueBtn.disabled = currentState.selectedSymptoms.length === 0;
  }
}

function continueToQuestions() {
  generateQuestions();
  showScreen('questions-screen');
  updateNavProgress(3);
  showCurrentQuestion();
}

function generateQuestions() {
  currentState.questions = [];
  
  // Generate questions based on selected symptoms
  currentState.selectedSymptoms.forEach(symptomId => {
    const symptom = findSymptomById(symptomId);
    if (symptom && symptom.followUps) {
      symptom.followUps.forEach(followUpId => {
        if (questionDatabase[followUpId]) {
          currentState.questions.push({
            symptomId: symptomId,
            symptomName: symptom.name,
            followUpId: followUpId,
            ...questionDatabase[followUpId]
          });
        }
      });
    }
  });
  
  currentState.questionIndex = 0;
  currentState.answers = {};
}

function findSymptomById(symptomId) {
  for (const category in medicalData.symptoms) {
    const symptom = medicalData.symptoms[category].find(s => s.id === symptomId);
    if (symptom) return symptom;
  }
  return null;
}

function showCurrentQuestion() {
  const question = currentState.questions[currentState.questionIndex];
  if (!question) {
    completeAssessment();
    return;
  }
  
  // Update progress
  const progress = ((currentState.questionIndex + 1) / currentState.questions.length) * 100;
  const progressFill = document.getElementById('progress-fill');
  if (progressFill) {
    progressFill.style.width = progress + '%';
  }
  
  // Update question content
  const questionTitle = document.getElementById('question-title');
  if (questionTitle) {
    questionTitle.textContent = `Question ${currentState.questionIndex + 1} of ${currentState.questions.length}`;
  }
  
  const questionContent = document.getElementById('question-content');
  if (questionContent) {
    questionContent.innerHTML = `
      <div class="question-container">
        <h3>About your ${question.symptomName.toLowerCase()}:</h3>
        <p>${question.question}</p>
        <div class="question-options">
          ${question.options.map((option, index) => `
            <div class="question-option" data-option-index="${index}">
              <input type="radio" class="option-radio" name="current-question" value="${index}" id="option-${index}">
              <label class="option-label" for="option-${index}">${option}</label>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    
    // Add event listeners to question options
    questionContent.querySelectorAll('.question-option').forEach(option => {
      option.addEventListener('click', function(e) {
        if (e.target.type === 'radio') return;
        
        const optionIndex = parseInt(this.dataset.optionIndex);
        const radio = this.querySelector('.option-radio');
        radio.checked = true;
        selectAnswer(optionIndex);
      });
      
      const radio = option.querySelector('.option-radio');
      radio.addEventListener('change', function() {
        if (this.checked) {
          const optionIndex = parseInt(this.value);
          selectAnswer(optionIndex);
        }
      });
    });
  }
  
  // Update button states
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  if (prevBtn) {
    prevBtn.disabled = currentState.questionIndex === 0;
  }
  if (nextBtn) {
    nextBtn.disabled = true;
  }
}

function selectAnswer(optionIndex) {
  const question = currentState.questions[currentState.questionIndex];
  const option = question.options[optionIndex];
  
  // Update UI
  document.querySelectorAll('.question-option').forEach(opt => opt.classList.remove('selected'));
  document.querySelectorAll('.option-radio').forEach(radio => radio.checked = false);
  
  const selectedOption = document.querySelector(`[data-option-index="${optionIndex}"]`);
  const selectedRadio = document.getElementById(`option-${optionIndex}`);
  
  if (selectedOption) {
    selectedOption.classList.add('selected');
  }
  if (selectedRadio) {
    selectedRadio.checked = true;
  }
  
  // Store answer
  const questionKey = `${question.symptomId}_${question.followUpId}`;
  currentState.answers[questionKey] = {
    question: question.question,
    answer: option,
    optionIndex: optionIndex,
    isEmergency: question.emergency.includes(option)
  };
  
  // Check for emergency
  if (question.emergency.includes(option)) {
    currentState.emergencyDetected = true;
    setTimeout(() => {
      showEmergencyAlert();
    }, 500);
  }
  
  // Enable next button
  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) {
    nextBtn.disabled = false;
  }
}

function nextQuestion() {
  if (currentState.questionIndex < currentState.questions.length - 1) {
    currentState.questionIndex++;
    showCurrentQuestion();
  } else {
    completeAssessment();
  }
}

function previousQuestion() {
  if (currentState.questionIndex > 0) {
    currentState.questionIndex--;
    showCurrentQuestion();
  }
}

function showEmergencyAlert() {
  const emergencyAlert = document.getElementById('emergency-alert');
  if (emergencyAlert) {
    emergencyAlert.classList.remove('hidden');
  }
}

function dismissEmergencyAlert() {
  const emergencyAlert = document.getElementById('emergency-alert');
  if (emergencyAlert) {
    emergencyAlert.classList.add('hidden');
  }
}

function completeAssessment() {
  // Calculate assessment results
  currentState.assessment = calculateAssessment();
  
  // Show results
  showResults();
  showScreen('results-screen');
  updateNavProgress(4);
}

function calculateAssessment() {
  const conditions = medicalData.conditions;
  const selectedSymptoms = currentState.selectedSymptoms;
  
  // Calculate condition probabilities
  const conditionScores = conditions.map(condition => {
    const matchingSymptoms = condition.symptoms.filter(symptom => 
      selectedSymptoms.includes(symptom)
    );
    
    const probability = matchingSymptoms.length / condition.symptoms.length;
    const confidence = Math.round(probability * 100);
    
    return {
      ...condition,
      matchingSymptoms,
      probability,
      confidence
    };
  }).filter(condition => condition.probability > 0)
    .sort((a, b) => b.probability - a.probability);
  
  // Determine overall urgency
  let overallUrgency = 'routine';
  if (currentState.emergencyDetected) {
    overallUrgency = 'emergency';
  } else if (conditionScores.some(c => c.urgency === 'urgent')) {
    overallUrgency = 'urgent';
  }
  
  // Get primary doctor recommendation
  const primaryCondition = conditionScores[0];
  const doctorRecommendation = primaryCondition ? 
    medicalData.doctors[primaryCondition.doctor] : 
    medicalData.doctors.primary_care;
  
  return {
    conditions: conditionScores,
    urgency: overallUrgency,
    doctorRecommendation,
    emergencyDetected: currentState.emergencyDetected,
    assessmentDate: new Date().toISOString()
  };
}

function showResults() {
  const assessment = currentState.assessment;
  const container = document.getElementById('results-content');
  
  if (!container) return;
  
  let html = `
    <div class="results-summary">
      <div class="urgency-level urgency-${assessment.urgency}">
        ${assessment.urgency.charAt(0).toUpperCase() + assessment.urgency.slice(1)} Priority
      </div>
      <h3>Assessment Summary</h3>
      <p>Based on your symptoms, we've identified ${assessment.conditions.length} potential condition(s) that may match your symptoms.</p>
    </div>
  `;
  
  if (assessment.emergencyDetected) {
    html += `
      <div class="red-flag-warning">
        <h3>⚠️ Emergency Warning</h3>
        <p>Your symptoms may indicate a serious medical emergency. Please seek immediate medical attention.</p>
      </div>
    `;
  }
  
  if (assessment.conditions.length > 0) {
    html += `
      <div class="conditions-list">
        <h3>Possible Conditions</h3>
        ${assessment.conditions.map(condition => `
          <div class="condition-item">
            <div>
              <div class="condition-name">${condition.name}</div>
              <div class="condition-description">${condition.description}</div>
            </div>
            <div class="condition-confidence">${condition.confidence}%</div>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  html += `
    <div class="doctor-recommendation">
      <h3>Recommended Next Steps</h3>
      <div class="doctor-specialty">${assessment.doctorRecommendation.name}</div>
      <div class="doctor-description">${assessment.doctorRecommendation.description}</div>
      <div class="doctor-urgency"><strong>${assessment.doctorRecommendation.urgency}</strong></div>
    </div>
  `;
  
  if (assessment.emergencyDetected) {
    html += `
      <div class="emergency-notice">
        <h3>Emergency Contact Information</h3>
        <p><strong>Emergency: 911</strong></p>
        <p><strong>Poison Control: 1-800-222-1222</strong></p>
        <p><strong>Crisis Hotline: 988</strong></p>
      </div>
    `;
  }
  
  container.innerHTML = html;
}

function generateReport() {
  const assessment = currentState.assessment;
  const reportDate = new Date().toLocaleDateString();
  
  let reportContent = `
MEDICAL SYMPTOM ASSESSMENT REPORT
Generated on: ${reportDate}

PATIENT INFORMATION:
Age: ${currentState.demographics.age}
Gender: ${currentState.demographics.gender}

SYMPTOMS REPORTED:
${currentState.selectedSymptoms.map(id => {
  const symptom = findSymptomById(id);
  return `• ${symptom ? symptom.name : id}`;
}).join('\n')}

DETAILED RESPONSES:
${Object.entries(currentState.answers).map(([key, answer]) => 
  `${answer.question}: ${answer.answer}`
).join('\n')}

ASSESSMENT RESULTS:
Priority Level: ${assessment.urgency.toUpperCase()}
${assessment.emergencyDetected ? 'EMERGENCY DETECTED - SEEK IMMEDIATE MEDICAL ATTENTION' : ''}

POSSIBLE CONDITIONS:
${assessment.conditions.map(condition => 
  `• ${condition.name} (${condition.confidence}% match) - ${condition.description}`
).join('\n')}

RECOMMENDATION:
${assessment.doctorRecommendation.name}
${assessment.doctorRecommendation.description}
${assessment.doctorRecommendation.urgency}

IMPORTANT DISCLAIMERS:
• This assessment is for informational purposes only
• It does not constitute medical advice or diagnosis
• Always consult with qualified healthcare providers
• In case of emergency, call 911 immediately
• Do not delay seeking professional medical care

Report generated by Medical Symptom Checker Tool
  `;
  
  // Create and download file
  const blob = new Blob([reportContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `medical-assessment-${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function restartAssessment() {
  // Reset all state
  currentState = {
    currentScreen: 'disclaimer-screen',
    demographics: {},
    selectedCategory: null,
    selectedSymptoms: [],
    questionIndex: 0,
    questions: [],
    answers: {},
    assessment: null,
    emergencyDetected: false
  };
  
  // Clear all forms
  const demographicsForm = document.getElementById('demographics-form');
  if (demographicsForm) {
    demographicsForm.reset();
  }
  
  // Clear category selection
  document.querySelectorAll('.symptom-category-btn').forEach(btn => {
    btn.classList.remove('selected');
  });
  
  // Clear symptom selection
  const symptomsContainer = document.getElementById('specific-symptoms-list');
  if (symptomsContainer) {
    symptomsContainer.innerHTML = '';
  }
  
  // Clear results
  const resultsContainer = document.getElementById('results-content');
  if (resultsContainer) {
    resultsContainer.innerHTML = '';
  }
  
  // Reset progress
  const progressFill = document.getElementById('progress-fill');
  if (progressFill) {
    progressFill.style.width = '0%';
  }
  
  // Hide emergency alert
  dismissEmergencyAlert();
  
  // Show disclaimer screen
  showScreen('disclaimer-screen');
  updateNavProgress(0);
}

function goBack() {
  if (currentState.currentScreen === 'specific-symptoms-screen') {
    showScreen('symptom-categories-screen');
    updateNavProgress(2);
  } else if (currentState.currentScreen === 'questions-screen') {
    showScreen('specific-symptoms-screen');
    updateNavProgress(2);
  }
}

function showScreen(screenId) {
  // Hide all screens
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  
  // Show target screen
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }
  
  currentState.currentScreen = screenId;
  
  // Update navigation visibility
  const navProgress = document.getElementById('nav-progress');
  if (navProgress) {
    if (screenId === 'disclaimer-screen') {
      navProgress.classList.add('hidden');
    } else {
      navProgress.classList.remove('hidden');
    }
  }
}

function updateNavProgress(step) {
  const steps = document.querySelectorAll('.nav-step');
  steps.forEach((stepEl, index) => {
    stepEl.classList.remove('active', 'completed');
    if (index + 1 === step) {
      stepEl.classList.add('active');
    } else if (index + 1 < step) {
      stepEl.classList.add('completed');
    }
  });
}

// Error handling
window.addEventListener('error', function(e) {
  console.error('Application error:', e.error);
});

// Prevent form submission from refreshing page
document.addEventListener('submit', function(e) {
  e.preventDefault();
});

// Additional accessibility
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    dismissEmergencyAlert();
  }
});