import { SearchBar } from "./components/SearchBar";
import axios from "axios";
import { useState } from "react";
import style from "./index.module.css";
import { Cards } from "./components/Cards";

export type Weather = {
  id: number;
  main: {
    temp: number;
    humidity: number;
  };
  name: string;
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
  cod: number;
};

function App() {
  const [citiesWeather, setCitiesWeather] = useState<Weather[]>([]);
  const [showLoading, setShowLoading] = useState(false);

  const weather = (city: string) => {
    return axios
      .get<Weather>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric&lang=es`
      )
      .then((res) => {
        setCitiesWeather([...citiesWeather, res.data]);
        setShowLoading(false);
      })
      .catch((error) => {
        setShowLoading(false);
        alert("Ciudad no encontrada!");
      });
  };

  // console.log(citiesWeather);
  return (
    <div className={style.background}>
      <div className={style.container__svg}>
        <a href="https://github.com/matipeco/weather-app">
        <img src="git.jpg" alt="repositorio github" width="54" height="54"/>
        </a>
        <a href="https://www.linkedin.com/in/matiaspecorale/">
        <img src="lk.jpg" alt="perfil de linkedin" width="50" height="50"/>

        </a>
      </div>
      {citiesWeather.length === 0 && (
        <div className={style.text}>
          <h1>Welcome to Weather Finder!</h1>
          <p>Discover the weather anywhere in the world.</p>
        </div>
      )}
      <SearchBar
        weather={weather}
        citiesWeather={citiesWeather}
        showLoading={showLoading}
        setShowLoading={setShowLoading}
      />

      {citiesWeather.length > 0 && (
        <Cards
          citiesWeather={citiesWeather}
          setCitiesWeather={setCitiesWeather}
        />
      )}
    </div>
  );
}

export default App;
