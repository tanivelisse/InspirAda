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
			body:'',
			message:''
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
		if(	
			this.state.photo_url !== ""
			&&
			this.state.f_name !== ""
			&&
			this.state.l_name !== ""
			&& 
			this.state.category !== ""
			&&
			this.state.title !== ""
			&&
			this.state.body !== ""
		) {

			try{
				const createResponse = await fetch(
					process.env.REACT_APP_SERVER_URL + "/api/v1/posts/new_post",
					{
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
		        this.setState({
					photo_url:'',
					f_name:'',
					l_name:'',
					category:'',
					title:'',
					body:''
			});
			}catch(err){
				console.log(err);
			}
		}else{
			this.setState({
				message: "Please fill out all boxes"
			})
		}

	}
	render(){
		//console.log(this.state);
		return(
			<div className="CreatePost">
				<form onSubmit={this.handleSubmit}>
				<br/>
					Photo URL:
					<input 
						className="log-reg-input" 
						name="photo_url" 
						onChange={this.handleChange} 
						value={this.state.photo_url}/><br/>
					First name:
					<input 
					className="log-reg-input" 
					name="f_name" onChange={this.handleChange} 
					value={this.state.f_name}/>
					<br/>
					Last name:
					<input 
						className="log-reg-input" 
						name="l_name" onChange={this.handleChange} 
						value={this.state.l_name}/>
					<br/>
					Category:
					<select 
						className="log-reg-input" 
						name="category" 
						onChange={this.handleChange} 
						value={this.state.category}>
							<option>Select a category</option>
							<option>Women in the History of Tech</option>
							<option>The Women of Tech</option>
							<option>The Future Women of Tech</option>
					</select>
					<br/>
					Title:
					<input 
						className="log-reg-input" 
						name="title" 
						onChange={this.handleChange} 
						value={this.state.title}/>
					<br/>
					Share your thoughts here: 
					<br/>
					<textarea 
						className="log-reg-textarea" 
						name="body" onChange={this.handleChange} 
						value={this.state.body} 
						placeholder="Click bottom right corner to expand">
					</textarea>
					<br/>
					<button>Create</button>
					<h4>{this.state.message}</h4>
				</form>
			</div>
		)
	}
}

export default CreatePost;

