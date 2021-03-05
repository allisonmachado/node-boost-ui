import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import ProvideAuth from "./components/util/ProvideAuth";

import UserFetch from "./data/http/UserFetch";
import UserService from "./services/UserService";

import AuthFetch from "./data/http/AuthFetch";
import AuthService from "./services/AuthService";
import AuthRepository from "./data/storage/AuthRepository";

import { Environment } from "./lib/Environment";
import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "jquery/dist/jquery.slim";
import "bootstrap/dist/js/bootstrap.bundle";
import "./index.css";

const BACKEND_API = Environment.getBackendApi();

const userFetch = new UserFetch(BACKEND_API);
const authFetch = new AuthFetch(BACKEND_API);

const authRepository = new AuthRepository();

const container = {
  userService: new UserService(userFetch, authRepository),
  authService: new AuthService(authFetch, authRepository),
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProvideAuth authService={container.authService}>
        <App container={container} />
      </ProvideAuth>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
