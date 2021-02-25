import { Switch, Route, useRouteMatch } from "react-router-dom";
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import ListUsers from './ListUsers'
import ShowUser from './ShowUser'

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
      <Route path={`${path}/edit/:id`}>
        <UpdateUser userService={userService} />
      </Route>
      <Route path={`${path}/:id`}>
        <ShowUser userService={userService} />
      </Route>
    </Switch>
  );
}