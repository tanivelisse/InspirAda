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
					<h2>{post.f_name} {post.l_name}</h2>
					<span>Post Category: {post.category}</span><br/>
					<span>Post Title: {post.title}</span><br/>
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
