import { useContext, useEffect } from 'react';
import { Container, Title, SearchContainer, SearchBox, SearchButton } from './styles'
import { UserContext } from '../../context/userContext';
import WeatherInfo from '../../components/weather-info';

function Home() {

    const { setCity, getLat, getWeather, lat, lon } = useContext(UserContext);

    const handleSearch = () => {
        getLat();
    }

    useEffect(() => {
        if (lat && lon && lat !== '' && lon !== '') {
            getWeather();
        }
    }, [lat, lon]);

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return(
        <Container>
            <Title>Previsão do Tempo</Title>
            <SearchContainer>
                <SearchBox placeholder='Procure sua cidade' onChange={(e) => setCity(e.target.value)} onKeyDown={handleKeyPress}/>
                <SearchButton onClick={handleSearch}>Procurar</SearchButton>
            </SearchContainer>
            <WeatherInfo />
        </Container>
    );
}

export default Home;