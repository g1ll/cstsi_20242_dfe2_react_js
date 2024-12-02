import { useEffect, useRef, useState } from 'react'
import tempLogo from './assets/temp.svg'
import './App.css'

const apiKey = 'd3d6d9dab7494ac9a0d22629242511';
const api_url = 'http://api.weatherapi.com/v1'

const allowGeolocation = () => {
  if ("geolocation" in navigator) {
    console.log('API de Geolocalização está disponível')
    return true;
  } else {
    console.error("API de GeoLocalização não está disponível no seu navegador.");
    return false
  }
}

const defineGeoPosition = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    (!latitude || !longitude) && reject('Não foi possível obter a localização')
    const geo_position = {
      lat: latitude,
      lon: longitude,
    }
    resolve(geo_position)
  })
})

function App() {
  const [tempInfo, setTempInfo] = useState({})
  const [isGeoEnabled] = useState(allowGeolocation)
  const [geoPosition, setGeoPosition] = useState({})
  const inputCity =useRef();

  const consultaTemp = () => {
    if(inputCity.current.value=='') return
    const city = inputCity.current.value;
    fetch(`${api_url}/current.json?key=${apiKey}&q=${city}`)
      .then(response => response.json())
      .then(data => {
        console.log(`Temperatura para ${city}:`, data);
        setTempInfo(data)

      })
      .catch(error => console.log('Error:', error));
  }

  const consultaTempLocal = () => {
    const { lat, lon } = geoPosition;
    fetch(`${api_url}/current.json?key=${apiKey}&q=${lat},${lon}`)
      .then(response => response.json())
      .then(data => {
        console.log(`Temperatura para geolocalização (lat: ${lat} lon: ${lon})!`);
        console.log({ geoPosition }, data)
        setTempInfo(data)
      })
      .catch(error => console.log('Error:', error));
  }

  useEffect(() => {
    isGeoEnabled && defineGeoPosition.then(geo_position => {
          setGeoPosition(geo_position);
          console.log('Localização:')
          console.log('Latitude: ', geo_position.lat);
          console.log('Longitude: ', geo_position.lon);
        })
        .catch(erro => console.log('Erro:', erro));
  }, [isGeoEnabled])

  useEffect(() => {
    console.log('Temp:', tempInfo?.current?.temp_c)
  }, [tempInfo])

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
        <input type='text' ref={inputCity} placeholder='Nome de sua Cidade!!'/>
        <button onClick={() => consultaTemp()}>
          Temperatura
        </button>
      </div>
      <div className="card">
        <button onClick={() => consultaTempLocal()} disabled={!geoPosition?.lat}>
          Temperatura em seu local
        </button>
      </div>
      {tempInfo?.current && <h2>
        A temperatura em {tempInfo?.location?.name} é {tempInfo?.current?.temp_c} °C
      </h2>
      }
    </>
  )
}

export default App
