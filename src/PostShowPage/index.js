import React from 'react';

const PostShowPage =(props)=>{
			console.log("props.post");
			console.log(props.post);
		return(
			<div className="PostShowPage">
				<div className="Post">
				<h1>{props.post.f_name} {props.post.l_name}</h1>
					<img className="post-img" alt="woman in tech"src={props.post.photo_url} height="400"/><br/>
					<h4>Category: {props.post.category}</h4>
					<h4>Post Title: {props.post.title}</h4>
					<h4>Post by: {props.post.user_username}</h4>
					<p className="post-body">{props.post.body}</p><br/>
					<span onClick={props.getPostToEdit.bind(null, props.post)}>Edit |</span>
					<span onClick={props.delete.bind(null, props.post)}>Delete</span><br/>
					{props.postMessage}
				</div>
			</div>	
		)
	
}

export default PostShowPage;
