import React, {Component} from 'react';
import Register from '../Register';
import Login from '../Login';
import Logout from '../Logout';

class HomePage extends Component {
	render(){
		return(
			<div className="App">
		        <Register masterLogin={this.props.masterLogin}/>
		        <Login masterLogin={this.props.masterLogin}/>
		        <Logout masterLogout={this.props.masterLogout}/>
		    </div>
		)
	}
}


export default HomePage;
