import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import Header from './components/Header';
import Input from './components/Input';
import WeatherList from './components/WeatherList';
import reducers from './reducers/index';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(Thunk));

    return (
      <Provider store={store}>
        <div>
          <Header />
          <Input />
          <WeatherList />
        </div>
      </Provider>
    );
  }
}

export default App;
