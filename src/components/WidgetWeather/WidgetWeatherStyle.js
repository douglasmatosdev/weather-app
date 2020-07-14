import styled from 'styled-components';
import device from '../../styles/variables';

const MainTitle = styled.h1`
  margin: 1em;
  color:#FFFEFC;
  text-shadow: 0 5px 5px rgba(0,0,0,.5);

@media ${device.mobileSmall} {
    font-size: 2em;
    margin: 0;
    padding: 0;
  }
`;

const WeatherCardBox = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
    -ms-flex-direction: column;
      flex-direction: column;
  -webkit-box-align: center;
    -ms-flex-align: center;
      align-items: center;


  width: 100%;
  height: 100%;

  line-height: 1.5;

  @media ${device.tablet} {
    margin: 0 auto;
    width: 70%;
  }
  @media ${device.laptop} {
    margin: 0 auto;
    width: 40%;
  }

    .widgetLoader {

      position: relative;
    }

  transition: all 300ms;
    .hidden {
      display: none;
      opacity: 0;
      visibility: hidden;
      height: 0;
      margin-top: -70px;
    }
    .box {

    }

  /* funcionalidades com javascript */

    /* section.form {
      transition: all 300ms;
    }

    section.form.hide {
      opacity: 0;
      visibility: hidden;
      height: 0;
      margin-top: -70px;
    } */

`;

const WeatherCard = styled.div`
  font-size : 70%;
  width: 100%;
  height: 100%;

  background: #FFFEFC;
  padding: 1em 1em;
  margin-bottom: 2em;
  border: none;
  border-radius: 5px;
  box-shadow: 0 8px 15px -5px black;

    .infoTop {
      color: #505050;
    }
    .mainInfo {
      color:#505050;
      font-weight: bolder;
    }
    .aditionalInfo {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1em;
      color: #B3ACA3;
    .infoBold {

        font-weight: bold;
        color: #5E5D5C;
    }
                
    .arrow {
      /* font-size: 1em; */
      color: #FF8102;
      outline: none;
      line-height: 1;
      margin: 0;
      padding: 0;
    }

  }

  .forecast {
    width: 100%;

    border-top: 1px solid #FF8102;

    margin: 1em auto 0; 
    padding-top: 1em;

    display: -ms-grid;

    display: grid;
    -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;


      .forecastItem {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
          -ms-flex-direction: column;
            flex-direction: column;
        -webkit-box-align: center;
          -ms-flex-align: center;
            align-items: center;
        font-weight: bold;
      }
      .forecastDayName {
        color: #505050;
      }
      .forecastDayTempMinMax {
        color: #FF8102;
      }
  }

`

const Form = styled.form`

  width: 100%;
  position: relative;
`;

const Input = styled.input`
       width: 100%;
    height: 100%;
    padding: .5em 1em;

    border: none;
    border-radius: 5px;

    -webkit-box-shadow: 0 2px 5px 1px rgba(0,0,0, .5);
      box-shadow: 0 2px 5px 1px rgba(0,0,0, .5);

    @media ${device.laptop} {
      padding: 1em 1.5em;
    }
  `;

const Button = styled.button`
    position: absolute;
    right: 5px;
    top: 0;
    bottom: 0;

    border: none;
    font-size: 1.2em;
    background:  transparent;

    @media ${device.tablet} {
      font-size: 1.5em;
    }

      .iconSearch {
        color: #505050;
        opacity: .7;
      }
`;

export {
  WeatherCardBox,
  WeatherCard,
  MainTitle,
  Form,
  Input,
  Button
}