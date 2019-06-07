import React, {Component} from 'react';

class Register extends Component {
	constructor() {
		super()
		this.state = {
			username:'',
		    password:'',
		    email:'',
		    about:'',
		    message:''
		}
	}
	handleChange = (e) => {
		//console.log("handleChange was called");
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	handleSubmit = async (e) => {
		let parseResponse = null;
		try{
		console.log("handleSubmit was called");
		e.preventDefault();
		const regResponse = await fetch(process.env.REACT_APP_SERVER_URL + "/api/v1/users/register",{
			method:"POST",
			credentials: "include",
			body: JSON.stringify(this.state),
			headers: {
				"Content-Type":"application/Jason"
			}
		});
		parseResponse = await regResponse.json();
        //console.log(parseResponse);
        //console.log("user object:");
        //console.log(parseResponse.user);

        }catch(err){
			console.log(err);
		}
		//IF REGISTRATION SUCCESS STATE IS LIFTED TO APP.JS
		if(parseResponse.success){
		this.props.masterLogin(parseResponse.user.username, parseResponse.user.id)
		}
		//ELSE SHOW MESSAGE
		else if(parseResponse.success !== true){
			this.setState({
				message: parseResponse.message
			});
		}
	}
	render() {
		//console.log(this.state);
    return (
      <div className="Register">
        <h1>Register</h1>
	        <form onSubmit={this.handleSubmit}>
		        email:
		        <input type="email" name='email' onChange={this.handleChange}/><br/>
		        username: 
		        <input type="text" name='username' onChange={this.handleChange}/><br/>
		        password:
		        <input type="password" name='password'  onChange={this.handleChange}/><br/>
		        about:
		        <input type="text" name='about' onChange={this.handleChange}/><br/>
		        <h1>{this.state.message}</h1>
		        <button>Register</button>
	        </form>
      </div>
    );
  }
}


export default Register;

