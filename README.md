# GitPulse

> A GitHub analytics dashboard for tracking repositories, audience insights, and GitHub activity in one place.

GitPulse is a full-stack GitHub analytics application that connects with the GitHub REST API and presents useful repository and audience information through a modern web dashboard.

The application fetches GitHub data, processes it through a FastAPI backend, stores the required information in MongoDB, and displays the results through a Next.js frontend.

---

## ✨ Features

- 🔐 GitHub API integration
- 📊 GitHub analytics dashboard
- 📁 Repository listing and statistics
- ⭐ Repository star tracking
- 👥 Audience and follower insights
- 📈 Repository traffic information
- 🔄 Manual data synchronization
- 💾 MongoDB-based data storage
- ⚡ FastAPI backend
- 🌐 Next.js frontend
- 🐳 Docker and Docker Compose support
- 🔒 Environment-based configuration
- ❤️ Backend health monitoring

---

## 🛠️ Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend

- Python
- FastAPI
- Uvicorn
- Requests

### Database

- MongoDB
- MongoDB Atlas

### DevOps

- Docker
- Docker Compose

### External API

- GitHub REST API

---

## 📂 Project Structure

```text
GitPulse/
│
├── .github/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   └── ...
│   │
│   ├── scripts/
│   ├── venv/
│   ├── .env
│   ├── .env.example
│   ├── Dockerfile
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   └── ...
│
├── scripts/
│
├── docker-compose.yml
├── render.yaml
├── .gitignore
├── package-lock.json
└── README.md
