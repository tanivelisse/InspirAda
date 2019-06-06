import React from 'react';

const AllPosts =(props)=> {
	const postsToDisplay = props.posts
	const displayPosts = postsToDisplay.map((post,i)=>{
		return(
			
				<li key={i} value={post}>
					<img alt="woman in tech"src={post.photo_url}/><br/>
					<span>{post.f_name}</span><br/>
					<span>{post.l_name}</span><br/>
					<span>{post.category}</span><br/>
					<span>{post.title}</span><br/>
					<span>{post.body}</span><br/>
					<button onClick={props.viewPost.bind(null, post)}>View</button>
				</li>
		
		)
	});
	return(
		<div className="AllPosts">
		<h1>All Posts</h1>

		{displayPosts}
		
		</div>
	)
	
}

export default AllPosts;
