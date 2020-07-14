import React, { Fragment } from 'react';
// import CurrentLocation from './components/CurrentLocation/CurrentLocation';
import RandomCapitals from './components/RandomCapitals/RandomCapitals';
import {Global} from './styles/global';
import WidgetWeather from './components/WidgetWeather/WidgetWeather';

export default function App() {
  return (
    <Fragment>
      <WidgetWeather />
      <RandomCapitals />
      <Global />
    </Fragment>
  );
}

