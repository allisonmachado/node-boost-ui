import CreateUser from './CreateUser';
import ListUsers from './ListUsers'
import ShowUser from './ShowUser'

import { Switch, Route, useRouteMatch } from "react-router-dom";

export default function Users({ userService }) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <ListUsers userService={userService} />
      </Route>
      <Route path={`${path}/create`}>
        <CreateUser userService={userService} />
      </Route>
      <Route path={`${path}/:id`}>
        <ShowUser userService={userService} />
      </Route>
    </Switch>
  );
}