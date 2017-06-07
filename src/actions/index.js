import axios from 'axios';

import {
  TEXT_CHANGED,
  SEARCH_SUBMIT,
  NEW_SEARCH,
  SHOW_DETAILS
} from './types';

const key = 'd77c1dd30bbf40ce857205709173105';

export const TextChange = (text) => {
  return {
    type: TEXT_CHANGED,
    payload: text
  };
};

export const Search = (value) => {
  /*
  In the week I built this app google updated chrome and apixu's certificate was no longer secure
  Using cors-anywhere as a workaround to keep my request secure
  may come back to use new api or remove once apixu updates certificate
  */
  return (dispatch) => {
    axios.get(`https://cors-anywhere.herokuapp.com/api.apixu.com/v1/forecast.json?key=${key}&q=${value}&days=5`)
      .then(res => {
        dispatch({ type: SEARCH_SUBMIT, payload: res.data })
      })
  }
}

export const NewSearch = () => {
  return {
    type: NEW_SEARCH,
    payload: null
  }
}

export const ShowDetails = (id) => {
  return {
    type: SHOW_DETAILS,
    payload: id
  }
}
