import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';
import WeatherListItem from './WeatherListItem';
import Map from './GoogleMap';

class WeatherList extends Component {
  /*
  this very ugly function was my work around
  for getting some nice day stamps to put over
  weather containers, the api returns epoch dates
  so I took them, converted them to string and sliced
  them at the day abbreviation
  */
  getDate(data, idx) {
    if(idx === 0){
      return "Today"
    }
    else if (idx === 1) {
      return "Tomorrow"
    }
    const epoch = data.date_epoch;
    const myDate = new Date( epoch * 1000 );
    const date = myDate.toGMTString();

    const shortDay = date.slice(0, 3);

    return shortDay;

  }

  render() {
    return (
      <div className='weather-container'>
          { this.props.results ?
            <ReactCSSTransitionGroup
              component='ul'
              transitionName='fade'
              transitionAppear={true}
              transitionAppearTimeout={1000}
              transitionEnterTimeout={750}
              transitionLeaveTimeout={750}
              >
                  <li className="map-container"><Map /></li>
                  {this.props.results.forecast.forecastday.map((day, index) => {
                    return <WeatherListItem weather={day} date={this.getDate(day, index)} id={day.date_epoch} key={day.date_epoch} />
                  })}
          </ReactCSSTransitionGroup>
            :
            null
          }
        </div>
    );
  }
}

const mapStateToProps = ({ search }) => {
  const { results } = search;
  return { results };
}

export default connect(mapStateToProps)(WeatherList);
