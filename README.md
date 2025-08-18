# 🚀 CraftFolio - A <img width="1720" height="891" alt="Screenshot 2025-08-18 194835" src="https://github.com/user-attachments/assets/efeb21fe-f794-43de-91de-6ce2b7fe76ac" />
<img width="1883" height="1004" alt="Screenshot 2025-08-18 194617" src="https://github.com/user-attachments/assets/288bc77e-7b1f-478b-857b-1abae5113199" />
<img width="1848" height="947" alt="Screenshot 2025-08-18 194648" src="https://github.com/user-attachments/assets/8b00b90b-7f89-468e-bca9-0a737e7c6400" />
<img width="1861" height="981" alt="Screenshot 2025-08-18 194714" src="https://github.com/user-attachments/assets/9b1c215b-460b-4366-bd47-7e94803a6639" />
Instant Portfolio Builder

An **Instant Portfolio Builder App** built with the **MERN stack (MongoDB, Express.js, React.js, Node.js)** that allows users to easily create and download their personalized portfolio.  

Users can:
- Sign up & log in securely  
- Fill in **personal details** and **project details**  
- Upload a profile picture (stored in **Cloudinary** using Multer)  
- Generate and **download their portfolio** in seconds  
- Get a **QR code** and **shareable link** to their portfolio  
- Enjoy a **fully responsive design** on all devices  

---

## ✨ Features

- 🔐 User authentication (Login/Signup)  
- 📸 Profile image upload with Cloudinary + Multer  
- 📝 Add personal & project details dynamically  
- 📄 Downloadable portfolio in one click  
- 📲 Portfolio sharing via **QR code & share button**  
- 💻 Fully responsive design (Mobile, Tablet, Desktop)  

---

## 🛠 Tech Stack

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **File Uploads:** Multer + Cloudinary  
- **Authentication:** JWT / bcrypt (if used)  
- **Other:** QR code generation, Responsive design  

---

## 📂 Folder Structure

```
instant-portfolio-builder/
│── client/           # React frontend
│── server/           # Express + Node.js backend
│── .env              # Environment variables
│── package.json
│── README.md
```

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/instant-portfolio-builder.git
cd instant-portfolio-builder
```

### 2️⃣ Install Dependencies
#### Backend
```bash
cd server
npm install
```
#### Frontend
```bash
cd ../client
npm install
```

### 3️⃣ Setup Environment Variables  
Create a `.env` file inside `server/` with the following:
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
cd server
npm start
```
#### Frontend
```bash
cd client
npm run dev
```

---

## 📥 Download & Run from GitHub to VS Code

1. Open **VS Code**  
2. Open terminal and run:
   ```bash
   git clone https://github.com/your-username/instant-portfolio-builder.git
   ```
3. Open the folder in VS Code  
4. Run backend and frontend setup (as explained above)  
5. Start development servers  
6. Visit `http://localhost:5173/` (or the port shown in terminal)  

---

## 📸 Screenshots (Optional)
(Add some screenshots of your app UI here for better presentation)

---

## 📌 Future Enhancements
- Add **custom themes & templates** for portfolio  
- Export portfolio in **PDF format**  
- Integrate **social media links auto-fetch**  
- Deploy on **Vercel/Netlify + Render/Heroku**  

---

## 🤝 Contributing
Contributions are welcome! Feel free to fork this repo and create a pull request.  

---

## 📜 License
This project is licensed under the **MIT License**.  
