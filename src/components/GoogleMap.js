import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  getLocation() {
    const { lon, lat } = this.props.location
    return { lat, lng: lon };
  }

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.getLocation()}
        defaultZoom={10}
        defaultOptions={{ borderRadius: '30px' }}
      />
    );
  }
}

const mapStateToProps = ({ search }) => {
  const { location } = search.results;
  return { location };
}

export default connect(mapStateToProps)(Map);
