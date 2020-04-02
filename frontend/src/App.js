import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/global.css';
import Logon from "./pages/logon/Logon";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import NewIncident from "./pages/new-incident/NewIncident";
import Guest from "./pages/guest/Guest";
import Incidents from "./pages/incidents/Incidents";
import Incident from "./pages/incident/Incident";

function App() {
  return (
      <Router>
          <Switch>
              <Route path={'/'} exact component={Guest}/>
              <Route path={'/logon'} component={Logon}/>
              <Route path={'/incidents'} exact component={Incidents}/>
              <Route path={'/incident/:id'} component={Incident}/>
              <Route path={'/register'} component={Register}/>
              <Route path={'/profile'} component={Profile}/>
              <Route path={'/incidents/new'} component={NewIncident}/>
          </Switch>
      </Router>
  );
}

export default App;


