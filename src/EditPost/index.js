import React, {Component} from 'react';

class EditPost extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			photo_url: props.post.photo_url,
			f_name: props.post.f_name,
			l_name:props.post.l_name,
			category:props.post.category,
			title:props.post.title,
			body:props.post.body	
		}
	}

	handleChange = (e) =>{
		console.log("edit handleChange was called");
		this.setState({
			[e.target.name]: e.target.value
		});
	} 
	
	handleSubmit = async(e) => {
		e.preventDefault();
		console.log("edit handleSubmit was called");
		this.props.updatePost(this.props.post.id, this.state)
		this.props.getAllPosts()
	}

	render(){
		console.log("state in edit");
		console.log(this.state);
		//console.log(this.props.post);
		return(
			<div className="EditPost">
				<form className="EditPostForm" onSubmit={this.handleSubmit}>
				<h1>Edit Your Post</h1>
					Photo URL:
					<input 
						className="log-reg-input"
						type="text" 
						name="photo_url" 
						onChange={this.handleChange} 
						value={this.state.photo_url}/>
					<br/>
					First name:
					<input 
						className="log-reg-input"
						type="text" name="f_name" 
						onChange={this.handleChange} 
						value={this.state.f_name}/>
					<br/>
					Last name:
					<input 
						className="log-reg-input"
						type="text" 
						name="l_name" 
						onChange={this.handleChange} 
						value={this.state.l_name}/>
					<br/>
					Category:
					<select 
						className="log-reg-input"
						type="text" 
						name="category" 
						onChange={this.handleChange} 
						value={this.state.category}>
						<option>Select a category</option>
						<option>Women in the History of Tech</option>
						<option>The Women of Tech</option>
						<option>The Future Women of Tech</option>
					</select><br/>
					Title:
					<input
					 	className="log-reg-input"
						type="text" name="title" 
						onChange={this.handleChange} 
						value={this.state.title}/>
					<br/>
					Share your thoughts here:
					<br/> 
					<textarea 
						className="log-reg-textarea"
						type="text" 
						name="body" 
						onChange={this.handleChange} 
						value={this.state.body}>
					</textarea>
					<br/>
					<button>Update</button>
				</form>
			</div>
		)
	}
}

export default EditPost;
