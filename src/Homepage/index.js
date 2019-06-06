import React, {Component} from 'react';
import Register from '../Register';
import Login from '../Login';
import Logout from '../Logout';
import AllPosts from '../AllPosts';

class HomePage extends Component {
	constructor(){
		super()
		this.state = {
			posts:[]
		}
	}
	componentDidMount(){
		this.getAllPosts()
	}
	//GET ALL POSTS
	getAllPosts = async()=>{
		console.log('getAllPosts was called');
		let parseResponse = null;
		try{
			const postsResponse = await fetch(process.env.REACT_APP_SERVER_URL + "/api/v1/users",{
				credentials: "include",
				headers: {
				"Content-Type":"application/Jason"
				}
			});
			parseResponse = await postsResponse.json();
        	console.log(parseResponse);

		}catch(err){
			console.log(err);
		}
		this.setState({
			posts: parseResponse
		})
	}
	render(){
		return(
			<div className="App">
		        <Register masterLogin={this.props.masterLogin}/>
		        <Login masterLogin={this.props.masterLogin}/>
		        <Logout masterLogout={this.props.masterLogout}/>
		        <AllPosts/>
		    </div>
		)
	}
}


export default HomePage;
