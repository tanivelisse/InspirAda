import React, {Component} from 'react';

class CreatePost extends Component {
	constructor(){
		super();
		this.state = {
			photoUrl:'',
			firstName:'',
			lastName:'',
			category:'',
			title:'',
			body:''
		}
	}
	handleChange =(e)=>{
		console.log("create handleChange was called");
		this.setState({
			[e.target.name]: e.target.value
		});
	} 

	render(){
		console.log(this.state);
		return(
			<div>
				<h1>Create a Post</h1>
				<form>
					Photo URL:
					<input name="photoUrl" onChange={this.handleChange}/><br/>
					First name:
					<input name="firstName" onChange={this.handleChange}/><br/>
					Last name:
					<input name="lastName" onChange={this.handleChange}/><br/>
					Category:
					<select name="category" onChange={this.handleChange}>
						<option>Select a category</option>
						<option>The Mamas of Tech</option>
						<option>The Women of Tech</option>
						<option>The Future Women of Tech</option>
					</select><br/>
					Title:
					<input name="title" onChange={this.handleChange}/><br/>
					Share your thoughts here: 
					<textarea name="body=" onChange={this.handleChange}></textarea>
				</form>
			</div>
		)
	}
}

export default CreatePost;

