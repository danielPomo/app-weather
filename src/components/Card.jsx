import axios from "axios";
import { useState, useEffect } from "react";
import icons from "../data/icons.json"

const Card = ({isDark}) => {
  const [location, setLocation] = useState({})
  const [isFarenheit, setIsFarenheit] = useState(false)
  const [city, setCity] = useState("sucre")
  const [update, setUpdate] = useState("sucre")

  useEffect(() => {
    let lat;
    let lon;
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ae8ff8a06ebcf8afb61d2d3db3e39a9d`;
      console.log(url);

      axios
        .get(url)
        .then((resp) => {
          console.log(resp.data);
          setLocation(resp.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);

  useEffect( () => {
    const urlByCityName = `https://api.openweathermap.org/data/2.5/weather?q=${update}&appid=ae8ff8a06ebcf8afb61d2d3db3e39a9d`
    axios
    .get(urlByCityName)
    .then((resp) => {
      setLocation(resp.data);
    })
    .catch((error) => {
      console.log(error);
    });

  }, [update])

  return (
    <div className="weather">
      <div className="search">
            <label className="search__label" htmlFor="search">
            <i className='bx bx-search'></i> Buscar
            </label>
            <input
            onChange={(e) => {
              setCity(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setUpdate(city);
              }
            }}
            className={(isDark)?"search__input search__input--dark":"search__input search__input--light"} type="text"/>
        </div>
      <div className={(isDark) ? "card dark-card" : "card light-card"}>
        <p>
          <span className="card__temp t1"> {(isFarenheit)? `${parseInt(location.main?.temp * 9 / 5 - 459)} ` : `${parseInt(location.main?.temp) - 273} `} </span>
          <span className="card__temp--unit">
          {(isFarenheit)? "F" : "°C"}
          </span>
          </p>
        <span className="card__wind t3">Winds: {location.wind?.speed} m/s </span>
        <span className="card__cloud2t3">Cloudiness: {location.clouds?.all} %</span>
        <span className="card__pressu2e t3">Pressure: {location.main?.pressure} hPa</span>
        <div className="card__cityInfo t2">
          <span>
            {location.name}, {location.sys?.country}
          </span>
          <span>{location.weather?.[0].main}</span>
        </div>
        <img className="card__icon" src={icons[location.weather?.[0].icon]} alt="icono de clima" />
      </div>
      <button
      onClick={ () => {
        setIsFarenheit(!isFarenheit)
      }} 
      className={ (isDark) ? "btn btn-dark" :"btn btn-light"}>Convert to F°</button>
    </div>
  );
};

export default Card;
