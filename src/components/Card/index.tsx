import { Weather } from '../../App'
import { FunctionComponent } from 'react'

type Props = {
    cityWeather: Weather | undefined
}

export const Card: FunctionComponent<Props> = ({ cityWeather }) => {
    return (
        <article>
            <h3>{cityWeather?.sys.country}</h3>
            <h3>{cityWeather?.name}</h3>
            <p>Temp.Actual: {cityWeather?.main.temp}</p>
            <p>Clima: {cityWeather?.weather[0].description}</p>
            <p>Humedad: % {cityWeather?.main.humidity}</p>

        </article>
    )
}