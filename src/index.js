import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import bootstrap from 'bootstrap'; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./assets/css/argon.min.css"; 
import "./assets/css/font-awesome.min.css";
import "./assets/css/main.css"; 



import './index.css';
import * as serviceWorker from './serviceWorker';




ReactDOM.render(
  <App />,
document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
