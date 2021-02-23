import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import ProvideAuth from "./components/util/ProvideAuth"

import UserService from './services/UserService';
import UserFetch from './data/http/UserFetch';
import UserRepository from './data/storage/UserRepository';

import AuthService from './services/AuthService';
import AuthRepository from './data/storage/AuthRepository'
import AuthFetch from './data/http/AuthFetch';

import { BrowserRouter as Router } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css';

const userFetch = new UserFetch('http://localhost:8080');
const authFetch = new AuthFetch('http://localhost:8080');

const userRepository = new UserRepository();
const authRepository = new AuthRepository();

const container = {
  userService: new UserService(userFetch, userRepository),
  authService: new AuthService(authFetch, authRepository, userRepository),
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProvideAuth authService={container.authService}>
        <App container={container} />
      </ProvideAuth>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
