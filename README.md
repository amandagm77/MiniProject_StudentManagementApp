# 🎓 Student Management App (React + Vite)

## 📌 Description

A frontend Student Management application built with React and Vite that allows users to add, delete, search, and manage student records. Each student contains a name and course, displayed in a responsive card-based UI. This project demonstrates core React concepts such as functional components, props, state management, hooks, event handling, and array methods. Student data is persisted using the browser’s local storage, allowing information to remain after page refresh.

---

## ⚡ Quick Start

```
npm install
npm run dev
```

Then open:
http://localhost:5173

---

## 🚀 Features

- Add new students with name and course
- Display students in card format
- Delete individual students
- Clear all students at once
- Search students by name or course (real-time filtering)
- Student counter display
- Persistent storage using localStorage
- Responsive layout with styled components

---

## ✅ Status

✔ React UI fully functional  
✔ Student CRUD operations implemented  
✔ Search functionality complete  
✔ Local storage persistence working  
✔ Component-based architecture implemented  

---

## 🧩 User Stories

### ✅ Implemented
- As a user, I want to add a student so I can track enrollments.
- As a user, I want to delete a student so I can remove outdated records.
- As a user, I want to view all students so I can see current enrollments.
- As a user, I want to search students so I can quickly find a specific student.
- As a user, I want to clear all students so I can reset the system.
- As a user, I want student data to persist so I don’t lose it on refresh.
- As a user, I want to see how many students are currently added.

### 🔮 Planned
- Edit student details (name/course)
- Sorting students alphabetically
- Filter by course dropdown
- Confirmation modal for delete actions
- Dark mode toggle
- Export student list (CSV/PDF)

---

## 🛠️ Technologies Used

### Frontend

- React (Functional Components)
- Vite
- JavaScript (ES6+)
- CSS3

### React Concepts Used

- useState
- useEffect
- Props
- Event handling
- Conditional rendering
- Array methods (map, filter)
- Component composition

### Browser APIs

- localStorage

---

## ⚙️ Installation

1. Clone the repository:
https://github.com/amandagm77/MiniProject_StudentManagementApp

2. Navigate into the project directory:
cd MiniProject_StudentManagementApp

3. Install dependencies:

npm install

---

## ▶️ Running the Application

Start the development server:

npm run dev

Then open:
http://localhost:5173

---

## 📂 Project Structure

```
src/
│── components/
│ ├── StudentForm.jsx
│ ├── StudentList.jsx
│ ├── StudentCard.jsx
│ ├── SearchBar.jsx
│ ├── StudentCount.jsx
│ ├── ClearAllButton.jsx
│
│── App.jsx
│── App.css
│── main.jsx
```

---

## 🧠 What I Learned

- How to build a React application using Vite
- Managing state with useState and useEffect
- Passing data between components using props
- Implementing CRUD functionality in React
- Using localStorage for persistent data storage
- Filtering and searching data in real time
- Structuring reusable and modular components
- Lifting state up to manage shared data across components

---

## 🔮 Future Improvements

- Add edit student functionality
- Improve UI styling and responsiveness
- Add sorting and filtering options
- Add confirmation dialogs for delete actions
- Add animations for smoother UX
- Integrate backend API for cloud storage

---

## 👤 Author

Amanda McIntire

---

## 📄 License

This project is intended for educational and portfolio purposes as part of a software engineering learning path.