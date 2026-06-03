import { useState, useEffect } from "react";
import "./App.css";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import SearchBar from "./components/SearchBar";
import StudentCount from "./components/StudentCount";
import ClearAllButton from "./components/ClearAllButton";

function App() {
  // Load students from localStorage on first render
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");
    return savedStudents
      ? JSON.parse(savedStudents)
      : [
          {
            id: 1,
            name: "Amanda",
            course: "Software Engineering",
          },
        ];
  });

  const [searchTerm, setSearchTerm] = useState("");

  // Save students to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  function addStudent(student) {
    setStudents([...students, student]);
  }

  function deleteStudent(id) {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    );
    setStudents(updatedStudents);
  }

  function clearStudents() {
    setStudents([]);
    localStorage.removeItem("students");
  }

  const filteredStudents = students.filter((student) =>
    student.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Student Management App</h1>

      <StudentCount total={students.length} />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <StudentForm addStudent={addStudent} />

      <ClearAllButton clearStudents={clearStudents} />

      <StudentList
        students={filteredStudents}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}

export default App;