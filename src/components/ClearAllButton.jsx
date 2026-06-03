function ClearAllButton({ clearStudents }) {
  return (
    <button
      className="clear-btn"
      onClick={clearStudents}
    >
      Clear All Students
    </button>
  );
}

export default ClearAllButton;