# Symptom Checker Web Application

A comprehensive web-based symptom checker that uses nested questioning to identify potential medical conditions and recommend appropriate healthcare professionals.

## Features

- 🔍 **Intelligent Symptom Analysis**: Uses nested questioning logic to narrow down potential conditions
- 🏥 **Doctor Recommendations**: Suggests appropriate medical specialists based on symptoms
- 📋 **Report Generation**: Creates downloadable reports with findings and recommendations
- 🎯 **User-Friendly Interface**: Clean, responsive design for easy navigation
- 🚀 **Quick Deployment**: Ready for deployment on GitHub and Render

## Deployment Instructions

### Deploy to Render

1. **Fork this repository** to your GitHub account
2. **Sign up for Render** at [render.com](https://render.com) using your GitHub account
3. **Create a new Web Service**:
   - Connect your GitHub repository
   - Set build command: `npm install`
   - Set start command: `npm start`
   - Set environment: `Node`
4. **Deploy**: Render will automatically build and deploy your app

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/symptom-checker-app.git
   cd symptom-checker-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Database**: JSON-based medical conditions database
- **Deployment**: Render, GitHub Pages compatible

## Medical Database

The application includes a comprehensive medical database with:
- 50+ common symptoms organized by body system
- 13+ medical conditions with symptom mappings
- 9+ medical specialties with treatment descriptions
- Decision tree logic for symptom analysis

## API Endpoints

- `GET /` - Main application interface
- `GET /api/symptoms` - Get all available symptoms
- `GET /api/conditions` - Get all medical conditions
- `POST /api/analyze` - Analyze symptoms and get recommendations
- `GET /api/doctors/:specialty` - Get doctor information by specialty
- `GET /health` - Health check endpoint

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Disclaimer

⚠️ **Medical Disclaimer**: This application is for informational purposes only and should not replace professional medical advice. Always consult with qualified healthcare professionals for medical concerns.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please open an issue on GitHub or contact the development team.
