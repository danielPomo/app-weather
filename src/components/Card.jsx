const Card = () => {
    return (
        <div className="card">
            <span>19°C</span>
            <span>Vientos</span>
            <span>Nubes</span>
            <span>Presión</span>
            <div className="card__cityInfo">
                <span>Queterato, Mexico</span>
                <span>Parcialmente<br/>nublado</span>
            </div>
        </div>
    );
};

export default Card;