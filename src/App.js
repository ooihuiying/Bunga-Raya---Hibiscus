import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from './public/pages/Main';
import Info from './public/pages/Info';
import ThingsToDo from './public/pages/ThingsToDo';


function App() {
	return (
    <Router>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/Info'} className="nav-link">Info</Link></li>
            <li><Link to={'/ThingsToDo'} className="nav-link">ThingsToDo</Link></li>
          </ul>
        </nav>
        <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/Info' component={Info} />
              <Route path='/ThingsToDo' component={ThingsToDo} />
          </Switch>  

    </Router>
	);
}

export default App;
