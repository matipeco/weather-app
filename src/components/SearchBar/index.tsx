import { useState, FormEvent, ChangeEvent, FunctionComponent } from "react";

type Props = {
    weather: (city: string) => Promise<void>;
}

export const SearchBar: FunctionComponent<Props> = ({ weather }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        weather(input);
        setInput("");
    }

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setInput(ev.target.value.toLowerCase());
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={handleChange} placeholder='Search city...' />
            <button>Search</button>
        </form>
    )

}