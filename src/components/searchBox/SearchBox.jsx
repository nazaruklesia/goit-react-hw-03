const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={onChange} placeholder="Search by name..." />
    </div>
  );
};

export default SearchBox;
