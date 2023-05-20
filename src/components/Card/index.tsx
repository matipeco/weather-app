import { Weather } from "../../App";
import { Dispatch, FunctionComponent, useEffect, useState } from "react";
import { StyledCard } from "./styles";
import axios from "axios";

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

  const [flag, setFlag] = useState("");
  const getFlag = async (city: Weather | undefined) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${city?.sys.country}`
      );
      setFlag(response.data[0].flags.png);
    } catch (error) {}
  };

  useEffect(() => {
    getFlag(city);
  }, [city]);

  return (
    <>
      {flag !== "" && (
        <StyledCard>
          <div className="card__container">
            <button
              className="card__button"
              onClick={() => handleDelete(city?.id)}
            >
              x
            </button>
            <div className="card__container-title">
              <h3 className="card__city">{city?.name}</h3>
              <h3 className="card__country">{city?.sys.country} </h3>
              <img src={flag} alt="flagCity" width="50" height="30" />
            </div>
            <div className="card__container-section">
              <img
                className="card__icon"
                src={`https://openweathermap.org/img/wn/${city?.weather[0].icon}@2x.png`}
                alt={city?.weather[0].description}
              />
              <div className="info">
                <p>
                  <img src="../../../calor.png" alt="" width="30" height="30" />
                  <span>Temperatura:</span>
                  {city?.main.temp} °C
                </p>
                <p>
                  <img
                    src="../../../humedad.png"
                    alt=""
                    width="20"
                    height="20"
                  />
                  <span>Humedad: </span> {city?.main.humidity}%
                </p>
                <p>
                  <img
                    src="../../../viento.png"
                    alt=""
                    width="30"
                    height="30"
                  />
                  <span>Viento: </span>{" "}
                  {Math.ceil(city?.wind.speed! * 1.60934 * 2 + 2)}
                  km/h
                </p>
              </div>
            </div>
          </div>
        </StyledCard>
      )}
    </>
  );
};
export default Card;
