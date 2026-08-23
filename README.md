# GitMemoir — GitHub Analytics Dashboard

GitMemoir is a full-stack GitHub analytics application that connects with the GitHub REST API to collect, process, and visualize GitHub profile, repository, follower, and activity data.

The application uses a **Next.js frontend**, **FastAPI backend**, and **MongoDB Atlas** for persistent data storage. Docker Compose is included to run the frontend and backend together with a single command.

---

## ✨ Features

- 📊 GitHub profile and repository analytics
- 📁 Repository statistics and activity
- ⭐ Repository star tracking
- 👥 Followers and following insights
- 📈 Audience and GitHub activity data
- 🔄 GitHub data synchronization
- 💾 MongoDB-based data persistence
- ⚡ FastAPI REST backend
- 🌐 Next.js frontend
- 🐳 Docker & Docker Compose support
- ❤️ Backend health monitoring

---

## 🛠️ Tech Stack

**Frontend:** Next.js, React, TypeScript, Tailwind CSS  
**Backend:** Python, FastAPI, Uvicorn, Requests  
**Database:** MongoDB, MongoDB Atlas  
**DevOps:** Docker, Docker Compose  
**API:** GitHub REST API

---

## 🏗️ Architecture

```text
              GitMemoir
                  │
        ┌─────────┴─────────┐
        │                   │
   Next.js Frontend     FastAPI Backend
      :3000                 :8000
                              │
                   ┌──────────┴──────────┐
                   │                     │
             GitHub REST API       MongoDB Atlas

```

##📂 Project Structure
```
GitMemoir/
│
├── backend/
│   ├── app/
│   ├── scripts/
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
│   └── package-lock.json
│
├── .github/
├── docker-compose.yml
├── .gitignore
└── README.md
```
🚀 Getting Started
Prerequisites

Make sure you have:

Git
Docker Desktop
GitHub account
MongoDB Atlas account

Check Docker:
```
docker --version
docker compose version
```

🐳 Run with Docker

From the project root:

Build
docker compose build
Start
docker compose up

The application will be available at:
```
Frontend: http://localhost:3000
Backend: http://localhost:8000
Health Check: http://localhost:8000/health
```

To run in background:
```
docker compose up -d
```
To stop:
```
docker compose down
```
To rebuild after changes:
```
docker compose up --build
```

🏃 Run Without Docker
Backend

Create and activate a virtual environment:
```
python3 -m venv backend/venv
source backend/venv/bin/activate
```
Install dependencies:
```
pip install -r backend/requirements.txt
```
Start FastAPI:
```
cd backend
uvicorn app.main:app --reload
```
Backend:
```
http://localhost:8000
```
Frontend

Open another terminal:
```
cd frontend
npm install
npm run dev
```
Frontend:
```
http://localhost:3000
```

🙌 Acknowledgements

Built using:
```
GitHub REST API
FastAPI
Next.js
React
MongoDB
MongoDB Atlas
Docker
Docker Compose
```
GitMemoir — Turning GitHub activity into meaningful insights.

Images:

<img width="1710" height="1032" alt="image" src="https://github.com/user-attachments/assets/b48a2254-697b-4d84-aac8-73034f46d767" />


<img width="1710" height="872" alt="image" src="https://github.com/user-attachments/assets/d0d76819-c338-42cf-924c-43c05c1ddcaf" />

