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
