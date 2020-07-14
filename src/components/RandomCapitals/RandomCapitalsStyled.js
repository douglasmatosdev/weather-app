import styled from 'styled-components';
import device from '../../styles/variables';


export const RandomCapitalBoxStyle = styled.div`
 
  width: 100%;
  border-top: 1px solid #FFFEFC;
  padding-top: 1em;
  margin: 2em auto 0;

  @media ${device.tablet} {
    width: 70%;
    padding: 1em;
  }

  @media ${device.laptop} {
    margin: 0 auto;
    width: 40%;
  }
`;

export const TitleCapitals = styled.h2`
  color: #FFFEFC;
  text-shadow: 0 3px 2px rgba(0,0,0,.5);
  font-size: 2em;

  @media ${device.mobileSmall} {
    font-size: 1.8em;
  }

`;

export const ContainerCapitals = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
  line-height: 2.5;

  .fiveToForecastBox_title {
    span {
      margin-right: 1em;
    }
  }
  .fiveToForecastBox.two .fiveToForecastBox_title {
    display: none;
  }

  .fiveToForecastBox .fiveToForecastBox_info {
    font-weight: bolder;
  }

  @media ${device.mobileMedium} {
  .fiveToForecastBox.two .fiveToForecastBox_title {
    display: block;

  } 
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
    -ms-flex-direction: row;
      flex-direction: row;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
    justify-content: space-between;
  }

`;



export const FiveDayForecast = styled.div`
  span {
    margin-right: 1em;
  }
`;