import * as axios from 'axios';
import { API_KEY } from './config';

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export const weatherApi = {
  byCoord(lat, lon) {
    return instance.get(
      `weather?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=${API_KEY}`
    );
  },
  byCityName(city) {
    return instance.get(
      `weather?q=${city}&units=metric&lang=${API_KEY}`
    );
  },
  forWeek(city) {
    return instance
      .get(`forecast?q=${city}&lang=ru&units=metric&appid=${API_KEY}`)
      .then((res) => res.data.list);
  },
};
