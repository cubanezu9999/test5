import { useState, useRef } from "react";

function App() {
  const [weather, setWeather] = useState([]);
  const cityInputRef = useRef();

  async function handleClick() {
    const city = cityInputRef.current.value;

    const data = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=7bc1973f43994deb876132724233103&q=${city}`
    );
    const data1 = await data.json();
    console.log(data1);
    console.log(city);
    setWeather([data1]);
  }
  return (
    <div>
      <div className="control">
        <input type="text" placeholder="Enter City" ref={cityInputRef} />
        <button onClick={handleClick}> Get Weather </button>
      </div>
      <div className="container">
        {weather.map((weath) => (
          <ul key={weath.name} className="weather">
            <div>
              <li className="name">{weath.location.name}</li>
              <div className="location">
                <li>{weath.location.region}</li>
                <li>{weath.location.country}</li>
              </div>
              <li className="lightrain">{weath.current.condition.text}</li>
            </div>
            <div className="data">
              <li>{weath.current.temp_c}°C</li>
              <li className="icon">
                <img src={weath.current.condition.icon} alt="symbol"></img>
              </li>
              <li className="feel">Feels Like:{weath.current.feelslike_c}°C</li>
            </div>
            <div>Last Update:{weath.current.last_updated}</div>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
