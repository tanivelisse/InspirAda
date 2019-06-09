import React, {Component} from 'react';

class Login extends Component {
	constructor(){
		super();
		this.state = {
			username: '',
			password: '',
			message:''
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
		e.preventDefault();
		try {
			const logResponse = await fetch(process.env.REACT_APP_SERVER_URL + "/api/v1/users/login",{
			method:"POST",
			credentials: "include",
			body: JSON.stringify(this.state),
			headers: {
				"Content-Type":"application/Jason"
			}
		});
		parseResponse = await logResponse.json();
        // console.log(parseResponse);
        console.log("user posts:");
        console.log(parseResponse.user, parseResponse.user_posts);

		}catch(err){
			console.log(err);
		}

		//IF LOGGED IN STATE IS LIFTED TO APP.JS
		if(parseResponse.success){
			this.props.masterLogin(parseResponse.user.username, parseResponse.user.id, parseResponse.user_posts)
		}
		//ELSE SHOW MESSAGE
		else if(parseResponse.success !== true){
			this.setState({
				message: parseResponse.message
			});
		}
	}
	render(){
		return(
			<div className="Login">
				<form onSubmit={this.handleSubmit}>
					username: 
			        <input type="text" name='username' onChange={this.handleChange}/><br/>
			        password:
			        <input type="password" name='password'  onChange={this.handleChange}/><br/>
			        <h1>{this.state.message}</h1>
			        <button>Login</button>
				</form>
			</div>
		)
	}


}


export default Login;


