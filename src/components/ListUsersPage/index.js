import React from "react"
import CreateUsersPage from "../CreateUsersPage";
import Title from "../Title";

import { Switch, Route, Link, withRouter } from "react-router-dom";

class ListUsersPage extends React.Component {
  render() {
    const { path, url } = this.props.match;

    return (
      <React.Fragment>
        <Switch>
          <Route exact path={path}>
            <Title>Users</Title>
            <table class="table table-hover table-responsive-sm">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Surname</th>
                  <th scope="col">Email</th>
                  <th scope="col">action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>?</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>?</td>
                </tr>
                <tr>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>?</td>
                </tr>
              </tbody>
            </table>
            <Link to={`${url}/create`}>
              <button type="button" class="btn btn-primary float-right">
                Create
              </button>
            </Link>
          </Route>
          <Route path={`${path}/create`}>
            <CreateUsersPage></CreateUsersPage>
          </Route>
        </Switch>
      </React.Fragment>
    )
  }
}

export default withRouter(ListUsersPage);