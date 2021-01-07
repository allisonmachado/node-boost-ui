import './App.css';
import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* Fixed navbar */}
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="/">Node Boost</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        {/* Begin page content */}
        <main role="main" className="flex-shrink-0">
          <div className="container py-5 my-5">
            <h1>Node Boost User Interface</h1>
            <hr></hr>
            <p>Minimal user interface for the node-boost app template.</p>
            <p>This project was bootstrapped with Create React App.</p>
          </div>
        </main>
        <footer className="footer mt-auto py-3 bg-light">
          <div className="container">
            <div className="row my-4">
              <div className="col-sm">
                <a className="text-secondary font-weight-bold" href="/">GitHub</a>
              </div>
              <div className="col-sm">
                <a className="text-secondary font-weight-bold" href="/">About</a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                Designed and built with love by <a href="https://github.com/allisonmachado">Allison Machado</a>.
                Currently v0.1.0. Code licensed <a href="/">MIT</a>.
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
