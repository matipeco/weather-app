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

  let flag;

  const weather = (city: string) => {
    return axios
      .get<Weather>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric&lang=es`
      )
      .then((res) => {
        if (citiesWeather.length === 6) {
          return alert(
            "Límite de ciudad buscadas. Elimine al menos una ciudad."
          );
        }
        setCitiesWeather([...citiesWeather, res.data]);
      })
      .catch((error) => {
        alert("Ciudad no encontrada!");
      });
  };

  console.log(citiesWeather);
  return (
    <div className={style.background}>
      {citiesWeather.length === 0 && (
        <div className={style.text}>
          <h1>Welcome to Weather Finder!</h1>
          <p>Discover the weather anywhere in the world.</p>
        </div>
      )}
      <SearchBar weather={weather} citiesWeather={citiesWeather} />
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
