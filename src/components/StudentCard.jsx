function StudentCard({ name, course, onDelete, id }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p>{course}</p>

      <button onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default StudentCard;