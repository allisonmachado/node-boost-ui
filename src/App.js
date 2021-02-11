import Footer from "./components/Footer";
import Header from './components/Header';
import HomePage from './components/HomePage';
import LoginPage from "./components/LoginPage";
import ListUsersPage from "./components/ListUsersPage";
import CreateUserPage from "./components/CreateUserPage";

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
            <HomePage
              user={user}>
            </HomePage>
          </Route>
          <Route path="/login">
            <LoginPage authService={props.container.authService}></LoginPage>
          </Route>
          <Route path="/users">
            <ListUsersPage
              userService={props.container.userService}>
            </ListUsersPage>
          </Route>
          <Route path="/users/create">
            <CreateUserPage></CreateUserPage>
          </Route>
        </Switch>
      </div>
    </main>
    <Footer></Footer>
  </>);
}
