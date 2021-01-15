import React from "react"
import Title from "../Title";
import UsersTable from "./UsersTable";
import CreateUserPage from "../CreateUserPage";

import { Switch, Route, Link, withRouter } from "react-router-dom";

class ListUsersPage extends React.Component {
  render() {
    const { path, url } = this.props.match;

    return (
      <React.Fragment>
        <Switch>
          <Route exact path={path}>
            <Title>Users</Title>
            <UsersTable></UsersTable>
            <Link to={`${url}/create`}>
              <button type="button" class="btn btn-primary float-right">
                Create
              </button>
            </Link>
          </Route>
          <Route path={`${path}/create`}>
            <CreateUserPage></CreateUserPage>
          </Route>
        </Switch>
      </React.Fragment>
    )
  }
}

export default withRouter(ListUsersPage);