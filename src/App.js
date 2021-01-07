import './App.css';
import React from "react";
import Footer from "./Footer";
import Header from './Header';
import Home from './Home';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <main role="main" className="flex-shrink-0">
          <div className="container py-5 my-5">
            <Home></Home>
          </div>
        </main>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}
