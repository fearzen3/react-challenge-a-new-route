import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home.js'
import ListChar from './listchar.js'


class Main extends Component {
  render() {
    return (


      <div>
      <Route  path="/main" component={Home}/>
      <Route  path="/listchar" component={ListChar}/>
      <Route  path="/topics" component={Topics}/>
      </div>

    )
  }
}



const Topics = () => <h1>Topics</h1>



export default Main;
