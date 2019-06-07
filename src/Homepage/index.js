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
	getPostToEdit = (post) => {
		this.setState({
			postToEdit: post
		})
	}
	//get edited post to update here or in Show Page? 
	//If ShowPage I will need to make a smart component for show page
	//GET ALL POSTS
	getAllPosts = async()=>{
		console.log('getAllPosts was called');
		let parseResponse = null;
		try{
			const postsResponse = await fetch(process.env.REACT_APP_SERVER_URL + "/api/v1/posts",{
				credentials: "include",
				headers: {
				"Content-Type":"application/Jason"
				}
			});
			parseResponse = await postsResponse.json();
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
	deletePost = async(postId, e) =>{
		console.log("deletePost was called");
		e.preventDefault();
		try{
			const deleteResponse = await fetch(process.env.REACT_APP_SERVER_URL + "/api/v1/posts/" + postId, {
				method:"DElETE",
				credentials:"include"
			});
			await deleteResponse.json();
  			this.setState({
  				posts: this.state.posts.filter((post)=> post.id !== postId)
  			})
		}catch(err){
			console.log(err);
		}
	}
	
	render(){
		//console.log(this.state.viewPost);
		return(
			<div className="App">
				
		        {this.props.loggedIn === true ? null : 
		        	<Collapsible trigger="Register">
		        	<Register masterLogin={this.props.masterLogin}/>
		        	</Collapsible>}<br/>
		        
		        
		        {this.props.loggedIn === true ? null : 
		        	<Collapsible trigger="Login">
		        	<Login masterLogin={this.props.masterLogin}/>
		        	</Collapsible>}<br/>

		        {this.props.loggedIn === false ? null : <Logout masterLogout={this.props.masterLogout}/>}<br/>
		        	
		        {this.props.loggedIn === false ? null :
		        	<Collapsible trigger="Create a Post">
		        	<CreatePost getCreatedPost={this.getCreatedPost}/>
		        	</Collapsible>}<br/>
		        {this.state.postToShow === null ? <AllPosts viewPost={this.viewPost} posts={this.state.posts}/> : null } 
		        {this.state.postToShow === null ? null : <PostShowPage post={this.state.posts[this.state.postToShow]} getPostToEdit={this.getPostToEdit} delete={this.deletePost}/> }
		        {this.state.postToEdit === null ? null: <EditPost getPostToEdit={this.getPostToEdit} post={this.state.postToEdit}/>}
		        
		    </div>
		)
	}
}


export default HomePage;
