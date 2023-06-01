import {
  useState,
  FormEvent,
  ChangeEvent,
  FunctionComponent,
  Dispatch,
} from "react";
import { Weather } from "../../App";
import style from "./index.module.css";

type Props = {
  weather: (city: string) => Promise<void>;
  citiesWeather: Weather[];
  showLoading: boolean;
  setShowLoading: Dispatch<React.SetStateAction<boolean>>;
};

export const SearchBar: FunctionComponent<Props> = ({
  weather,
  citiesWeather,
  showLoading,
  setShowLoading,
}) => {
  const [input, setInput] = useState("");

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    if (input === "") {
      alert("Ingrese el nombre de una ciudad");
      ev.preventDefault();
      return;
    }

    setShowLoading(true);

    const cityFound = citiesWeather.find(
      (c) => c.name.toLowerCase() === input.toLowerCase()
    );

    if (cityFound) {
      alert("La ciudad ya ha sido buscada!");
      setShowLoading(false);
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
    <>
      <form className={style.searchBarBackground} onSubmit={handleSubmit}>
        <button className={style.button}>
          {!showLoading && (
            <img
              className={style.search}
              src="../../../search.svg"
              alt=""
              width="25"
              height="25"
            />
          )}
          {showLoading && (
            <img
              className={style.loading}
              src="../../../load.svg"
              alt=""
              width="25"
              height="25"
            />
          )}
        </button>

        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search city..."
        />
      </form>
    </>
  );
};
