import React, { Component } from 'react'
import ApiService from '../../utils/ApiService';
import allCapitalsIds from './allCapitals';
import generatesRandomNumbers from '../../utils/generatesRandomNumbers';
import { RandomCapitalBoxStyle, TitleCapitals, ContainerCapitals, FiveDayForecast } from './RandomCapitalsStyled';

const RandomCapital = props => {
  const ColumnOne = props.columnOne.map((cap) => {
    return (
      <FiveDayForecast key={cap.id}>
        <span>{Math.floor(cap.main.temp_min)}°</span>
        <span>{Math.floor(cap.main.temp_max)}°</span>
        <span>{cap.name}</span>
      </FiveDayForecast>
    );
  });

  const ColumnTwo = props.columnTwo.map((cap) => {
    return (
      <FiveDayForecast key={cap.id}>
        <span>{Math.floor(cap.main.temp_min)}°</span>
        <span>{Math.floor(cap.main.temp_max)}°</span>
        <span>{cap.name}</span>
      </FiveDayForecast>
    );
  });

  return (
    <RandomCapitalBoxStyle>
      <TitleCapitals>Capitais</TitleCapitals>
      <ContainerCapitals>
        <div className="fiveToForecastBox one">
          <div className="fiveToForecastBox_title">
            <span>min</span>
            <span>Max</span>
          </div>
          <div className="fiveToForecastBox_info">
            {ColumnOne}
          </div>
        </div>
        <div className="fiveToForecastBox two">
          <div className="fiveToForecastBox_title">
            <span>min</span>
            <span>Max</span>
          </div>
          <div className="fiveToForecastBox_info">
            {ColumnTwo}
          </div>
        </div>
      </ContainerCapitals>
    </RandomCapitalBoxStyle >
  );

}

export default class RandomCapitals extends Component {
  constructor(props) {
    super(props);

    this.state = { columnOne: [], columnTwo: [] }
  }

  chunkArray(myArray, chunk_size) {
    let index = 0;
    let arrayLength = myArray.length;
    let tempArray = [];
    for (index = 0; index < arrayLength; index += chunk_size) {

      let myChunk = myArray.slice(index, index + chunk_size);
      // Do something if you want with the group
      tempArray.push(myChunk);

    }

    return tempArray;
  }

  drawingCapitals() {

    let indexForCapitalsIds = generatesRandomNumbers(0, 10, 26);
    let chosenCapitals = [];

    indexForCapitalsIds.forEach((element) => {
      chosenCapitals.push(allCapitalsIds[element]);
    });

    return chosenCapitals;
  }


  componentDidMount() {

    ApiService.weattherSeveralCityId(this.drawingCapitals())
      .then(res => {

        let arrayForSplitInColumns = this.chunkArray(res.list, 5);

        let setArrayColumnOne = new Set(arrayForSplitInColumns[0]);
        let columnOne = Array.from(setArrayColumnOne);

        let setArrayColumnTwo = new Set(arrayForSplitInColumns[1]);
        let columnTwo = Array.from(setArrayColumnTwo);


        this.setState({ columnOne: columnOne, columnTwo: columnTwo });
      })
  }

  render() {
    return (
      <RandomCapital columnOne={this.state.columnOne} columnTwo={this.state.columnTwo} />
    );
  }

}
