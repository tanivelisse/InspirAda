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
		console.log("handleSubmit was called");
		e.preventDefault();
		let parseResponse = null;
		if(this.state.username !== '' && this.state.password !== ''){
			try{
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
		}else{
			this.setState({
				message: "Please fill out all boxes"
			})
		}
	}
	render() {
		//console.log(this.state);
    return (
      <div className="Register">
	        <form onSubmit={this.handleSubmit}><br/>
		        email:
		        <br/>
		        <input 
		        	className="log-reg-input" 
		        	type="email" name='email' 
		        	onChange={this.handleChange}/>
		        <br/>
		        username: 
		        <br/>
		        <input 
			        className="log-reg-input" 
			        type="text" name='username' 
			        onChange={this.handleChange}/>
		        <br/>
		        password:
		        <br/>
		        <input 
		        	className="log-reg-input" 
		        	type="password" name='password'  
		        	onChange={this.handleChange}/>
		        <br/>
		        about:
		        <br/>
		        <input 
		        	className="log-reg-textarea" 
		        	type="text" name='about' 
		        	onChange={this.handleChange}/>
		        <br/>
		        <h4>{this.state.message}</h4>
		        <button>Register</button>
	        </form>
      </div>
    );
  }
}


export default Register;

