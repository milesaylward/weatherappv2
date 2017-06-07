import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextChange, Search, NewSearch } from '../actions';

class Input extends Component {
  onTextChange(text) {
    this.props.searchSubmitted
    ?
    this.props.NewSearch()
    :
    this.props.TextChange(text)
  }
  onSearchSubmit(e) {
    const { query } = this.props;
    e.preventDefault();
    this.props.Search(query);
  }
  renderLocation() {
    if (this.props.searchSubmitted) {
      return (
        <div className='location-container'>
          <h2 className='location'>
            {this.props.results.location.name},
            {this.props.results.location.region}
          </h2>
        </div>
      );
    }
    return null;
  }

  render() {
    const { searchSubmitted } = this.props;
    const formSubmitted = searchSubmitted ? 'form-submitted' : '';
    const shrinkImage = searchSubmitted ? 'shrink-image' : '';
    return (
      <div>
        <img
          src={require('../images/cityicon.png')}
          alt='City Logo'
          className={"city-logo " + shrinkImage}
        />
        <form
          onSubmit={this.onSearchSubmit.bind(this)}
          >
          <input
            placeholder='ENTER CITY'
            onChange={(event) => this.onTextChange(event.target.value)}
            onClick={() => this.inputClicked}
            className={'form-input ' + formSubmitted}
            value={this.props.query}
          />
          <div>{this.renderLocation()}</div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ search }) => {
  const { query, results, searchSubmitted } = search;
  return { query,results, searchSubmitted };
}

export default connect(mapStateToProps, {
  TextChange,
  Search,
  NewSearch
})(Input);
