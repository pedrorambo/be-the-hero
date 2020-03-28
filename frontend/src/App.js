import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/global.css';
import Logon from "./pages/logon/Logon";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
          <Switch>
              <Route path={'/'} component={Logon}/>
          </Switch>
      </Router>
  );
}

export default App;
