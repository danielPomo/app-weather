const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Weather App</h1>
            <div className="search">
            <label htmlFor="search"><i className="bx bx-search"></i> Buscar</label>
            <input type="text" id="search" />
            </div>
            <button>Modo oscuro</button>
        </div>
    );
};

export default Navbar;