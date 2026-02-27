# React Frontend App with CI/CD Pipeline

A modern React frontend application with automated CI/CD pipeline including SonarQube quality checks and Docker containerization.

## 📋 Prerequisites

- Node.js (v18 or higher)
- Docker
- Docker Hub account (for pushing images)
- SonarCloud account (for code quality checks)

## 🚀 Getting Started

### Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Run Tests**
   ```bash
   npm test
   ```

## 🐳 Docker

### Build Docker Image

```bash
docker build -t your-username/dockerapp:latest .
```

### Run Docker Container

```bash
docker run -p 80:80 your-username/dockerapp:latest
```

Access the app at `http://localhost`

### Push to Docker Hub

```bash
docker login
docker push your-username/dockerapp:latest
```

## 🔄 CI/CD Pipeline

The project uses GitHub Actions for automated CI/CD:

### Workflow: `basic.yml`
- Triggers on push and pull requests to main branch
- Installs dependencies
- Builds the React app
- Deploys to GitHub Pages

### Workflow: `sonarcheck.yml`
- Runs after basic pipeline completes
- Installs dependencies
- Builds the React app
- Runs ESLint for code quality
- **SonarQube quality scan** (after build)
- **Docker build and push** (after SonarQube passes)

### Pipeline Sequence
```
1. Checkout code
2. Install dependencies
3. Build React app
4. Run tests & linting
5. SonarQube quality check
6. Docker build & push (only if SonarQube succeeds)
7. Deploy
```

## 📋 Configuration

### SonarQube Setup

Add these GitHub Secrets:
- `SONAR_TOKEN`: Your SonarCloud token
- `DOCKER_USERNAME`: Your Docker Hub username
- `DOCKER_PASSWORD`: Your Docker Hub password

### Update Docker Hub Config

Edit `.github/workflows/sonarcheck.yml`:
Replace `jonnamohit/dockerapp` with your Docker Hub repository name

## 🏗️ Project Structure

```
/
├── src/                    # React source code
│   ├── components/         # React components
│   ├── App.js             # Main App component
│   ├── App.css            # App styles
│   ├── index.js           # React entry point
│   └── index.css          # Global styles
├── public/                # Static files
│   └── index.html         # HTML template
├── package.json           # Dependencies
├── Dockerfile             # Multi-stage Docker build
├── nginx.conf            # Nginx configuration
└── .github/workflows/    # GitHub Actions workflows
    ├── basic.yml
    └── sonarcheck.yml
```

## 🎨 Features

- ⚛️ Modern React with Hooks
- 🎯 Component-based architecture
- 🚀 Multi-stage Docker build for optimization
- ✅ SonarQube quality gates
- 🔄 Automated CI/CD pipeline
- 📦 Docker Hub integration
- 🌐 Responsive design with CSS

## 📝 License

This project is open source and available under the MIT License.
