import ListUsers from './ListUsers'

import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

export default function Users(props) {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <ListUsers userService={props.userService} />
      </Route>
      <Route path={`${path}/:userId`}>
        :userId
      </Route>
    </Switch>
  );
}