import React from 'react';

const AllPosts =(props)=> {
	const postsToDisplay = props.posts
	const displayPosts = postsToDisplay.map((post,i)=>{
		return(
			<div key={i}>
				<li key={i} value={post}>
					<div className="AllPostsImageBox">
					<img alt="woman in tech"src={post.photo_url} height="200px"/><br/>
					</div>
					<div className="AllPostsDetailsBox">
					<span>{post.f_name}</span><br/>
					<span>{post.l_name}</span><br/>
					<span>{post.category}</span><br/>
					<span>{post.title}</span><br/>
					<span>{post.body}</span><br/>
					</div>
					<button className="viewButton" onClick={props.viewPost.bind(null, i)}>View</button><br/>
				</li><br/>
			</div>
		)
	});
	return(
		<div className="AllPosts">
		<h1>All Posts</h1>
		<ul>
			{displayPosts}
		</ul>
		</div>
	)
	
}

export default AllPosts;
