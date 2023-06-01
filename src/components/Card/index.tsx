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
  const [isVisible, setIsVisible] = useState(false);

  const handleDelete = (id: number | undefined) => {
    setCitiesWeather(citiesWeather.filter((city) => city.id !== id));
  };

  const [flag, setFlag] = useState("");
  const getFlag = async (city: Weather | undefined) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${city?.sys.country}`
      );
      console.log(response.data[0]);
      setFlag(response.data[0].flags.png);
    } catch (error) {}
  };

  useEffect(() => {
    getFlag(city);
  }, [city]);

  useEffect(() => {
    if (flag !== "") {
      setIsVisible(true);
    }
  }, [flag]);
  return (
    <>
      {flag !== "" && (
        <StyledCard>
          <div className={`card__container ${isVisible ? "visible" : ""}`}>
            <button
              type="button"
              className="card__button"
              onClick={(e) => {
                e.preventDefault();
                handleDelete(city?.id);
              }}
            >
              x
            </button>
            <div className="card__container-title">
              <a
                className="ubicacion"
                href={`https://www.google.com/maps/search/?api=1&query=${city?.name},${city?.sys.country}`}
                target="_blank"
              >
                <h3 className="card__city">{city?.name}</h3>
              </a>

              <div className="card__container-flag">
                <h3 className="card__country">{city?.sys.country} </h3>
                <img src={flag} alt="flagCity" width="50" height="30" />
              </div>
            </div>
            <div className="card__container-section">
              <div className="info">
                <p>
                  <img src="../../../temp.svg" alt="" width="25" height="25" />
                  <span>Temperatura:</span>
                  {Math.ceil(city?.main.temp!)} °C
                </p>
                <p>
                  <img
                    src="../../../humedad.svg"
                    alt=""
                    width="22"
                    height="22"
                  />
                  <span>Humedad: </span> {city?.main.humidity}%
                </p>
                <p>
                  <img src="../../../wind.svg" alt="" width="22" height="22" />
                  <span>Viento: </span>{" "}
                  {Math.ceil(city?.wind.speed! * 1.60934 * 2 + 2)}
                  km/h
                </p>
              </div>
              <img
                className="card__icon"
                src={`https://openweathermap.org/img/wn/${city?.weather[0].icon}@2x.png`}
                alt={city?.weather[0].description}
              />
            </div>
          </div>
        </StyledCard>
      )}
    </>
  );
};
export default Card;
