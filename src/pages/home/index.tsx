import { Container, Title, SearchContainer, SearchBox, SearchButton } from './styles'

function Home() {

    // City to lon and lat
    // https://api.openweathermap.org/geo/1.0/direct?q={ City Name }&appid=7add3f6a992603ea0e9738c6d29d54ad

    // City Weather
    // https://api.openweathermap.org/data/2.5/weather?lat={ Lat }&lon={ Lon }&appid=7add3f6a992603ea0e9738c6d29d54ad

    return(
        <Container>
            <Title>Procura uma cidade ae porra</Title>
            <SearchContainer>
                <SearchBox></SearchBox>
                <SearchButton>procurar</SearchButton>
            </SearchContainer>
        </Container>
    );
}

export default Home;