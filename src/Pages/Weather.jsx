import React from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import { useState,useEffect } from 'react'
const getWeatherEmoji = (weather, icon) => {
  const isNight = icon.includes("n");

  switch (weather) {
    case "Clear":
      return isNight ? "🌙" : "☀️";

    case "Clouds":
      return isNight ? "☁️🌙" : "🌥️";

    case "Rain":
      return "🌧️";

    case "Drizzle":
      return "🌦️";

    case "Thunderstorm":
      return "⛈️";

    case "Snow":
      return "❄️";

    case "Mist":
    case "Fog":
    case "Haze":
      return "🌫️";

    default:
      return isNight ? "🌙" : "🌥️";
  }
};
export default function Weather() {
    const [city,setCity]=useState("");
    const [error, setError] = useState("");
    const [search,searchCity]=useState("");
    const [data,setData]=useState(null)
    useEffect(()=>{
      if (!search || search.trim() === "") {
        setError("");
        setData(null);
        return;   // stop execution
    }
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=39349a41c4ec1a1c9cf5bbbac4781273&units=metric`)
        .then(response=>response.json()).then(data=>{
            if(data.cod!==200){
                setError("City not found");
                setData(null);
            }
            else{
                setData(data);
                setError("");

            }
        }
        ).catch(err => {
            console.log(err);
            setError("Something went wrong");
        });
    },[search])

  return (
    <div className="hh">
        <div className="hero text-center">

            <h1 className="mb-4 fw-bold text-white mt-3">
                🌥️ Weather
            </h1>
            <input className="form-control rounded-pill w-50 mx-auto shadow mb-4"
            type="text"
            placeholder="🔍 Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    searchCity(city);
                }
            }}
            />
        
            {error && <p className="text-danger">{error}</p>}
            {!data && 
            <div className="container text-center mt-5">
              <div className="row justify-content-center g-4">
                <div className="col-lg-4 col-md-8 col-sm-10">
                  <div className="welcome-card text-center p-4 shadow ">
                    <h4>🌍 Search Any City</h4>
                    <p>Get real-time weather updates worldwide.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-8 col-sm-10">
                  <div className="welcome-card text-center p-4 shadow">
                    <h4>🌤️ Weather Forecast</h4>
                    <p>Check the weather in any city around the world.</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-8 col-sm-10">
                  <div className="welcome-card text-center p-4 shadow">
                    <h4>⚡ Fast & Simple</h4>
                    <p>Just type a city name and press Enter.</p>
                  </div>
                </div>
              </div>
            </div>
            
            
            }
            {data && (

      <>
        <div className="container mt-3 absolute ">
          <div className="row justify-content-center g-4">

            <div className="col-lg-4 col-md-6">
              <div className="weather-card text-center p-4 shadow-lg">

                <h3>{data.name}</h3>

                <div className="weather-emoji">
                  {getWeatherEmoji(
                    data.weather[0].main,
                    data.weather[0].icon
                  )}
                </div>

                <h2 className="display-4 fw-bold">
                  {Math.round(data.main.temp)}°C
                </h2>

                <p className="text-capitalize">
                  {data.weather[0].description}
                </p>

              </div>
            </div>

          </div>
        </div>

        <div className="container mt-4 mb-4">
          <div className="row justify-content-center g-4">

            <div className="col-md-3">
              <div className="weather-card text-center p-4 shadow">
                <h6>🌡️ Feels Like</h6>
                <h4>{Math.round(data.main.feels_like)}°C</h4>
              </div>
            </div>

            <div className="col-md-3">
              <div className="weather-card text-center p-4 shadow">
                <h6>💧 Humidity</h6>
                <h4>{data.main.humidity}%</h4>
              </div>
            </div>

            <div className="col-md-3">
              <div className="weather-card text-center p-4 shadow">
                <h6>🧭 Pressure</h6>
                <h4>{data.main.pressure} hPa</h4>
              </div>
            </div>

            <div className="col-md-3">
              <div className="weather-card text-center p-4 shadow">
                <h6>🍃 Wind</h6>
                <h4>{(data.wind.speed * 3.6).toFixed(1)} km/h</h4>
              </div>
            </div>

          </div>
        </div>

      </>
    )}

  </div>
</div>

);
}