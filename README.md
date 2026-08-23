Event Feedback Management System

A full-stack web application for managing event feedback. Users can
explore upcoming events, submit feedback with ratings, and view
submitted feedback.

🚀 Features

Responsive homepage

Events listing

Event feedback submission form

Rating system

Backend REST API

MongoDB database integration

Store feedback in MongoDB

Retrieve and display submitted feedback

Success and error messages

Responsive UI using Tailwind CSS

React Router based navigation

🛠️ Tech Stack

Frontend

React.js

Tailwind CSS

React Router

Vite

Backend

Node.js

Express.js

Mongoose

Database

MongoDB

📁 Project Structure

event-feedback-management-system/
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md

⚙️ Installation & Setup

1. Clone the repository

git clone <YOUR_GITHUB_REPOSITORY_URL>
cd event-feedback-management-system

2. Setup Backend

cd server
npm install

Create a .env file inside the server folder:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Start the backend:

npm run dev

The server will run on:

http://localhost:5000

3. Setup Frontend

Open another terminal:

cd client
npm install
npm run dev

The frontend will run on the Vite development URL shown in the terminal,
usually:

http://localhost:5173

🔌 API Endpoints

Get API welcome message

GET /

Submit Feedback

POST /api/feedback

Example request body:

{
  "name": "Varun",
  "email": "varun@example.com",
  "event": "Tech Conference 2026",
  "rating": 5,
  "message": "Great event and very informative."
}

Get All Feedback

GET /api/feedback

🔄 Application Flow

User
  ↓
React Frontend
  ↓
Feedback Form
  ↓
POST /api/feedback
  ↓
Express.js Backend
  ↓
MongoDB
  ↓
GET /api/feedback
  ↓
Feedback List
  ↓
User

📱 Responsive Design

The application is designed to work across:

Desktop

Tablet

Mobile devices

Tailwind CSS responsive utility classes are used for the UI.

🧪 Testing

The backend APIs were tested using Postman.

The complete application flow was tested:

Open the application

Navigate to Events

Open Feedback

Submit feedback

Verify successful submission

Verify data is stored in MongoDB

Open View Feedback

Verify submitted feedback is displayed

🔐 Environment Variables

Do not commit sensitive environment variables to GitHub.

The .env file should be added to .gitignore.

Example:

.env
node_modules/
dist/

📌 Project Purpose

This project demonstrates full-stack development skills including:

Frontend development with React

Responsive UI development with Tailwind CSS

REST API development with Express.js

Database operations with MongoDB

Frontend and backend integration

Form handling and validation

CRUD-oriented data flow

👨‍💻 Author

Varun Ghagre

B.Tech Computer Science & Engineering
