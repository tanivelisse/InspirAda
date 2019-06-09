import React, {Component} from 'react';
import './App.css';
import Homepage from './Homepage';




//APP.JS STATE IS USED TO RENDER REGISTER COMPONENT, LOGIN COMPONENT
class App extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      userId: null,
      loggedIn: false,
      userPosts: []
    }
  }

  masterLogin = (username, userId, userPosts) => {
    console.log("master login hit")
    this.setState({
      loggedIn: true,
      username: username,
      userId: userId,
      userPosts: userPosts
    });
  }

  masterLogout = () => {
    this.setState({
      loggedIn: false,
    });
  }

  render() {
  console.log(`app js loggedIn state is ${this.state.loggedIn}`);
    return (
      <div className="App">
        <Homepage loggedIn={this.state.loggedIn} 
        username={this.state.username} 
        userId={this.state.userId}
        userPosts={this.state.userPosts}
        masterLogin={this.masterLogin} 
        masterLogout={this.masterLogout}
        />
      </div>
    );
  }
}

export default App;
