import React from 'react';

const PostShowPage =(props)=> {
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
		</div>	
	)
	
}

export default PostShowPage;
