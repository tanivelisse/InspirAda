import React, {Component} from 'react';

class Login extends Component {
	constructor(){
		super();
		this.state = {
			username: '',
			password: ''
		}
	}
	handleChange = (e) => {
		console.log("handleChange login was called");
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	handleSubmit = async (e) => {
		console.log("handleSubmit login was called");
		let parseResponse = null;
		try {
			console.log("handleSubmit was called");
			e.preventDefault();
			const logResponse = await fetch(process.env.REACT_APP_SERVER_URL + "/api/v1/users/login",{
			method:"POST",
			credentials: "include",
			body: JSON.stringify(this.state),
			headers: {
				"Content-Type":"application/Jason"
			}
		});
		parseResponse = await logResponse.json();
        console.log(parseResponse);
        console.log("user object:");
        console.log(parseResponse.user);

		}catch(err){
			console.log(err);
		}
		//STATE IS LIFTED TO APP.JS
		this.props.masterLogin(parseResponse.user.username, parseResponse.user.id)
	}
	render(){
		return(
			<div className="Login">
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					username: 
			        <input type="text" name='username' onChange={this.handleChange}/><br/>
			        password:
			        <input type="password" name='password'  onChange={this.handleChange}/><br/>
			        <button>Login</button>
				</form>
			</div>
		)
	}


}


export default Login;