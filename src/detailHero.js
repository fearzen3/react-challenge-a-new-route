import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class detailHero extends Component {
  constructor(props){
    super(props)
    console.log(props);
    console.log(props.match );
  }

  render() {
    return (
      <div>
      <h1>DETAIL HERO</h1>
      <p>{this.props.heros[this.props.match].localized_name}</p>
      <p>{this.props.heros[this.props.match].primary_attr}</p>
      <p>{this.props.heros[this.props.match].attack_type}</p>
      <Link to='/listchar'>Back</Link>
      </div>


    )
  }


}

export default detailHero;
