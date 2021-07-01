import {useState} from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home"
import Auth from "../routes/Auth"

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </switch>
    </Router>
  );
};

export default AppRouter;