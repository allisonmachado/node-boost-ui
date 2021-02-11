import Footer from "./components/layouts/Footer";
import Header from './components/layouts/Header';
import Login from "./components/routes/Login";
import Home from './components/routes/Home';
import User from "./components/routes/Users"

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
            <User
              userService={props.container.userService}>
            </User>
          </Route>
        </Switch>
      </div>
    </main>
    <Footer></Footer>
  </>);
}
