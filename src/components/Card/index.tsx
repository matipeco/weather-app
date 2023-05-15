import { Weather } from "../../App";
import { Dispatch, FunctionComponent } from "react";
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
      <div className="card-container">
        <button className="card-button" onClick={() => handleDelete(city?.id)}>
          x
        </button>
        <h3>{city?.sys.country}</h3>
        <h3>{city?.name}</h3>
        <p>
          <span>Temp.Actual: </span>
          {city?.main.temp}
        </p>
        <p>
          {" "}
          <span>Clima: </span>
          {city?.weather[0].description}
        </p>
        <p>
          {" "}
          <span>Humedad: </span>% {city?.main.humidity}
        </p>
      </div>
    </StyledCard>
  );
};
export default Card;
