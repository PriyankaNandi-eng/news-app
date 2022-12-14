import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export class App extends Component {
pageSize = 12;
  render() {
    return (
      <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
          <News key="general" pageSize={this.pageSize} country="in" category="general"/>
          </Route>
          <Route exact path="/science">
          <News key="science" pageSize={this.pageSize} country="in" category="science"/>
          </Route>
          <Route exact path="/business">
          <News key="science" pageSize={this.pageSize} country="in" category="business"/>
          </Route>
          <Route exact path="/health">
          <News key="health" pageSize={this.pageSize} country="in" category="health"/>
          </Route>
          <Route exact path="/technology">
          <News key="science" pageSize={this.pageSize} country="in" category="technology"/>
          </Route>
          <Route exact path="/sports">
          <News key="science" pageSize={this.pageSize} country="in" category="sports"/>
          </Route>
        </Switch>
     
 
        </Router>
      </div>

    )
  }
}

export default App


