import React, {Component} from 'react';
import './App.css';
import Homepage from './Homepage';
import {InlineShareButtons} from 'sharethis-reactjs';




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
        <div>
        <style dangerouslySetInnerHTML={{__html: `
          html, body {
            margin: 0;
            padding: 0;
            text-align: center;
          }
          h1 {
            font-size: 24px;
            font-weight: bold;
          }
          hr {
            margin-bottom: 40px;
            margin-top: 40px;
            width: 50%;
          }
        `}} />
        <InlineShareButtons
          config={{
            alignment: 'center',  // alignment of buttons (left, center, right)
            color: 'social',      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 16,        // font size for the buttons
            labels: 'cta',        // button labels (cta, counts, null)
            language: 'en',       // which language to use (see LANGUAGES)
            networks: [           // which networks to include (see SHARING NETWORKS)
              'whatsapp',
              'messenger',
              'facebook',
              'twitter'
            ],
            padding: 12,          // padding within buttons (INTEGER)
            radius: 4,            // the corner radius on each button (INTEGER)
            show_total: true,
            size: 40,             // the size of each button (INTEGER)
 
            // OPTIONAL PARAMETERS
            url:  "https://inpirada.herokuapp.com", // (defaults to current url)
            image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
            description: 'custom text',       // (defaults to og:description or twitter:description)
            title: 'InspirAda',            // (defaults to og:title or twitter:title)
            message: 'custom email text',     // (only for email sharing)
            subject: 'custom email subject',  // (only for email sharing)
            username: 'custom twitter handle' // (only for twitter sharing)
          }}
        />
      </div>
        
      <footer>
                <hr/>
                <p>Copy Right © TIMP 2019</p>
                <hr/>
      </footer>
             
      </div>
    );
  }
}

export default App;
