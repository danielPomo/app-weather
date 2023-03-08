import axios from "axios";
import { useState, useEffect } from "react";
import icons from "../data/icons.json"

const Card = () => {
  const [location, setLocation] = useState({})
  const [isFarenheit, setIsFarenheit] = useState(false)

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

  return (
    <div className="weather">
      <div className="card">
        <p>
          <span className="card__temp t1"> {(isFarenheit)? `${parseInt(location.main?.temp * 9 / 5 - 459)} ` : `${parseInt(location.main?.temp) - 273} `} </span>
          <span className="card__temp--unit">
          {(isFarenheit)? "F" : "°C"}
          </span>
          </p>
        <span className="card__wind t3">Winds: {location.wind?.speed} m/s </span>
        <span className="card__cloud2t3">Cloudniness: {location.clouds?.all} %</span>
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
      className="btn btn-light">Convert to F°</button>
    </div>
  );
};

export default Card;
