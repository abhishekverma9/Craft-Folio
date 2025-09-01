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
<img width="1883" height="1004" alt="Screenshot 2025-08-18 194617" src="https://github.com/user-attachments/assets/0f45c1f5-dba3-485b-b95c-6630c783f732" />
<img width="1848" height="947" alt="Screenshot 2025-08-18 194648" src="https://github.com/user-attachments/assets/0473464e-4544-465b-a4a2-908072f8d31d" />
<img width="1861" height="981" alt="Screenshot 2025-08-18 194714" src="https://github.com/user-attachments/assets/456da6ae-0425-4bcd-9ae1-2f8008d24bf6" />
<img width="1720" height="891" alt="Screenshot 2025-08-18 194835" src="https://github.com/user-attachments/assets/892d3c31-1738-4dcf-a18a-a2e34fe7c591" />


---  
