function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar">
      <label>Search Students</label>

      <input
        type="text"
        placeholder="Search by Name or Course..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;