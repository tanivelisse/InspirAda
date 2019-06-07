import React, {Component} from 'react';

class EditPost extends Component {
	constructor(){
		super();
		this.state = {
			postToEdit: {
				photo_url:'',
				f_name:'',
				l_name:'',
				category:'',
				title:'',
				body:''
			}
		}
	}
	handleChange = (e) =>{
		console.log("create handleChange was called");
		this.setState({
			...this.state.postToEdit,
			[e.target.name]: e.target.value
		});
	} 
	//handleSubmit does the edit fetch call
	handleSubmit = async(e) => {
		e.preventDefault();
		console.log("edit handleSubmit was called");
		let parseResponse = null;
		try{
			const updateResponse = await fetch(process.env.REACT_APP_SERVER_URL + "/api/v1/posts/edit/" + this.props.post.id ,{
				method:"PUT",
				credentials: "include",
				body: JSON.stringify(this.state),
				headers: {
					"Content-Type":"application/Jason"
				}
			});
			parseResponse = await updateResponse.json();
	        console.log(parseResponse);
	        console.log("user object:");
	        console.log(parseResponse.post);

		}catch(err){
			console.log(err);
		}

	}
	render(){
		console.log("state in edit");
		console.log(this.state);
		//console.log(this.props.post);
		return(
			<div className="EditPost">
				<h1>Edit Your Post</h1>
				<form onSubmit={this.handleSubmit}>
					Photo URL:
					<input type="text" name="photo_url" onChange={this.handleChange} value={this.props.post.photo_url}/><br/>
					First name:
					<input type="text" name="f_name" onChange={this.handleChange} value={this.props.post.f_name}/><br/>
					Last name:
					<input type="text" name="l_name" onChange={this.handleChange} value={this.props.post.l_name}/><br/>
					Category:
					<select type="text" name="category" onChange={this.handleChange} value={this.props.post.category}>
						<option>Select a category</option>
						<option>Women in the History of Tech</option>
						<option>The Women of Tech</option>
						<option>The Future Women of Tech</option>
					</select><br/>
					Title:
					<input type="text" name="title" onChange={this.handleChange} value={this.props.post.title}/><br/>
					Share your thoughts here: 
					<textarea type="text" name="body" onChange={this.handleChange} value={this.props.post.body}></textarea><br/>
					<button>Update</button>
				</form>
			</div>
		)
	}
}

export default EditPost;
