import React from 'react';

const PostShowPage =(props)=> {
	//pending navigation for Back to Menu Button 
	return(
		<div className="PostShowPage">
		<h1>PostShowPage</h1>
			<img alt="woman in tech"src={props.post.photo_url}/><br/>
			<span>{props.post.f_name}</span><br/>
			<span>{props.post.l_name}</span><br/>
			<span>{props.post.category}</span><br/>
			<span>{props.post.title}</span><br/>
			<span>{props.post.body}</span><br/>
			<button>Back to menu</button>
			<button onClick={props.getPostToEdit.bind(null,props.post)}>Edit</button>
			<button onClick={props.delete.bind(null, props.post.id)}>Delete</button>
		</div>	
	)
	
}

export default PostShowPage;
