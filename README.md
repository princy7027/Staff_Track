# 📊 Staff Track – HR Management System

![Backend](https://img.shields.io/badge/Backend-Node.js-43853D?style=flat)
![Framework](https://img.shields.io/badge/Framework-Express-000000?style=flat)
![Database](https://img.shields.io/badge/Database-MongoDB-47A248?style=flat)
![Auth](https://img.shields.io/badge/Auth-JWT-orange?style=flat)
![Frontend](https://img.shields.io/badge/Frontend-React%20(TypeScript)-61DAFB?style=flat)
![Mobile](https://img.shields.io/badge/Mobile-Flutter-02569B?style=flat)

*Staff Track* is a comprehensive HR Management System built to streamline employee management, time tracking, attendance, and internal organizational workflows. The system is divided into three major components:

- 🔧 *Backend API Server* – Node.js & Express  
- 🖥 *Web-based Admin Interface* – React + TypeScript  
- 📱 *Mobile Application* – Flutter  

---

## 📁 Project Structure

```
Staff-Track/
├── staff_Track_Backend      # Node.js/Express REST API
├── staff_Track_Frontend     # React + TypeScript web interface
└── HRMS-app          # Flutter mobile application for employees
```

---

## 🚀 Features

- 👥 *User Management* – Create, update, and manage employee profiles  
- ⏱ *Time Tracking* – Monitor employee work hours and tasks  
- 🗓 *Leave Management* – Submit, track, and approve leave requests  
- 📊 *Project Management* – Assign and monitor project progress  
- 🏖 *Holiday Management* – Configure holidays and time-off policies  
- 🕒 *Attendance Tracking* – Record employee check-ins and check-outs  
- 👨‍👩‍👧 *Team Management* – Organize employees into teams and departments  
- 📌 *Notice Board* – Share company-wide announcements  
- 💰 *Salary Management* – Manage compensation and payroll  
- 📈 *Reporting* – Generate HR insights and performance reports  

---

## 🧰 Tech Stack

### 🖥 Backend – staff_Track_Backend
- *Runtime*: Node.js + Express  
- *Database*: MongoDB with Mongoose ODM  
- *Authentication*: JWT (JSON Web Tokens)  
- *File Storage*: Cloudinary  
- *Email Services*: Nodemailer  

### 🌐 Frontend – staff_Track_Frontend
- *Framework*: React with TypeScript  
- *Build Tool*: Vite  
- *UI Libraries*: Tailwind CSS, Material Tailwind, Radix UI  
- *State Management*: Redux Toolkit  
- *Form Handling*: Formik, React Hook Form  
- *API Handling*: Axios  

### 📱 Mobile App – HRMS-app
- *Framework*: Flutter  
- *State Management*: GetX  
- *Local Storage*: Get Storage, Shared Preferences  
- *HTTP Client*: Dio  
- *UI Kit*: Material Design Components  

---

## 🛠 Getting Started

### ✅ Backend Setup
```bash
cd staff_Track_Backend
npm install
npm run dev
```
> Server runs on the port defined in .env

### ✅ Frontend Setup
```bash
cd staff_Track_Frontend
npm install
npm run dev
```
> Runs on http://localhost:5173 by default

### ✅ Mobile App Setup
```bash
cd HRMS-app
flutter pub get
flutter run
```
> Launches on connected device or emulator

---

## 🏗 Architecture

- *Backend API*: Provides data and business logic for all platforms  
- *Web Admin Panel*: Full-featured HR management interface for administrators  
- *Mobile App*: Self-service interface for employees (attendance, leaves, etc.)  

---

## 👥 User Roles

| Role         | Platform(s)     | Permissions                                      |
|--------------|------------------|--------------------------------------------------|
| *Admin*    | Web              | Full access to all system features               |
| *Employee* | Web & Mobile     | Access to personal details, attendance, leaves   |

---

## 📄 License

This project is licensed under the *MIT License*.  
See [LICENSE](LICENSE) for details.

---

## 📬 Contact

For queries, suggestions, or support, please reach out to the project maintainers.

---

© 2023 *Staff Track* – All rights reserved.
