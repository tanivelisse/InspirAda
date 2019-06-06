import React, {Component} from 'react';
import Register from '../Register';
import Login from '../Login';
import Logout from '../Logout';
import CreatePost from '../CreatePost';
import AllPosts from '../AllPosts';

class HomePage extends Component {
	constructor(){
		super()
		this.state = {
			posts:[]
		}
	}
	componentDidMount(){
		this.getAllPosts();
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
		this.setState({
			posts: [...this.state.posts, newPost]
		})
		
	}
	render(){
		return(
			<div className="App">
		        <Register masterLogin={this.props.masterLogin}/>
		        <Login masterLogin={this.props.masterLogin}/>
		        <CreatePost getCreatedPost={this.getCreatedPost}/>
		        <AllPosts posts={this.state.posts}/>
		        <Logout masterLogout={this.props.masterLogout}/>
		    </div>
		)
	}
}


export default HomePage;
