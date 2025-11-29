# Chatgram 💬

Real-time chatting web application built with the MERN stack and Socket.IO.  
Chatgram lets users exchange messages instantly through a modern, responsive web UI backed by a Node.js/Express server and MongoDB.

---

## ✨ Features

- **Real-time messaging**
  - Bidirectional communication using WebSockets (Socket.IO).
  - Messages appear instantly without page refresh.
- **Persistent storage**
  - Messages and user data are stored in MongoDB so chats don’t disappear when the server restarts.
- **Separate frontend & backend**
  - React-based UI in `/src`
  - Node.js/Express API + Socket.IO server in `/backend`
- **Developer-friendly setup**
  - Single command to run both frontend and backend using `concurrently`.
  - Hot reload powered by `nodemon` for the backend and CRA dev server for the frontend.
---

## 🧱 Tech Stack

**Frontend**
- React (Create React App)
- HTML / CSS / JavaScript

**Backend**
- Node.js
- Express.js
- Socket.IO

**Database**
- MongoDB (local or cloud, e.g. MongoDB Atlas)

**Tooling**
- nodemon (backend auto-reload)
- concurrently (run frontend + backend together)
- npm / Node.js

---

## 📸 Screenshots

### SignUp Page
<img width="1902" height="911" alt="Screenshot 2025-11-29 101555" src="https://github.com/user-attachments/assets/effb3848-9138-4dc6-a67a-89afaf29c55d" />


### Chat Room
<img width="1916" height="846" alt="Screenshot 2025-11-29 101605" src="https://github.com/user-attachments/assets/f8075744-7316-4358-a671-6d7ae39f651a" />


### Add friends 
<img width="1919" height="849" alt="Screenshot 2025-11-29 101620" src="https://github.com/user-attachments/assets/08c50c4c-d931-4f1f-a69d-f897db7a91ab" />

### Friend Request Management
<img width="1919" height="852" alt="Screenshot 2025-11-29 101644" src="https://github.com/user-attachments/assets/af7783bf-03cb-4040-b9fc-27d0187ce88d" />



## 📁 Project Structure

```bash
Chatgram/
├── backend/
│   ├── index.js              # Entry point for server + socket.io
│   ├── database.js           # MongoDB connection config
│   ├── models/               # Mongoose schemas (User, Message, etc.)
│   ├── routes/               # API routes (auth, chat endpoints, etc.)
│   ├── middleware/           # Helper functions
│   ├── package.json
│   └── ...other server files
│
├── src/
│   ├── components/           # UI components (ChatBox, MessageList, InputBar...)
│   ├── context/              # Global contexts (Chat, Socket)
│   ├── App.js
│   ├── index.js
│   └── styles/               # CSS / styling files
│   └── assets/               # static files
│
├── public/                   # Static assets (logo, favicon, icons)
├── .env                      # Environment variables (not committed)
├── .gitignore
├── package.json              # Root scripts & dependencies
└── README.md
```

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have the following installed:

- **Node.js** *(LTS recommended)*
- **npm** *(comes with Node)*
- **MongoDB** – Local instance or MongoDB Atlas connection URL

### 2. Clone the Repository

```bash
git clone https://github.com/raj-mistry-01/Chatgram.git
cd Chatgram
```
### 3. Install Dependencies
From the root folder:

```bash
npm install
```
If you have a separate backend package.json, also run:
```bash
cd backend
npm install
cd ..
```
### 4. Configure Environment Variables
Create a .env file (in root or /backend based on your project setup):

```bash
env
# MongoDB connection string
MONGO_URI=mongodb://localhost:27017/chatgram

# Server port
PORT=5000

# (Optional) CORS and other client config
CLIENT_URL=http://localhost:3000
Ensure this matches how you access environment variables inside backend/index.js.
```

### 5. Run the Project
Sample script setup:
```bash
"scripts": {
  "start": "react-scripts start",
  "server": "nodemon backend/index.js",
  "both": "concurrently \"nodemon backend/index.js\" \"npm start\""
}
```

Start both frontend + backend together:

```bash
npm run both
```
