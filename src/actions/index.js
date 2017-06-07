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
  return (dispatch) => {
    axios.get(`http://api.apixu.com/v1/forecast.json?key=${key}&q=${value}&days=5`)
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
