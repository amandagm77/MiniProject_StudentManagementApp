import { useState } from "react";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !course) return;

    const newStudent = {
      id: Date.now(),
      name,
      course,
    };

    addStudent(newStudent);

    setName("");
    setCourse("");
  }

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <button type="submit">
        Add Student
      </button>
    </form>
  );
}

export default StudentForm;