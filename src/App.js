import React from "react";
import Footer from "./components/Footer";
import Header from './components/Header';
import Home from './components/Home';

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
