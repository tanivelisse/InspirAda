import React, {Component} from 'react';

class CreateComment extends Component {
	constructor(){
		super();
		this.state= {
			body:" "
		}
	}
	handleChange = (e) => {
		console.log("Comment Create handleChange called");
		this.setState({
			body: e.target.value,
			message:''
		})
	}
	handleSubmit = async(e) => {
		 console.log("Comment Create handleSubmit called");
		e.preventDefault();

		if(this.props.loggedIn === true) {
			try{
				const createResponse = await fetch(process.env.REACT_APP_SERVER_URL + "/api/v1/posts/comments/new_comment/" + this.props.post.id,{
					method:"POST",
					credentials: "include",
					body: JSON.stringify(this.state),
					headers: {
						"Content-Type":"application/Jason"
					}
				});
				let parseResponse = await createResponse.json();

		        console.log(parseResponse);

		        this.props.getCreatedComment(parseResponse.comment);
		        this.setState({
		        	body:" "
		        })

			}catch(err){
				console.log(err);
			}
		} else {
			this.setState({
				message:"Unable to Add Comment"
			})
		}
	}

	render(){
		console.log('created comment');
		console.log(this.state);
		return(
			<div className="CreateComment">
				<form onSubmit={this.handleSubmit}>
					Add Comment:
					<br/><textarea 
							className="create-comment-box" 
							name="body" onChange={this.handleChange} 
							value={this.state.body}>
						</textarea><br/>
					<button>Add</button>
					{this.state.message}
				</form>
			</div>
		)
	}
}

export default CreateComment;