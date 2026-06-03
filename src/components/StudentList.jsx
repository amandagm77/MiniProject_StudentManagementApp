import StudentCard from "./StudentCard";

function StudentList({ students, deleteStudent }) {
  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          id={student.id}
          name={student.name}
          course={student.course}
          onDelete={deleteStudent}
        />
      ))}
    </div>
  );
}

export default StudentList;