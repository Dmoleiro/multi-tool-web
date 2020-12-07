import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LandingPage from './containers/LandingPage';

// Redux Library Packages 
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from "redux";
import { logger } from 'redux-logger';

import rootReducer from "./redux/reducers/index";
import rootSaga  from "./redux/sagas/index";

const sagaMiddleware = createSagaMiddleware();

const globalStore = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
  );
  sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
       <LandingPage store={globalStore}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
