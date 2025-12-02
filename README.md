# 📦 Honors Inventory System

A full-stack equipment inventory management system built for the USF Honors College IT Team. This application allows staff to track, manage, and transfer IT equipment across different locations within the Honors building.

## 🎯 Project Overview

This inventory system enables the Honors IT Team to:
- **TRACK** (monitors, laptops, printers, keyboards, mice)
- **MANAGE LOCATIONS** across 5 floors (Warehouses, Classrooms, Offices)
- **ADD NEW** to inventory
- **DELETE** broken equipment

Built as part of the Honors IT Team Coding Challenge.

---

## 🛠️ Technology Stack

### Frontend: React + Vite + TypeScript + CSS Modules

### Backend: Node.js + Express + TypeScript + better-sqlite3

### Database: SQLite

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/nnviet06/Honors-Inventory-System.git
cd Honors-Inventory-System
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

**Installed packages:**
- express, cors, dotenv
- better-sqlite3
- typescript, ts-node, nodemon
- @types/express, @types/cors, @types/node

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

**Installed packages:**
- react, react-dom
- vite
- typescript
- @vitejs/plugin-react

---

## 🏃 How to Run

You need **TWO separate terminal windows** running simultaneously.

### Terminal 1: Start Backend Server

```bash
cd backend
npm run dev
```

### Terminal 1: Start Backend Server

```bash
cd frontend
npm run dev
```

## 🗄️ Database Setup

The database is **automatically initialized** when you first run the backend!

## ✨ Features

### Completed Features
- ✅ **View Equipment** - Display all equipment in a table
- ✅ **Add Equipment** - Modal form to add new items
- ✅ **Edit Location** - Transfer equipment between locations
- ✅ **Delete Equipment** - Remove items from inventory
- ✅ **Loading States** - Visual feedback during API calls
- ✅ **Error Handling** - User-friendly error messages
- ✅ **Auto-refresh** - Table updates after add/edit/delete
- ✅ **USF Theme** - Green & Gold color scheme
- ✅ **Responsive Design** - Works on different screen sizes

### Future Work (UI Present, Logic Not Implemented)
- 🔄 **Search Button** - SearchBar component exists but search logic not implemented
- 🔄 **Filter Button** - Filter dropdown UI exists but filtering logic not implemented
- 🔄 **"By Location" View** - Navigation button exists but view not implemented

> **Note:** The SearchBar with Search/Filter buttons and "By Location" button are visible in the UI as placeholder components. These represent planned features for future development but do not currently have functional implementations.



All components feature:
- Rounded corners (8-20px border-radius)
- Box shadows for depth
- Smooth transitions (0.3s ease)
- Consistent spacing system


