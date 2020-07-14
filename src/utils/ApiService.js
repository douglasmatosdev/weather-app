import { key, url, urlGroup, urlforecast } from './ApiConfig';

const ApiService = {

  weatherCityByName: cityName => {
    return fetch(`${url}${cityName}&units=metric&appid=${key}`)
      .then(res => res.json())
  },
  weattherSeveralCityId: group => {
    return fetch(`${urlGroup}${group}&units=metric&appid=${key}`)
      .then(res => res.json())
  },
  weatherCityByCoordinates: (lat, lon) => {
    return fetch(`${url}lat=${lat}&lon=${lon}&appid=${key}`)
      .then(res => res.json())
  },
  forecastWeatherCityByName: name => {
    return fetch(`${urlforecast}${name}&units=metric&appid=4cf5fbd6e666b3e619b57286143beb8c`)
      .then(res => res.json())
  }
}

export default ApiService;