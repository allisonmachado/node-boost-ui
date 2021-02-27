import NotFound from "./components/routes/NotFound";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Login from "./components/routes/Login";
import Home from "./components/routes/Home";
import User from "./components/routes/Users";

import { Switch, Route } from "react-router-dom";

export default function App({ container }) {
  return (<>
    <Header {...container} />
    <main role="main" className="flex-shrink-0">
      <div className="container py-5 my-5">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login {...container} />
          </Route>
          <Route path="/users">
            <User {...container} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </main>
    <Footer />
  </>);
}
