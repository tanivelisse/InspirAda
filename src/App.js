import React, {Component} from 'react';
import './App.css';
import Homepage from './Homepage'



//APP.JS STATE IS USED TO RENDER REGISTER COMPONENT, LOGIN COMPONENT
class App extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      userId: null,
      loggedIn: false
    }
  }
  masterLogin = (username, userId) => {
    console.log("master login hit")
    this.setState({
      loggedIn: true,
      username: username,
      userId: userId
    });
  }
  render() {
  //console.log(`app js loggedIn state is ${this.state.loggedIn}`);
    return (
      <div className="App">
        <h1>InspirAda</h1>
        <Homepage masterLogin={this.masterLogin}/>
      </div>
    );
  }
}

export default App;
