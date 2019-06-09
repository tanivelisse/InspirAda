import React, {Component} from 'react';

class UserProfile extends Component {
	render(){
		const userPostsToDisplay = this.props.userPosts.map((post,i) =>{
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
					<button className="viewButton" onClick={this.props.viewPost.bind(null, i)}>View</button><br/>
				</li><br/>
				</div>
			)
		})
		return(
			<div>
				<h1>Username: {this.props.username}</h1>
				
				<h2> Your posts </h2>
				{userPostsToDisplay}
			</div>
		)
	}
}


export default UserProfile;
