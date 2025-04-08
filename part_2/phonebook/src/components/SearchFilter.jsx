const SearchFilter = ({ filter, handler }) => {
    return (
        <div>
            <label htmlFor="filter">filter shown with: </label>
            <input id="filter" value={filter} onChange={handler} />
        </div>
    );
};

export default SearchFilter;
