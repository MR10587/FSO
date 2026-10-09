const SearchBar = ({ handleSearchInput }) => {
  return (
    <div>
      filter shown with<input onChange={handleSearchInput}></input>
    </div>
  );
};

export default SearchBar;
