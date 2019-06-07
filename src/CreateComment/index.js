import React, {Component} from 'react';

class CreateComment extends Component {
	constructor(){
		super();
		this.state= {
			body:''
		}
	}
	handleChange = (e) => {
		console.log("Comment Create handleChange called");
		this.setState({
			body: e.target.value
		})
	}
	handleSubmit = async(e) => {
		 console.log("Comment Create handleSubmit called");
		e.preventDefault();
		
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
	        	body:null
	        })

		}catch(err){
			console.log(err);
		}

	}

	render(){
		console.log('created comment');
		console.log(this.state);
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					Add Comment:
					<br/><textarea name="body" onChange={this.handleChange}></textarea>
					<button>add</button>
				</form>
			</div>
		)
	}
}

export default CreateComment;