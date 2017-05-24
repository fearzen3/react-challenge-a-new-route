import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import Main from './main.js'
import Header from './header.js'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Header />
        <Main />
      </div>
      </Router>
    )
  }
}


const About = () => <h1>About</h1>
const Topics = () => <h1>Topics</h1>



export default App;
