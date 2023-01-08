import { useEffect, useState } from 'react'
import Axios from 'axios'


const WeatherData = ({capital}) => {
    const api_key = process.env.REACT_APP_OPENWEATHER_API_KEY
    const [weatherInfo, setWeatherInfo] = useState([])
  
  
    useEffect( () => {
      Axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${api_key}`)
        .then(response => {
            setWeatherInfo(response.data)
        })
    }, [])
  
    if (weatherInfo.length != 0) {
      return (
        <div>
          <h2>Weather in {capital}</h2>
          <div>Temperature {weatherInfo.main.temp} Celcius</div>
          <img 
            src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} 
            alt='weather icon'
            />
          <div>Wind {weatherInfo.wind.speed} m/s</div>
        </div>
      )
    }
  }

  export default WeatherData