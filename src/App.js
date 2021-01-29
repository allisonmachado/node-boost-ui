import React from "react";
import Footer from "./components/Footer";
import Header from './components/Header';
import HomePage from './components/HomePage';
import LoginPage from "./components/LoginPage";
import ListUsersPage from "./components/ListUsersPage";
import CreateUserPage from "./components/CreateUserPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.userService = this.props.container.userService;
    this.authService = this.props.container.authService;
    this.state = {
      user: this.userService.getLoggedInUser(),
    }
  }

  render() {
    return (
      <Router>
        <Header>
        </Header>
        <main role="main" className="flex-shrink-0">
          <div className="container py-5 my-5">
            <Switch>
              <Route exact path="/">
                <HomePage
                  user={this.state.user}>
                </HomePage>
              </Route>
              <Route path="/login">
                <LoginPage authService={this.props.container.authService}></LoginPage>
              </Route>
              <Route path="/users">
                <ListUsersPage
                  userService={this.props.container.userService}>
                </ListUsersPage>
              </Route>
              <Route path="/users/create">
                <CreateUserPage></CreateUserPage>
              </Route>
            </Switch>
          </div>
        </main>
        <Footer></Footer>
      </Router>
    );
  }
}
