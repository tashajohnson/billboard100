import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import songs from './reducers/songs';
import filter from './reducers/filter';
import SongApp from './containers/SongApp';

const songApp = combineReducers({ songs, filter });

ReactDOM.render(
  <Provider store={createStore(songApp, applyMiddleware(ReduxThunk))}>
    <SongApp />
  </Provider>
  , document.getElementById('content'));
