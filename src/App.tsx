import { SearchBar } from './components/SearchBar';
import axios from 'axios';
import { useState } from "react";
import { Card } from "./components/Card";
import style from './index.module.css';

export type Weather = {
  main: {
    temp: number
    humidity: number
  }
  name: string
  weather: [{
    description: string
  }]
  sys: {
    country: string
  }
  cod: number
}

function App() {
  //Me creo un estado local donde voy a guardar los datos de la ciudad buscada
  const [cityWeather, setCityWeather] = useState<Weather>()

  const [flag, setFlag] = useState<boolean>(false);

  //Fn que busca la ciudad en la API
  const weather = (city: string) => {
    return axios.get<Weather>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=es`)
      .then((res) => {
        //Seteo mi estado con los datos que me traje de la api, como uso TS me guarda los datos que le pido nomas.
        setCityWeather(res.data);
        setFlag(true);
      })
      .catch((error) => {
        alert("Ciudad no encontrada!")
      })
  }

  if (!flag)
    return (
      <div className={style.background}>
        < SearchBar weather={weather} />
      </div>
    )

  return (
    <div>
      {/* A mi search le paso la Fn weather para que la ejecute cuando el usuario aprete el boton*/}
      < SearchBar weather={weather} />
      {/*A mi Card le paso mi estado con la info cargada por props  */}
      <Card cityWeather={cityWeather} />
    </div>
  )
}

export default App;

