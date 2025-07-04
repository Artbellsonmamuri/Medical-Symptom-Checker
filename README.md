# Medical Symptom Checker - Deployment Ready

## 🚀 Quick Deploy to Render

This is a **complete, production-ready** Medical Symptom Checker web application that **fixes the deployment error** and is ready for immediate GitHub upload and Render deployment.

### ✅ Error Resolution
- **Root-level `server.js`** - Fixed the "Cannot find module server.js" error
- **Proper `package.json`** with correct start command
- **Complete file structure** organized for seamless deployment
- **All dependencies properly configured**

## 📋 Features

### Core Functionality
- **Nested Questioning System**: Starts with broad symptom categories, then asks targeted follow-up questions
- **Comprehensive Medical Database**: Covers emergency, urgent care, and primary care conditions
- **Emergency Detection**: Immediately flags life-threatening conditions with red alerts
- **Doctor Recommendations**: Suggests appropriate specialists based on symptom analysis
- **Downloadable Reports**: Generates professional assessment reports in HTML format

### Medical Database Coverage
- **8 Symptom Categories**: Constitutional, Respiratory, Cardiovascular, Gastrointestinal, Neurological, Musculoskeletal, Genitourinary, Dermatological
- **Emergency Conditions**: Heart attack, stroke, severe allergic reactions, respiratory distress
- **Urgent Care Conditions**: Pneumonia, skin infections, moderate injuries
- **Routine Care**: Common cold, headaches, minor symptoms
- **10 Medical Specialties**: Emergency Medicine, Cardiology, Neurology, Dermatology, Gastroenterology, Primary Care, and more

## 🛠️ Technology Stack

### Backend
- **Node.js & Express.js**: Server-side runtime and web framework
- **CORS & Security**: Proper cross-origin and security headers
- **JSON Database**: Fast, lightweight medical data storage
- **RESTful API**: Clean API endpoints for frontend communication

### Frontend
- **Vanilla JavaScript**: No framework dependencies for fast loading
- **Responsive CSS**: Mobile-first design with professional medical styling
- **Progressive Enhancement**: Works without JavaScript for accessibility
- **Modern UI/UX**: Clean, clinical interface with emergency alerts

## 📁 File Structure

```
medical-symptom-checker/
├── server.js                 # Express server (ROOT LEVEL - Critical!)
├── package.json             # Dependencies and scripts
├── render.yaml              # Render deployment config
├── .gitignore              # Git ignore rules
├── README.md               # This documentation
├── medical-db.json         # Medical database
└── public/                 # Frontend files
    ├── index.html          # Main application
    ├── style.css           # Styling
    └── app.js             # JavaScript logic
```

## 🚀 Deployment Instructions

### Step 1: GitHub Upload
1. Create a new repository on GitHub
2. Upload all application files maintaining the exact structure shown above
3. Commit and push to your repository

### Step 2: Render Deployment
1. Sign up for [Render](https://render.com) (free tier available)
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Configure deployment settings:
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Node Version**: `>=18.0.0` (automatically detected)

5. Click "Create Web Service"
6. Wait for deployment (usually 2-3 minutes)

### Step 3: Access Your Application
- Your app will be available at: `https://your-app-name.onrender.com`
- Health check endpoint: `https://your-app-name.onrender.com/health`

## 🏥 Application Workflow

### Patient Journey
1. **Patient Information**: Enter age, gender, and basic details
2. **Symptom Selection**: Choose from organized symptom categories
3. **Additional Questions**: Provide symptom duration, pain scale, medications
4. **Analysis Results**: View probable conditions, confidence levels, and doctor recommendations
5. **Report Generation**: Download comprehensive assessment report

### Emergency Detection
The system immediately flags critical conditions:
- Heart attack symptoms (chest pain >2 minutes with associated symptoms)
- Stroke indicators (sudden weakness, confusion, speech difficulties)
- Severe allergic reactions (breathing difficulties, widespread swelling)
- Respiratory distress (inability to speak in full sentences)

## 🔧 Local Development

```bash
# Clone your repository
git clone https://github.com/yourusername/medical-symptom-checker.git
cd medical-symptom-checker

# Install dependencies
npm install

# Start development server
npm run dev
# OR
npm start

# Access locally
open http://localhost:3000
```

## 📚 API Endpoints

- `GET /` - Main application interface
- `GET /api/symptoms` - Get all available symptoms
- `GET /api/conditions` - Get all medical conditions
- `GET /api/doctors` - Get all medical specialties
- `POST /api/analyze` - Analyze symptoms and get recommendations
- `GET /health` - Health check endpoint

## 🛡️ Safety & Compliance

### Medical Disclaimers
- **Professional Consultation**: Emphasizes need for qualified medical advice
- **Informational Purpose**: Clear limitations of the tool
- **Emergency Guidance**: Proper instructions for urgent situations

### Data Privacy
- **No Personal Data Storage**: Client-side processing only
- **Secure Transmission**: HTTPS encryption via Render
- **Privacy Protection**: No tracking or data collection

## 🔄 Customization

### Adding New Conditions
Edit `medical-db.json`:
```json
{
  "conditions": [
    {
      "id": 14,
      "name": "New Condition",
      "severity": "moderate",
      "symptoms": ["Symptom 1", "Symptom 2"],
      "description": "Condition description",
      "recommendedDoctor": "Specialist Type"
    }
  ]
}
```

### Styling Changes
Modify `public/style.css` - CSS custom properties available for easy theming:
- Color scheme variables
- Responsive breakpoints
- Component-specific styles

### Logic Modifications
Update `public/app.js` for:
- Enhanced symptom analysis algorithms
- Additional user interface features
- Custom report generation

## 🐛 Troubleshooting

### Common Issues

1. **Deployment Error**: Ensure `server.js` is at root level
2. **Module Not Found**: Run `npm install` to install dependencies
3. **Port Issues**: Render automatically assigns ports via `process.env.PORT`
4. **Health Check Fails**: Verify `/health` endpoint is responding

### Debug Commands
```bash
# Check if server starts locally
node server.js

# Verify dependencies
npm list

# Test API endpoints
curl http://localhost:3000/health
```

## 📈 Performance

- **Fast Loading**: Optimized for quick initial page load
- **Efficient API**: Lightweight JSON responses
- **Responsive**: Works on all device sizes
- **Accessible**: Screen reader compatible

## 📄 License

MIT License - Feel free to modify and distribute

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## ⚠️ Medical Disclaimer

**IMPORTANT**: This application is designed for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Results produced by the tool should not be used for clinical decision-making or as a definitive diagnostic tool. Always consult a qualified healthcare professional for medical concerns.

**Emergency**: If you are experiencing a medical emergency, call 911 immediately.

---

## 📞 Support

For technical issues:
- Check the troubleshooting section above
- Review Render deployment logs
- Ensure all files are properly uploaded to GitHub

**Ready to deploy? Upload to GitHub and deploy to Render in minutes!**
