import { useEffect, useState, useRef } from "react";
import tempLogo from "./assets/temp.svg";
import "./App.css";

const apiKey = "d3d6d9dab7494ac9a0d22629242511";
const api_url = "http://api.weatherapi.com/v1";

const allowGeolocation = () => {
  if ("geolocation" in navigator) {
    console.log("API de Geolocalização está disponível");
    return true;
  } else {
    console.error(
      "API de GeoLocalização não está disponível no seu navegador."
    );
    return false;
  }
};

const defineGeoPosition = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    (!latitude || !longitude) && reject("Não foi possível obter a localização");
    const geo_position = {
      lat: latitude,
      lon: longitude,
    };
    resolve(geo_position);
  });
});

function App() {
  const [tempInfo, setTempInfo] = useState({});
  const [isGeoEnabled] = useState(allowGeolocation);
  const [geoPosition, setGeoPosition] = useState({});
  const [localCity, setLocalCity] = useState("");
  const inputCity = useRef();

  const consultaTemp = async () => {
    try {
      if (inputCity.current.value == "") return;
      const city = inputCity.current.value;
      const response = await fetch(`${api_url}/current.json?key=${apiKey}&q=${city}`);
      const data = await response.json();
      console.log(`Temperatura para ${city}:`, data);
      setTempInfo(data)
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const consultaTempLocal = async () => {
    try {
      const { lat, lon } = geoPosition;
      const response = await fetch(
        `${api_url}/current.json?key=${apiKey}&q=${lat},${lon}`
      );
      const data = await response.json();
      console.log("Temperatura para geolocalização!");
      console.log({ geoPosition });
      console.log(data);
      setTempInfo(data);
      setLocalCity(data?.location?.name);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    async function getGeoPosition() {//define a função como async
      if (isGeoEnabled) {
        try {
          const geo_position = await defineGeoPosition;
          setGeoPosition(geo_position);
          console.log("Localização:");
          console.log("Latitude: ", geo_position.lat);
          console.log("Longitude: ", geo_position.lon);
        } catch (erro) {
          console.log("Erro:", erro);
        }
      }
    }
    getGeoPosition(); //executa a função assincrona

    // (async () => { //definição da função imediatamente executavel IIFE
    //   if (isGeoEnabled) {
    //     try {
    //       const geo_position = await defineGeoPosition;
    //       setGeoPosition(geo_position);
    //       console.log('Localização:')
    //       console.log('Latitude: ', geo_position.lat);
    //       console.log('Longitude: ', geo_position.lon);
    //     } catch (erro) {
    //       console.log('Erro:', erro);
    //     }
    //   }
    // })();//Aqui a função é executada imediatamente
  }, [isGeoEnabled]);

  useEffect(() => {
    console.log('Temp:', tempInfo?.current?.temp_c)
  }, [tempInfo]);

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={tempLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Comsumo de API</h1>
      <h2>Weatherapi</h2>
      <div className="card">
        <input type="text" ref={inputCity} placeholder="Nome de sua Cidade!!" />
        <button onClick={() => consultaTemp()}>Temperatura</button>
      </div>
      <div className="card">
        <button
          onClick={() => consultaTempLocal()}
          disabled={!geoPosition?.lat}
        >
          Temperatura em {localCity?localCity:'seu local'}
        </button>
      </div>
      {tempInfo?.current && (
        <h2>
          A temperatura em {tempInfo?.location?.name} é{" "}
          {tempInfo?.current?.temp_c} °C
        </h2>
      )}
    </>
  );
}

export default App;
