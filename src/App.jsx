import { useState } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Amanda",
      course: "Software Engineering",
    },
  ]);

  function addStudent(student) {
    setStudents([...students, student]);
  }

  function deleteStudent(id) {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(updatedStudents);
  }

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