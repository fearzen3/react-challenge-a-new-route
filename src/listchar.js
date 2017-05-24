import React, { Component } from 'react';
import axios from 'axios';
import ListHeroes from './listHeroes'
import DetailHero from './detailHero'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,

} from 'react-router-dom';

class App extends Component {

 constructor(props){
  super(props)
  this.state={
    heroes : []
  }
 }

  componentWillMount(){
    let self = this
  axios.get('https://api.opendota.com/api/heroStats')
  .then(function (response) {
    console.log(response.data);
    self.setState({heroes : response.data})

  })
  .catch(function (error) {
    console.log(error);
  });
}


  render() {

    return (
      <Switch>
        <Route exact path='/listchar' component={()=> <ListHeroes  heros={this.state.heroes}/>} />
        <Route path='/listchar/:id' component={(props)=> <DetailHero  match={props.match.params.id} heros={this.state.heroes} />} />
      </Switch>
    )
  }

  componentDidMount(){

}
}

export default App;
// <Route path='/roster/:number' component={Player}/> ListHeroes {...props}
// <ListHeroes  heros={this.state.heroes}/>
