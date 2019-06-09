import React, {Component} from 'react';

class AllPosts extends Component {
	constructor(props){
		super(props);
		this.state = {
			filteredPosts:[],
			noMatchMessage:''
		}
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
  		this.setState({
   			filteredPosts: this.props.posts
  		});
	}

	componentWillReceiveProps(nextProps) {
  		this.setState({
    		filteredPosts: nextProps.posts
  		});
	}

	handleChange =(e)=>{
		// variable to hold all the posts available
		let currentPostsList = [];
		//variable to hold the filtered posts list
		let newPostsList = [];
		//if the search bar is not empty 
		if(e.target.value !== ""){
			//assign all the posts available to currentPostsList
			currentPostsList = this.props.posts

			console.log(currentPostsList);	
			// Use .filter() to determine which posts should be displayed
            // based on the search terms
            newPostsList = currentPostsList.filter((onePost) => {
            	console.log("calling newPostsList list");
            	console.log(onePost);
            	//variable to store term
            	const filter = e.target.value
            	//variable to store matching post with term 
            	let match = null
            	//search to see if the current post includes the search term 
            	//if it does it will be added to newPostsList
            	if(onePost.f_name.includes(filter) || onePost.l_name.includes(filter)){
            		match = onePost
            	}
				return match
            })

		} else {
			//if the search bar is empty set newPostsList to all posts with props
			newPostsList = this.props.posts
		}
		//set the filtered state base on what is on new post list
		this.setState({
			filteredPosts: newPostsList
		})
		//pending message
		if (newPostsList === []){
			this.setState({
				noMatchMessage: "No results match that query"
			})
		}		
	}
	render(){
		console.log("this.state.filtered");
		console.log(this.state.filteredPosts);
		const postsToDisplay = this.state.filteredPosts
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
					<span>Post By: {post.user_username}</span><br/>
					</div>
					<button className="viewButton" onClick={this.props.viewPost.bind(null, i)}>View</button><br/>
				</li><br/>
				</div>
			)
		});
		return(

			<div className="AllPosts">
			
	    		<input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
	   			 		
				<h1>All Posts</h1>

				<ul>
					{displayPosts}
				</ul>
				{this.state.noMatchMessage}
			</div>
		)
	}	
}

export default AllPosts;
