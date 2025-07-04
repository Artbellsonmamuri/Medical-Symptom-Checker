const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Load medical database
const medicalDB = require('./medical-db.json');

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API Routes
app.get('/api/symptoms', (req, res) => {
    res.json(medicalDB.symptoms);
});

app.get('/api/conditions', (req, res) => {
    res.json(medicalDB.conditions);
});

app.get('/api/doctors', (req, res) => {
    res.json(medicalDB.doctors);
});

app.post('/api/analyze', (req, res) => {
    const { symptoms } = req.body;

    if (!symptoms || symptoms.length === 0) {
        return res.status(400).json({ error: 'No symptoms provided' });
    }

    // Analyze symptoms and find matching conditions
    const matches = [];

    medicalDB.conditions.forEach(condition => {
        const matchingSymptoms = symptoms.filter(symptom => 
            condition.symptoms.includes(symptom)
        );

        if (matchingSymptoms.length > 0) {
            const confidence = (matchingSymptoms.length / condition.symptoms.length) * 100;
            matches.push({
                condition: condition.name,
                confidence: Math.round(confidence),
                severity: condition.severity,
                matchingSymptoms: matchingSymptoms,
                description: condition.description,
                recommendedDoctor: condition.recommendedDoctor
            });
        }
    });

    // Sort by confidence
    matches.sort((a, b) => b.confidence - a.confidence);

    res.json({
        analysis: matches,
        emergency: matches.some(m => m.severity === 'emergency'),
        timestamp: new Date().toISOString()
    });
});

// Serve main application
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Medical Symptom Checker server running on port ${PORT}`);
});

module.exports = app;
