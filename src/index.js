import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

import UserService from './services/UserService';
import UserFetch from './data/http/UserFetch';
import UserRepository from './data/storage/UserRepository';

import AuthService from './services/AuthService';
import AuthFetch from './data/http/AuthFetch';

import { BrowserRouter as Router } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css';

const container = {
  userService: new UserService(new UserFetch('http://localhost:8080'), new UserRepository()),
  authService: new AuthService(new AuthFetch('http://localhost:8080')),
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App container={container} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
