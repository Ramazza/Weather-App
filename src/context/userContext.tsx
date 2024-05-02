import api from "../api";
import { createContext, useState } from "react";

export const UserContext = createContext({ } as any);

export const UserStorage = ({ children }: any) => {

    const [city, setCity] = useState('');
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [weather, setWeather] = useState([])
    const [erro, setErro] = useState(false)
    const metric = 'metric';
    const pt_br = 'pt_br';

    const getLat = () => {
        api.get(`/lat`, {params: {q: city}}).then((data) => {
            setLat(data.data[0].lat);
            setLon(data.data[0].lon);
            setErro(false);
        }).catch((error => {
            console.log('Não foi possível buscar a latitude e longitude', error);
            setErro(true);
        }))
    }

    const getWeather = () => {
        api.get(`/weather`, {params: {lat: lat, lon: lon, units: metric, lang: pt_br}}).then((data) => {
            setWeather(data.data);
            setErro(false);
        }).catch((error => {
            console.log('Não foi possível buscar a temperatura', error);
            setErro(true);
        }))
    }

    return(
        <UserContext.Provider value={{
            city,
            setCity,
            setLat,
            setLon,
            getLat,
            getWeather,
            setWeather,
            weather,
            lat,
            lon,
            erro
        }}>
            {children}
        </UserContext.Provider>
    );

}
