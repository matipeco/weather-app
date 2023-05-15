import { useState, FormEvent, ChangeEvent, FunctionComponent } from "react";
import { Weather } from "../../App";
import style from "./index.module.css";

type Props = {
  weather: (city: string) => Promise<void>;
  citiesWeather: Weather[];
};

export const SearchBar: FunctionComponent<Props> = ({
  weather,
  citiesWeather,
}) => {
  const [input, setInput] = useState("");

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    const cityFound = citiesWeather.find(
      (c) => c.name.toLowerCase() === input.toLowerCase()
    );

    if (cityFound) {
      alert("La ciudad ya ha sido buscada!");
      ev.preventDefault();
      setInput("");
    } else {
      ev.preventDefault();
      weather(input);
      setInput("");
    }
  };

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setInput(ev.target.value.toLowerCase());
  };

  return (
    <form className={style.searchBarBackground} onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search city..."
      />
      {/* <button className={style.button}></button> */}
    </form>
  );
};
