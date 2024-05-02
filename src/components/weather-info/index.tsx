import { Container, Title, InfoContainer, InfoName, InfoData, Error } from './styles';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

function WeatherInfo() {

    const { weather, erro } = useContext(UserContext);

    return(
        <Container>
        {erro ? 
            <Error>Essa cidade não existe</Error>
            : 
            <>
            <Title>{weather.name}</Title>
                <InfoContainer>
                    <InfoName>Temperatura Atual: </InfoName>
                    <InfoData>{weather.main.temp}°</InfoData>
                </InfoContainer>
                <InfoContainer>
                    <InfoName>Temperatura Max: </InfoName>
                    <InfoData>{weather.main.temp_max}°</InfoData>
                </InfoContainer>
                <InfoContainer>
                    <InfoName>Temperatura Min: </InfoName>
                    <InfoData>{weather.main.temp_min}°</InfoData>
                </InfoContainer>
                <InfoContainer>
                    <InfoName>Sensação Termica: </InfoName>
                    <InfoData>{weather.main.feels_like}°</InfoData>
                </InfoContainer>
                <InfoContainer>
                    <InfoName>Humidade: </InfoName>
                    <InfoData>{weather.main.humidity}%</InfoData>
                </InfoContainer>
                <InfoContainer>
                    <InfoName>Ventos: </InfoName>
                    <InfoData>{weather.wind.speed} m/s</InfoData>
                </InfoContainer>
            </>     
        }
        </Container>
    );
}

export default WeatherInfo;