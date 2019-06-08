import React, {Component} from 'react';
import Collapsible from 'react-collapsible';
import Register from '../Register';
import Login from '../Login';
import Logout from '../Logout';
import CreatePost from '../CreatePost';
import AllPosts from '../AllPosts';
import PostShowPage from "../PostShowPage";
import EditPost from '../EditPost';
import Comments from '../Comments';
import CreateComment from "../CreateComment";

// PENDING ABOUT COMPONENT
// PENDING CONTACT COMPONENT
// PENDING SEARCH BAR
// PENDING FILTER OPTIONS comming soon on a streach
// PENDING USER PROFILE COMPONENT
// MAKE CREATE COLLAPSE
// ADJUST PICTURE SIZE IN SHOW PAGE

class HomePage extends Component {
	constructor(){
		super()
		this.state = {
			posts: [],
			postToShowIndex: null,
			ShowPage: false,
			postToEdit:null,
			comments:[],
			message:''
		}
	}

	componentDidMount(){
		this.getAllPosts();
	}

	viewPost = (postIndex) => {
		this.setState({
			postToShowIndex: postIndex,
		})
		this.getComments(this.state.posts[postIndex])
	}

	viewAllPosts = () => {
		this.setState({
			postToShowIndex: null,
		})
	}

	getPostToEdit = (post) => {
		//if post belongs to logged in user,
		//then set state to open edit "modal"
		if(this.props.userId === post.user_id){
			this.setState({
				postToEdit: post
			})
		} 
		//otherwise, send user a message
		else {
			this.setState({
				message:"Unable to Edit Post"
			})
		}
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
		//console.log(...this.state.posts);
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

	deletePost = async(postToDelete, e) =>{
		console.log("deletePost was called");
		e.preventDefault();
		if(this.props.userId === postToDelete.user_id){
			try {
				const deleteResponse = await fetch(process.env.REACT_APP_SERVER_URL + "/api/v1/posts/" + postToDelete.id, {
					method:"DELETE",
					credentials:"include"
				});
				await deleteResponse.json();
	  			this.setState({
	  				posts: this.state.posts.filter((post)=> post.id !== postToDelete.id)
	  			})
			}catch(err){
				console.log(err);
			}
			this.setState({
				postToShow: null
			})
		}
		else {
			this.setState({
				message:"Unable to Delete Post"
			});
		}
	}

	//GET ALL COMMENTS FOR POST TO SHOW

	getComments = async(post)=>{
		console.log("getComments was called");
		console.log('post.id');
		console.log(post.id);
		try{
			const commentsResponse = await fetch(process.env.REACT_APP_SERVER_URL + "/api/v1/posts/comments/" + post.id,{
				credentials: "include",
				headers: {
					"Content-Type":"application/Jason"
				}
			});
			let parseResponse = await commentsResponse.json()

			this.setState({
				comments: parseResponse.comments
			})


		}catch(err){
			console.log(err);
		}

	}

	//GET CREATED COMMENT FROM CREATECOMMENT COMPONENT

	getCreatedComment = (newComment)=>{
		//console.log(...this.state.comments);
		this.setState({
			comments: [...this.state.comments, newComment]
		})
		
	}

	//DELETE COMMENT
	
	deleteComment = async(commentId, e)=>{
		console.log("deleteComment was called");
		e.preventDefault();

		
			try {
				const deleteCommentResponse = await fetch(process.env.REACT_APP_SERVER_URL + "/api/v1/posts/comments/" + commentId, {
					method:"DELETE",
					credentials:"include"
				});
				await deleteCommentResponse.json();
	  			this.setState({
	  				comments: this.state.comments.filter((comment)=> comment.id !== commentId)
	  			})
			}catch(err){
				console.log(err);
			}
			this.setState({
				postToShow: null
			})

	}
	
	
	render(){
		console.log("Homepage comments state:")
		console.log(this.state.comments);
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
		        	<Collapsible trigger="Click to Create a Post" triggerWhenOpen="Click Again to Close">
		        	<CreatePost getCreatedPost={this.getCreatedPost}/>
		        	</Collapsible>
		        }

		        <br/>

		        {
		        	this.state.postToShowIndex === null 
		        	? 
		        	<AllPosts viewPost={this.viewPost} posts={this.state.posts}/> 
		        	: 
		        	null 
		    	} 
		        
		        {
		        	this.state.postToShowIndex === null 
		        	? 
		        	null 
		        	:
		        	<div> 
		        	<PostShowPage 
			        	post={this.state.posts[this.state.postToShowIndex]} 
			        	message={this.state.message}
			        	getPostToEdit={this.getPostToEdit} 
			        	delete={this.deletePost}
			        	viewAllPosts={this.viewAllPosts}
		        	/> 
		        	<Comments comments={this.state.comments} delete={this.deleteComment}/>
		        	<CreateComment post={this.state.posts[this.state.postToShowIndex]} getCreatedComment={this.getCreatedComment} />
		        	</div>
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
