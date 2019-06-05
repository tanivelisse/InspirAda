import React, {Component} from 'react';

class Register extends Component {
	constructor() {
		super()
		this.state = {
			username:'',
		      password:'',
		      email:'',
		      about:''
		}
	}
	handleChange() {
		console.log("handleChange was called");
	}
	render() {
    return (
      <div className="Register">
        <h1>Register</h1>
	        <form>
	        email:
	        <input type="email" name='email' onChange={this.handleChange}/><br/>
	        username: 
	        <input type="text" name='username' onChange={this.handleChange}/><br/>
	        password:
	        <input type="password" name='password'  onChange={this.handleChange}/><br/>
	        about:
	        <input type="text" name='username' onChange={this.handleChange}/><br/>
	        <button>Register</button>
	        </form>

        
      </div>
    );
  }
}


export default Register;

