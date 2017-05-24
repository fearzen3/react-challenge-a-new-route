import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class listHeroes extends Component {

  render() {
    return (
      <ul>
        {this.props.heros.map((hero,index)=>{
          return(

            <li key={index}> <Link to={`listchar/${hero.id}`}>{hero.localized_name}</Link></li>
          )
        })
        }
        </ul>
    )
  }


}

export default listHeroes;
