import { Dispatch, FunctionComponent } from "react";
import { Weather } from "../../App";
import Card from "../Card";
import { StyledCards } from "./style";

type Props = {
  citiesWeather: Weather[] | undefined;
  setCitiesWeather: Dispatch<React.SetStateAction<Weather[]>>;
};

export const Cards: FunctionComponent<Props> = ({
  citiesWeather,
  setCitiesWeather,
}) => {
  return (
    <StyledCards >
      {citiesWeather?.map((city) => (
        <Card
          key={city.id}
          city={city}
          citiesWeather={citiesWeather}
          setCitiesWeather={setCitiesWeather}
        />
      ))}
    </StyledCards>
  );
};
