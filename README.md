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
└── app.js<br>

# 🔌 API Endpoints (Sample)
## Auth
POST /api/register<br>
POST /api/login<br>
POST /api/logout<br>
GET /api/me<br>

## Courses
GET /api/courses<br>
POST /api/courses<br>
PUT /api/courses/:id<br>
DELETE /api/courses/:id<br>

## Enrollment
POST /api/courses/:id/enroll<br>
DELETE /api/courses/:id/enroll<br>

# ⚙️ Setup Instructions
## 1️⃣ Clone the repository
git clone https://github.com/your-username/skillshare.git <br>
cd skillshare <br>

## 2️⃣ Backend Setup
cd server<br>
npm install<br>

Create .env:<br>

PORT=any_port<br>
DB_HOST=your_host<br>
DB_USER=your_user<br>
DB_PASSWORD=your_password<br>
DB_NAME=your_database<br>
JWT_SECRET=your_secret<br>

Run:<br>

npm run dev<br>

## 3️⃣ Frontend Setup
cd client<br>
npm install<br>
npm run dev<br>

# 📸 Screenshots
<img width="1920" height="1035" alt="Screenshot (218)" src="https://github.com/user-attachments/assets/74038eb5-2335-4014-b094-ecd9e11f04c2" />
<img width="1920" height="1024" alt="Screenshot (219)" src="https://github.com/user-attachments/assets/4d644cf0-23f4-412a-8d0b-403999c9a5dd" />
<img width="1920" height="1024" alt="Screenshot (220)" src="https://github.com/user-attachments/assets/d5b947a0-c30f-42af-b7e1-03fdcaa32894" />
<img width="1920" height="1021" alt="Screenshot (221)" src="https://github.com/user-attachments/assets/ea11828c-654c-4d3c-a580-342b58d33bae" />
<img width="1920" height="1028" alt="Screenshot (222)" src="https://github.com/user-attachments/assets/3e054035-3620-44a1-9076-625b7fd1fb63" />
## Mobile View:
<img width="424" height="903" alt="Screenshot (223)" src="https://github.com/user-attachments/assets/2560acbd-11cd-48d8-8222-8db08f2d3a7f" />
## Tablet View:
<img width="957" height="921" alt="Screenshot (224)" src="https://github.com/user-attachments/assets/236592eb-1a2f-4068-ad7d-62784513152d" />







