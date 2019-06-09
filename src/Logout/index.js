import React, {Component} from 'react';

class Logout extends Component {
	handleSubmit = async (e)=>{
		console.log("handleSubmit logout");
		e.preventDefault();
		let parseResponse = null;
		try {
			const logoutResponse = await fetch(process.env.REACT_APP_SERVER_URL + "/api/v1/users/logout",{
				credentials: "include",
				headers: {
				"Content-Type":"application/Jason"
				}
			});

		parseResponse = await logoutResponse.json();
        console.log(parseResponse);

		}catch(err){
			console.log(err);
		}
		this.props.masterLogout();
	}
	render() {
		return(
			<div className="Logout">
				
					<br/><h1 onClick={this.handleSubmit} id="logoutButton">Logout</h1>
				
			</div>
		)
	}
}


export default Logout;