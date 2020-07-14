import React, { Fragment, Component } from 'react';
// import ApiService from '../../utils/ApiService';

export default class CurrentLocation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      weather: {}
    }
  }

  /*
       NÃO IMPLEMENTADO 
  */
  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(currentPosition => {

  //     ApiService.weatherCityByCoordinates(currentPosition.coords.latitude, currentPosition.coords.longitude)
  //       .then(res => this.setState({ weather: res }))
  //   })

  // };

  render() {

    return (
      <Fragment>
      </Fragment>
    );
  }

}
