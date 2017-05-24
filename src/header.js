import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
class header extends Component {
  render() {
    return (

        <div>
        <ul>
          <li><Link to="/main">Main</Link></li>
          <li><Link to="/listchar">list character</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
        </div>

    )
  }
}






export default header;
