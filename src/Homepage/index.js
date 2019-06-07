import React, {Component} from 'react';
import Collapsible from 'react-collapsible';
import Register from '../Register';
import Login from '../Login';
import Logout from '../Logout';
import CreatePost from '../CreatePost';
import AllPosts from '../AllPosts';
import PostShowPage from "../PostShowPage";
import EditPost from '../EditPost';

class HomePage extends Component {
	constructor(){
		super()
		this.state = {
			posts: [],
			postToShow: null,
			ShowPage: false,
			postToEdit:null,
		}
	}

	componentDidMount(){
		this.getAllPosts();
	}

	viewPost = (postIndex) => {
		this.setState({
			postToShow: postIndex,
		})
	}

	viewAllPosts = () => {
		this.setState({
			postToShow: null,
		})
	}

	getPostToEdit = (post) => {
		this.setState({
			postToEdit: post
		})
	}

	//GET ALL POSTS
	getAllPosts = async()=>{
		//console.log('getAllPosts was called');
 
		try{
			const postsResponse = await fetch(process.env.REACT_APP_SERVER_URL + "/api/v1/posts", {
				credentials: "include",
				headers: {
					"Content-Type":"application/Jason"
				}
			});
			let parseResponse = await postsResponse.json();
        	console.log(parseResponse.posts);

			this.setState({
				posts: parseResponse.posts
			})
		}catch(err){
			console.log(err);
		}
	}
	getCreatedPost = (newPost)=>{
		console.log(...this.state.posts);
		this.setState({
			posts: [...this.state.posts,newPost]
		})
		
	}


	updatePost = async (id, data) => {

		try{
			const updateResponse = await fetch(process.env.REACT_APP_SERVER_URL + "/api/v1/posts/edit/" + id ,{
				method:"PUT",
				credentials: "include",
				body: JSON.stringify(data),
				headers: {
					"Content-Type":"application/Jason"
				}
			});
			let parseResponse = await updateResponse.json();
	        console.log("user object:");
	        console.log(parseResponse);

	        ///// find index of post in array with id == id
	        const editedPostsArray = this.state.posts.map((post) => {

	        	if (post.id === parseResponse.post.id){
	        		return data 
	        	}
	        	return post
	        });
	        this.setState({
	        	posts: editedPostsArray,
	        	postToEdit:null

	        });

		}catch(err){
			console.log(err);
		}

	}


	deletePost = async(postId, e) =>{
		console.log("deletePost was called");
		e.preventDefault();
		try {
			const deleteResponse = await fetch(process.env.REACT_APP_SERVER_URL + "/api/v1/posts/" + postId, {
				method:"DELETE",
				credentials:"include"
			});
			await deleteResponse.json();
  			this.setState({
  				posts: this.state.posts.filter((post)=> post.id !== postId)
  			})
		}catch(err){
			console.log(err);
		}
		this.setState({
			postToShow: null
		})
	}
	
	render(){
		console.log("Homepage state:")
		console.log(this.state);
		return(
			<div className="App">
				
		        {
		        	this.props.loggedIn === true 
		        	? 
		        	null 
		        	: 
		        	<Collapsible trigger="Register">
		        	<Register masterLogin={this.props.masterLogin}/>
		        	</Collapsible>
		        }

		        <br/>
		        
		        
		        {
		        	this.props.loggedIn === true 
		        	? 
		        	null 
		        	: 
		        	<Collapsible trigger="Login">
		        	<Login masterLogin={this.props.masterLogin}/>
		        	</Collapsible>
		        }

		        <br/>

		        {
		        	this.props.loggedIn === false 
		        	? 
		        	null 
		        	: 
		        	<Logout masterLogout={this.props.masterLogout}/>
		    	}

		    	<br/>
		        	
		        {
		        	this.props.loggedIn === false 
		        	? 
		        	null 
		        	:
		        	<Collapsible trigger="Create a Post">
		        	<CreatePost getCreatedPost={this.getCreatedPost}/>
		        	</Collapsible>
		        }

		        <br/>

		        {
		        	this.state.postToShow === null 
		        	? 
		        	<AllPosts viewPost={this.viewPost} posts={this.state.posts}/> 
		        	: 
		        	null 
		    	} 
		        
		        {
		        	this.state.postToShow === null 
		        	? 
		        	null 
		        	: 
		        	<PostShowPage 
			        	post={this.state.posts[this.state.postToShow]} 
			        	getPostToEdit={this.getPostToEdit} 
			        	delete={this.deletePost}
			        	viewAllPosts={this.viewAllPosts}
		        	/> 
		        }

		        {
		        	this.state.postToEdit === null 
		        	? 
		        	null
		        	: 
		        	<EditPost 
			        	getPostToEdit={this.getPostToEdit} 
			        	post={this.state.postToEdit}
			        	updatePost={this.updatePost}
			        	getAllPosts={this.getAllPosts}
		        	/>
		        }
		        
		    </div>
		)
	}
}


export default HomePage;
