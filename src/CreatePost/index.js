import React, {Component} from 'react';

class CreatePost extends Component {
	constructor(){
		super();
		this.state = {
			photo_url:'',
			f_name:'',
			l_name:'',
			category:'',
			title:'',
			body:''
		}
	}
	handleChange = (e) =>{
		console.log("create handleChange was called");
		this.setState({
			[e.target.name]: e.target.value
		});
	} 
	handleSubmit = async(e) => {
		e.preventDefault();
		console.log("create handleSubmit was called");
		let parseResponse = null;
		try{
			const createResponse = await fetch(process.env.REACT_APP_SERVER_URL + "/api/v1/posts/new_post",{
				method:"POST",
				credentials: "include",
				body: JSON.stringify(this.state),
				headers: {
					"Content-Type":"application/Jason"
				}
			});
			parseResponse = await createResponse.json();
	        // console.log(parseResponse);
	        // console.log("user object:");
	        // console.log(parseResponse.post);
	        this.props.getCreatedPost(parseResponse.post);
		}catch(err){
			console.log(err);
		}

	}
	render(){
		//console.log(this.state);
		return(
			<div className="CreatePost">
				<h1>Create a Post</h1>
				<form onSubmit={this.handleSubmit}>
					Photo URL:
					<input name="photo_url" onChange={this.handleChange}/><br/>
					First name:
					<input name="f_name" onChange={this.handleChange}/><br/>
					Last name:
					<input name="l_name" onChange={this.handleChange}/><br/>
					Category:
					<select name="category" onChange={this.handleChange}>
						<option>Select a category</option>
						<option>Women in the History of Techi</option>
						<option>The Women of Tech</option>
						<option>The Future Women of Tech</option>
					</select><br/>
					Title:
					<input name="title" onChange={this.handleChange}/><br/>
					Share your thoughts here: 
					<textarea name="body=" onChange={this.handleChange}></textarea><br/>
					<button>Create</button>
				</form>
			</div>
		)
	}
}

export default CreatePost;

