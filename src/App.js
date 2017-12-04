import React, { Component } from 'react';
import 'whatwg-fetch';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

import { Header } from './components/Header'
import { Content } from './components/Content'
import { Home } from './components/Home'
import { Time } from './components/Time'

class App extends Component {
  render() {
    return (
      <Router>
        
          <Switch>
            {/* don't forget EXACT!!! */}
            <Route exact path="/" component={Home} />
            <Route path="/time" component={Time} />
          </Switch>
        
      </Router>
    );
  }
}

export default App;
