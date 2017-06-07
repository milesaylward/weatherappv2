import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ShowDetails } from '../actions';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';


class WeatherListItem extends Component {
  expandWeather(day) {
    const { expanded } = this.props;
    if(expanded){
      return (
        <div>
          <p className='exapnded-info'>
            Humidity: {day.avghumidity}%
          </p>
          <p className='exapnded-info'>
            Wind: {day.maxwind_mph}mph
          </p>
          <p className='exapnded-info'>
            Rain: {day.totalprecip_in}in
          </p>
        </div>
      )
    }
  }

  render() {
    const { day } = this.props.weather;
    const { id, date } = this.props;
    const DEGREE = '\xB0'
    return (
        <ReactCSSTransitionGroup
          component='li'
          transitionName='fade'
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          className='weather'
          onClick={() => this.props.ShowDetails(id)}
          >
          <div className='weather-header'>
            <h3>{date}</h3>
          </div>
          <img src={day.condition.icon} alt={day.condition.text}></img>
          <p className='condition'>{day.condition.text}</p>
          <div className='temp-container'>
            <p className='high'>
              {Math.round(day.maxtemp_f)}
              <span className='deg'>{DEGREE}</span>
            </p>
            <p className='low'>
              {Math.round(day.mintemp_f)}
              <span className='deg'>{DEGREE}</span>
            </p>
          </div>
          {this.expandWeather(day)}
        </ReactCSSTransitionGroup>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.search.selectedId === ownProps.id
  return { expanded };
}

export default connect(mapStateToProps, { ShowDetails })(WeatherListItem);
