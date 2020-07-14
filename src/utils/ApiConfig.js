import dotenv from 'dotenv';

dotenv.config();
const key = process.env.REACT_APP_OPEN_WEATHER_KEY;
const url = process.env.REACT_APP_URL;
const urlGroup = process.env.REACT_APP_URL_GROUP;
const urlforecast = process.env.REACT_APP_URL_FORECAST;

export  {
  key,
  url,
  urlGroup,
  urlforecast
}