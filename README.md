🎯 Quiz Application (MERN Stack)
This is a full-stack Quiz Application built using MongoDB, Express.js, React.js,Redux, and Node.js.
It allows users to enter their name, answer multiple-choice questions, and view their quiz results at the end.

✨ Live Demo
👉 Click Here to Try the App

📸 ![Screenshot (871)](https://github.com/user-attachments/assets/7dc148f0-15f5-4a42-b407-d065c2b84df7)

1. Home Page
User enters their name and sees quiz instructions.

📸 ![Screenshot (872)](https://github.com/user-attachments/assets/b77ac4d7-9d0b-465e-812a-fc86ae5d50d0)

2. Quiz Page
User answers 16 multiple-choice questions one by one.

📸 ![Screenshot (873)](https://github.com/user-attachments/assets/5dc1f1ec-0c32-45f2-a7ba-115c8c77600b)

3. Result Page
After submitting, user sees their quiz results, score, and stats.


🛠️ Tech Stack
Frontend: React.js, Tailwind CSS, Redux

Backend: Node.js, Express.js

Database: MongoDB

Deployment: Netlify (Frontend), Render/Heroku (Backend)

🚀 Features
Start the quiz by entering your name.

16 multiple-choice questions.

16 points awarded for each correct answer.

Ability to review and change answers before submitting.

Displays final results, including:

Total attempted questions

Number of correct and wrong answers

Score percentage

Retake the quiz or return to the home page.

📂 Folder Structure
bash
Copy
Edit
quiz-application/
├── client/       # React frontend
├── server/       # Express backend
├── README.md
└── package.json
🔥 Installation (Run Locally)
Follow these steps to set up the project locally:

1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/quiz-application.git
cd quiz-application
2. Setup Frontend (React)
bash
Copy
Edit
cd client
npm install
npm run dev
Runs the React app on http://localhost:5173.

3. Setup Backend (Node/Express)
bash
Copy
Edit
cd ../server
npm install
npm run start
Runs the server on http://localhost:5000.

4. Setup Environment Variables
Create a .env file inside /server folder:

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=5000
⚡ API Endpoints

Method	Endpoint	Description
GET	/api/questions	Fetch all quiz questions
POST	/api/results	Submit user's quiz result

📢 Notes:
Make sure you have Node.js and MongoDB installed on your system.

Frontend uses Vite for faster React development.

Backend is built with Express.js and connected to MongoDB Atlas (or local MongoDB).

Hosting:

Frontend: Netlify

Backend: Render (or Heroku)
