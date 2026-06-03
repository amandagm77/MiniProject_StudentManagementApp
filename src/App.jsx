import { useState } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import SearchBar from "./components/SearchBar";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Amanda",
      course: "Software Engineering",
    },
  ]);

    const [searchTerm, setSearchTerm] = useState("");

  function addStudent(student) {
    setStudents([...students, student]);
  }

  function addStudent(student) {
    setStudents([...students, student]);
  }

  function deleteStudent(id) {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(updatedStudents);
  }

  const filteredStudents = students.filter((student) =>
  student.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase()) ||

  student.course
    .toLowerCase()
    .includes(searchTerm.toLowerCase())
);

  return (
    <div className="app">
      <h1>Student Management App</h1>

      <StudentForm addStudent={addStudent} />

      <StudentList
        students={students}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}

export default App;