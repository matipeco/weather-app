import { Weather } from '../../App'
import { Dispatch, FunctionComponent } from 'react'
import { StyledCard } from './styles'


type Props = {
    cityWeather: Weather | undefined
    setFlag: Dispatch<React.SetStateAction<boolean>>
}

const Card: FunctionComponent<Props> = ({ cityWeather, setFlag }) => {
    return (
        <StyledCard>
            <div className='card-container'>
                <button className='card-button' onClick={() => setFlag(false)}>x</button>
                <h3>{cityWeather?.sys.country}</h3>
                <h3>{cityWeather?.name}</h3>
                <p><span>Temp.Actual: </span>{cityWeather?.main.temp}</p>
                <p> <span>Clima: </span>{cityWeather?.weather[0].description}</p>
                <p> <span>Humedad: </span>% {cityWeather?.main.humidity}</p>
            </div>
        </StyledCard>
    )
}
export default Card
