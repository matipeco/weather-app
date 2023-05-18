import { Weather } from "../../App";
import { Dispatch, FunctionComponent, useEffect, useState } from "react";
import { StyledCard } from "./styles";

export type Props = {
  city: Weather | undefined;
  citiesWeather: Weather[];
  setCitiesWeather: Dispatch<React.SetStateAction<Weather[]>>;
};

const Card: FunctionComponent<Props> = ({
  city,
  citiesWeather,
  setCitiesWeather,
}) => {
  const handleDelete = (id: number | undefined) => {
    setCitiesWeather(citiesWeather.filter((city) => city.id !== id));
  };

  return (
    <StyledCard>
      <div className="card__container">
        <button className="card__button" onClick={() => handleDelete(city?.id)}>
          x
        </button>
        <h3 className="card__country">{city?.sys.country}</h3>
        <img
          src={`https://flagcdn.com/w320/${city.sys.country!}.png`}
          alt="flagCity"
        />
        <h3 className="card__city">{city?.name}</h3>
        <p className="card__temperature">
          <span></span>
          {city?.main.temp} °C
        </p>
        <p className="card__humidity">
          <span></span>% {city?.main.humidity}
        </p>
        <p>
          <span></span> {Math.ceil(city?.wind.speed! * 1.60934 * 2 + 2)}
          km/h
        </p>
        <p className="card__weather">{city?.weather[0].description}</p>

        <img
          className="card__icon"
          src={`https://openweathermap.org/img/wn/${city?.weather[0].icon}@2x.png`}
          alt=""
        />
      </div>
    </StyledCard>
  );
};
export default Card;
