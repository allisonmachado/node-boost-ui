import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import UserService from './services/UserService';
import UserRepository from './data/UserRepository';
import AuthService from './services/AuthService';
import AuthRepository from './data/AuthRepository';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css';

const container = {
  userService: new UserService(new UserRepository('http://localhost:8080')),
  authService: new AuthService(new AuthRepository('http://localhost:8080')),
}

ReactDOM.render(
  <React.StrictMode>
    <App container={container} />
  </React.StrictMode>,
  document.getElementById('root')
);
