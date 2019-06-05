import React, {Component} from 'react';
import './App.css';
import Register from './Register';


//APP.JS STATE IS USED TO RENDER REGISTER COMPONENT, LOGIN COMPONENT
class App extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      loggedIn: false
    }
  }
  render() {
    return (
      <div className="App">
        <h1>InspirAda</h1>
        <Register/>
      </div>
    );
  }
}

export default App;
