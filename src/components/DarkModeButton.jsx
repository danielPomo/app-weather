const DarkModeButton = () => {
    return (
        <div className="darkMode">
            <button className="darkMode__btn">
                <input className="darkMode__checkbox" type="checkbox"/>
                <div className="darkMode__switch"></div>
            </button>
        </div>
    );
};

export default DarkModeButton;