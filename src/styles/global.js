import { createGlobalStyle } from 'styled-components';
import {pixelToTwoViewport} from './pixelToTwoViewport';
import device from  '../styles/variables';


const Global = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Notable');
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: ${pixelToTwoViewport(80)};

    @media ${device.mobileMedium} {
      font-size: ${pixelToTwoViewport(50)}
    }

    @media ${device.tablet} {
      font-size: ${pixelToTwoViewport(24)}
    }

    @media ${device.laptop} {
      font-size: ${pixelToTwoViewport(16)};
    }

  }

  body {

    font-family: 'Notable', sans-serif;

    display: -webkit-box;

    display: -ms-flexbox;

    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;

    background-repeat: no-repeat;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#FF7F00), to(#FFBA00));
    background-image: -o-linear-gradient(top, #FF7F00, #FFBA00);
    background-image: linear-gradient(to bottom, #FF7F00, #FFBA00);

    min-height: 100vh;
    height: 100%;

    padding: 1em;

    @media ${device.mobileMedium} {
      padding: 2em;
    }
  }

`

export {
  Global
};