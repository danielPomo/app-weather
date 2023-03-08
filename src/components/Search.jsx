const Search = () => {
    return (
        <div className="search">
            <label className="search__label" htmlFor="search">
            <i className='bx bx-search'></i> Buscar
            </label>
            <input className="search__input" type="text"/>
        </div>
    );
};

export default Search;