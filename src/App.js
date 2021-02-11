import Footer from "./components/layouts/Footer";
import Header from './components/layouts/Header';
import Home from './components/routes/Home';
import Login from "./components/routes/Login";
import ListUser from "./components/routes/ListUsers";
import CreateUser from "./components/routes/CreateUser";

import { Switch, Route } from "react-router-dom";

export default function App(props) {
  // const [user, setUser] = useState(null)
  const user = null;

  return (<>
    <Header>
    </Header>
    <main role="main" className="flex-shrink-0">
      <div className="container py-5 my-5">
        <Switch>
          <Route exact path="/">
            <Home
              user={user}>
            </Home>
          </Route>
          <Route path="/login">
            <Login authService={props.container.authService}></Login>
          </Route>
          <Route path="/users">
            <ListUser
              userService={props.container.userService}>
            </ListUser>
          </Route>
          <Route path="/users/create">
            <CreateUser></CreateUser>
          </Route>
        </Switch>
      </div>
    </main>
    <Footer></Footer>
  </>);
}
