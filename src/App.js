import React, { useState, useEffect } from 'react'
import './App.css';
import weatherIcon from './images/sunny_weather_icon_150663.png'

function App() {
  return (
    <div className="App">
      <form>
        <input />
        <button>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"></path></svg>
        </button>
      </form>
      <div className='weather'>
        <h1 className='weather--temp'>23°C</h1>
        <div className='weather--feels-like'>Feels like: 25°C</div>
        <img src={weatherIcon} className='weather--icon' />
        <div className='weather--desciption'>Cloudy/Sunny</div>
        <h2 className='weather--name'>Binondo</h2>
        <small>Manila, Philippines</small>
      </div>
    </div>

  );
}

export default App;
