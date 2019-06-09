import React from 'react';

const PostShowPage =(props)=>{
		return(
			<div className="PostShowPage">
			<button onClick={props.viewAllPosts}>Back to menu</button>
			<h1>PostShowPage</h1>
				<img alt="woman in tech"src={props.post.photo_url} height="400"/><br/>
				<span>{props.post.f_name}</span><br/>
				<span>{props.post.l_name}</span><br/>
				<span>{props.post.category}</span><br/>
				<span>{props.post.title}</span><br/>
				<span>{props.post.body}</span><br/>
				<button onClick={props.getPostToEdit.bind(null, props.post)}>Edit</button>
				<button onClick={props.delete.bind(null, props.post)}>Delete</button><br/>
				{props.postMessage}
			</div>	
		)
	
}

export default PostShowPage;
