import React, {Component} from 'react';
import Register from '../Register';
import Login from '../Login';
import Logout from '../Logout';
import CreatePost from '../CreatePost';
import AllPosts from '../AllPosts';
import PostShowPage from "../PostShowPage";

class HomePage extends Component {
	constructor(){
		super()
		this.state = {
			posts:[],
			PostShowPage: false,
			viewPost: {
				body: '',
				category: '',
				created_at: '',
				f_name: '',
				l_name: '',
				title: '',
				user_id: '',
				photo_url: '',
				id: ''
			}
		}
	}
	componentDidMount(){
		this.getAllPosts();
	}
	viewPost = (post) => {
		this.setState({
			PostShowPage: true,
			viewPost: {
				...post
			}
		})
	}
	
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
	render(){
		console.log(this.state.viewPost);
		return(
			<div className="App">
		        <Register masterLogin={this.props.masterLogin}/>
		        <Login masterLogin={this.props.masterLogin}/>
		        <CreatePost getCreatedPost={this.getCreatedPost}/>
		        <AllPosts viewPost={this.viewPost} posts={this.state.posts}/>
		        <PostShowPage post={this.state.viewPost}/>
		        <Logout masterLogout={this.props.masterLogout}/>
		    </div>
		)
	}
}


export default HomePage;
