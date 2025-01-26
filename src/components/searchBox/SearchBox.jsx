const SearchBox = ({ value, onChange }) => {
  return <input type="text" value={value} onChange={onChange} placeholder="Search by name..." />;
};

export default SearchBox;
