import React, { useState, useEffect } from "react";
import axios from "axios";

const Contruies = ({ filteredContruies }) => {
  const [selectedCountrie, setSelectedCountrie] = useState(null);
  const [weather, setWeather] = useState(null);

  const apiKey = import.meta.env.VITE_SOME_KEY;


  useEffect(() => {
    if (selectedCountrie) {
      const capital = selectedCountrie.capital;
      const encodedCapital = encodeURIComponent(capital);
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${encodedCapital}`;

      axios.get(weatherUrl)
        .then(response => {
          setWeather(response.data);
        })
        .catch(error => {
          console.log("Error fetching weather data: ", error);
        
        });
    }
  }, [selectedCountrie, apiKey]);

  if (filteredContruies.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (selectedCountrie) {
    return (
      <div>
        <h2>{selectedCountrie.name.common}</h2>
        <p>capital {selectedCountrie.capital}</p>
        <p>area {selectedCountrie.area}</p>
        <h3>languages:</h3>
        <ul>
          {Object.values(selectedCountrie.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={selectedCountrie.flags.png} alt={`Flag of ${selectedCountrie.name.common}`} />
        {weather && (
          <div>
            <h3>Weather in {selectedCountrie.capital}</h3>
            <p>temperature {weather.main.temp} °C</p>
            <p>wind {weather.wind.speed} m/s</p>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            
          </div>
        )}
        <button onClick={() => setSelectedCountrie(null)}>Back</button>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {filteredContruies.map((countrie) => (
          <div key={countrie.cca3}>
            <li>{countrie.name.common} <button onClick={() => setSelectedCountrie(countrie)}>show</button></li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Contruies;
