const SearchFilter = ({ filter, handler }) => (
    <div>
        <label htmlFor="filter">filter shown with: </label>
        <input id="filter" value={filter} onChange={handler} />
    </div>
);

export default SearchFilter;
