import React, { Component } from 'react';
import SignUp from './components/Signup';
import Signin from './components/Signin';
import Forgot from './components/forgot';
import NotFound from './components/notFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Switch>
      <Route path="/" exact component={SignUp} />
      <Route path="/sign-in" exact component={Signin} />
      <Route path="/forgot" exact component={Forgot} />
      <Route  component={NotFound} />
      </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
