# 🎨 CraftFolio – Instant Portfolio Builder  

**CraftFolio** is an **Instant Portfolio Builder App** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.  
It allows users to easily create, share, and download their personalized portfolios with just a few clicks.  

---

## ✨ Features  

- 🔐 User authentication (Login/Signup) using jwt/bcrypt also firebase auth
- 📝 Fill in **personal details** and **project details**  
- 📸 Upload profile picture with **Multer + Cloudinary**  
- 📄 **Auto-generated portfolio** (downloadable in one click)  
- 📲 Share portfolio via **QR code** or **share link**  
- 💻 Fully responsive design for desktop, tablet, and mobile  

---

## 🛠 Tech Stack  

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Image Storage:** Cloudinary (via Multer)  
- **Authentication:** JWT & bcrypt  
- **Other:** QR Code generation, Responsive UI  

---

## 📂 Folder Structure  

```
craftfolio/
│── frontend/         # React frontend
│── backend/          # Express + Node.js backend
│── .env              # Environment variables
│── package.json
│── README.md
```

---

## ⚙️ Installation & Setup  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/craftfolio.git
cd craftfolio
```

### 2️⃣ Install Dependencies  

#### Backend  
```bash
cd backend
npm install
```

#### Frontend  
```bash
cd ../frontend
npm install
```

### 3️⃣ Setup Environment Variables  

Create a `.env` file inside `backend/` with the following:  

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4️⃣ Run the Application  

#### Backend  
```bash
cd backend
npm start
```

#### Frontend  
```bash
cd frontend
npm run dev
```

---

## 🎥 Running a Demo on Your Laptop  

1. Clone the repo:  
   ```bash
   git clone https://github.com/your-username/craftfolio.git
   cd craftfolio
   ```
2. Install dependencies for both **frontend** & **backend**  
3. Setup `.env` in **backend/** with MongoDB + Cloudinary credentials  
4. Start backend:  
   ```bash
   cd backend
   npm start
   ```
5. Start frontend:  
   ```bash
   cd frontend
   npm run dev
   ```
6. Open browser at:  
   ```
   http://localhost:5173/
   ```
7. Login/Register → Add details → Generate & download portfolio 🎉  


---

## 📸 Screenshots (Optional)   

---  
