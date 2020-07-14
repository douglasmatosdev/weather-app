import React, { Component, Fragment } from 'react';
import ApiService from '../../utils/ApiService';
import { WeatherCardBox, WeatherCard, MainTitle, Form, Input, Button } from './WidgetWeatherStyle';
import spinner from '../../assets/spinner.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faSearch } from '@fortawesome/free-solid-svg-icons'

export default class WidgetWeather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentWeather:
      {
        city: '',
        cityAbb: '',
        country: '',
        temperature: '',
        condition: '',
        temperatureMin: '',
        temperatureMax: '',
        sensation: '',
        wind: '',
        humidity: '',
      },
      forecastDays: [],
      isWidgetVisible: true,
      
      value: '',
      widgetLoading: false,
    };


    this.handleChange = this.handleChange.bind(this);
    this.submitSearchForCity = this.submitSearchForCity.bind(this);
  }

  componentDidMount() {
    this.inputSearch.focus();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async submitSearchForCity(event) {
    this.setState({ widgetLoading: true })
    event.preventDefault();

    await ApiService.weatherCityByName(this.state.value)
      .then(res => {
        this.setState({
          currentWeather: {
            city: res.name,
            cityAbb: '',
            country: res.sys.country,
            temperature: res.main.temp,
            condition: res.weather[0]['description'],
            temperatureMin: res.main.temp_min,
            temperatureMax: res.main.temp_max,
            sensation: res.main.feels_like,
            wind: res.wind.speed,
            humidity: res.main.humidity,
          }
        })
        this.setState({ widgetLoading: false })
        this.setState(this.state.currentWeather)
        this.setState({ isWidgetVisible: true })

      })

    let forecastDays = []

    await ApiService.forecastWeatherCityByName(this.state.currentWeather.city)
      .then(json => {

        let daysweek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
        let today = new Date().toLocaleString().replace(/\//g, '-')
        let part1 = today.split(' ')
        let part2 = part1[0].split('-')
        let date = `${part2[2]}-${part2[1]}-${part2[0] + 1} ${part1[1]}`
        json.list.map(item => {
          if (item.dt_txt >= date) {

            let dateApi = item.dt_txt.split(' ')

            if (item.dt_txt === `${dateApi[0]} 12:00:00`) {
              forecastDays.push({
                id: item.dt,
                daysweek: daysweek[new Date(item.dt_txt).getDay()],
                tempmin: Math.floor(item.main.temp_min),
                tempmax: Math.ceil(item.main.temp_max)
              })

              this.setState({ forecastDays: forecastDays })
            }
          }
          return forecastDays;
        })
        return forecastDays;
      })
  }

  render() {


    let search = this.state.currentWeather;

    return (
      <Fragment>
        <WeatherCardBox>
          <MainTitle>Previsão do tempo</MainTitle>
          {this.state.widgetLoading ? (
            <img
              src={spinner}
              style={{ width: '5em', height: '5em' }}
              className="widgetLoader"
              alt="weather widget loading"
            />
          ) : null}
          <WeatherCard className={`box ${this.state.isWidgetVisible ? "" : " hidden"}`} >
            <div>
              <h4 className="infoTop">{search.city} - {search.country}</h4>
              <h1 className="infoBold mainInfo">{search.temperature}°C {search.condition}</h1>
            </div>
            <div className="aditionalInfo">
              <div className="temperatureMinMax">
                <span className="infoBold">
                  <FontAwesomeIcon
                    className="arrow"
                    icon={faArrowDown}
                  /> {search.temperatureMin}°
                </span>
                <span className="infoBold">
                  <FontAwesomeIcon
                    className="arrow"
                    icon={faArrowUp}
                  /> {search.temperatureMax}°
                </span>
              </div>
              <div>
                <span>Sensação <span className="infoBold">{search.sensation}°C</span></span>
              </div>
              <div>
                <span>Vento <span className="infoBold">{search.wind}Km/h</span></span>
              </div>
              <div>
                <span>Humidade <span className="infoBold">{search.humidity}%</span></span>
              </div>
            </div>
            <div className="forecast">
              {this.state.forecastDays.map(e => (
                <div key={e.id} className="forecastItem">
                  <span className="forecastDayName">{e.daysweek}</span>
                  <span className="forecastDayTempMinMax" >
                    <span>
                      {e.tempmin}°
                    </span>
                    <span>
                      {e.tempmax}°
                    </span>
                  </span>
                </div>
              ))
              }
            </div>
          </WeatherCard>

          <Form onSubmit={this.submitSearchForCity}>
            <Input
              type="text"
              onChange={this.handleChange}
              ref={(input) => { this.inputSearch = input; }}
              placeholder="Digite uma ciadade, Ex.: Rio de Janeiro"
            />
            <Button type="submit">
              <FontAwesomeIcon
                className="iconSearch"
                icon={faSearch}
              />
            </Button>
          </Form>
        </WeatherCardBox>
      </Fragment >
    )
  }
}
