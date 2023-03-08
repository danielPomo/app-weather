const DarkModeButton = ({mode}) => {
    return (
        <div className="darkMode">
            <button
            onClick={mode}
            className="darkMode__btn">
                <input className="darkMode__checkbox" type="checkbox"/>
                <div className="darkMode__switch"></div>
            </button>
        </div>
    );
};

export default DarkModeButton;