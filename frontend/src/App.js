import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/global.css';
import Logon from "./pages/logon/Logon";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";

function App() {
  return (
      <Router>
          <Switch>
              <Route path={'/'} exact component={Logon}/>
              <Route path={'/register'} component={Register}/>
          </Switch>
      </Router>
  );
}

export default App;

