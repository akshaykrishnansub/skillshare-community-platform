# 🚀 SkillShare – Community Learning Platform
SkillShare is an open-source platform enabling users to create, share, and enroll in community-driven courses. The platform supports course creation, enrollment, and basic user profiles.

# 🌟 Features
## 👤 Authentication & Authorization
Secure user registration & login <br>
JWT-based authentication using HTTP-only cookies<br>
Protected routes with middleware<br>

## 📚 Course Management
Create, edit, and delete courses (creator-only access) <br>
View structured course content <br>
Clean text formatting with paragraph support<br>

## 🎓 Enrollment System
Enroll in courses <br>
Unenroll from courses <br>
Personalized enrolled courses view<br>

## 📊 Dashboard
View key stats: <br>
Total courses created<br>
Total enrolled courses<br>
Quick navigation for course management and Profile management<br>

## 👨‍💻 Profile Management
View and update profile <br>
Track created and enrolled courses <br>

# 🛠️ Tech Stack

## Frontend
React.js<br>
Tailwind CSS<br>
React Router<br>

## Backend
Node.js<br>
Express.js<br>
MVC Architecture<br>

## Database
MySQL

## Authentication & Security
JWT (JSON Web Tokens)<br>
bcrypt (Password hashing)<br>
HTTP-only cookies<br>

## DevOps / Deployment
Docker (Backend containerization)<br>
Vercel (Frontend)<br>
Railway (Backend hosting)<br>

## 🐳 Docker Support (Backend)

The backend is containerized using Docker for consistent development and deployment.<br>

🔹 Build Docker Image <br>
docker build -t skillshare-backend . <br>
🔹 Run Container <br>
docker run -p 3000:3000 skillshare-backend <br>

## 🔹 Example Dockerfile
FROM node:18 <br>

WORKDIR /app<br>

COPY package*.json ./<br>
RUN npm install<br>

COPY . .<br>

EXPOSE 3000<br>

CMD ["npm", "start"]<br>

# 📂 Project Structure (MVC)

server/<br>
│<br>
├── controllers/<br>
├── models/<br>
├── routes/<br>
├── middleware/<br>
└── server.js<br>
