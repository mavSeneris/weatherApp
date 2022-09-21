import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css';
import weatherIcon from './images/sunny.png'

function App() {
  const [weather, setWeather] = useState('')

  console.log(weather)

  async function fetchData(e) {
    e.preventDefault()
    const loc = e.target.elements.loc.value
    const api = 'https://api.openweathermap.org/data/2.5/weather?q='
    const unit = "metric"
    const apiKey = "75ae8b66aa2602eec268fd3769ea8d62"
    const res = await axios.get(
      `${api}${loc}&cnt=10&appid=${apiKey}&units=${unit}`);
    setWeather({
      feelsLike: res.data.main.feels_like,
      temp: res.data.main.temp,
      icon: res.data.weather[0].icon,
      description: res.data.weather[0].description,
      city: res.data.name,
      country: res.data.sys.country
    })
    console.log(res.data)
  }

  return (
    <div className="App">
      <form onSubmit={fetchData} className="form">
        <input
          type="text"
          placeholder="city"
          name="loc"
        />
        <button>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clipRule="evenodd"></path><path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clipRule="evenodd"></path></svg>
        </button>
      </form>
      <div className='weather'>
        <h1 className='weather--name'>
          {/* {weather.city} */}
          Manila
        </h1>
        <h2 className='weather--description'>
          {/* {weather.description} */}
          Sunny
        </h2>
        <img
          src={weatherIcon}
          className='weather--icon'
        />

        <div className='weather--container'>
          <h1 className='weather--temp'>
            {/* {Math.floor(weather.temp)}° */}
            21°
          </h1>
          <div className='weather--side-info'>
            <div className='weather--info feels-like'>
              Feels like: {Math.floor(weather.feelsLike)}°C
            </div>
            <div className='weather--info humidity'>Humidity: 12%</div>
            <div className='weather--info wind'>Wind: 19.5Km/h</div>
            <div className='weather--info visibility'>Visibility: 10Km</div>

          </div>

        </div>



        {/* <small>{weather.country}</small> */}

      </div>
    </div>

  );
}

export default App;