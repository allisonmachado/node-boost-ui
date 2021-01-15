import React from "react";
import Footer from "./components/Footer";
import Header from './components/Header';
import HomePage from './components/HomePage';
import ListUsersPage from "./components/ListUsersPage";
import CreateUsersPage from "./components/CreateUsersPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Header></Header>
        <main role="main" className="flex-shrink-0">
          <div className="container py-5 my-5">
            <Switch>
              <Route exact path="/">
                <HomePage></HomePage>
              </Route>
              <Route path="/users">
                <ListUsersPage></ListUsersPage>
              </Route>
              <Route path="/users/create">
                <CreateUsersPage></CreateUsersPage>
              </Route>
            </Switch>
          </div>
        </main>
        <Footer></Footer>
      </Router>
    );
  }
}
