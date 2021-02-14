import ListUsers from './ListUsers'
import ShowUser from './ShowUser'

import { Switch, Route, useRouteMatch } from "react-router-dom";

export default function Users(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <ListUsers userService={props.userService} />
      </Route>
      <Route path={`${path}/:id`}>
        <ShowUser userService={props.userService} />
      </Route>
    </Switch>
  );
}