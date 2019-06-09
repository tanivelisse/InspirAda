import React from 'react';

const About = ()=>{
	
	return(
		<div className="About">
			<div >
			<h2>What is InspirAda?</h2>
				<p className="about-text"> 
					Is a digital space for users to 
				    find and share blog posts of inspiring  
				    women from the tech industry.
				</p>
			</div>

			<div>
			<h2>Why I created InspirAda?</h2>
				
				<p className="about-text"> 
				   	I want more women and girls to feel motivated to pursue
				   	careers in Tech.  
			   	</p>
			</div>

			<div>
			<h2>The Name</h2>
				<p className="about-text"> 
					InspirAda is a word play between the word "inspirada" a  
					Spanish adjective that means inspired women and "Ada" 
					for Ada Lovelace who is considered one of the first
					computer programmers.
					Ada is also my biggest inspiration for this project.
				</p>
			</div>

			<div>
			<h2>The Developer</h2>
				<img id="dev-pic" src="https://i.imgur.com/iySuNFit.jpg?1" alt="InspirAda Developer"/>
				<div className="about-text">
					<p>
						From the Jet-life to the Dev-life. 
						Former world traveling Flight Attendant pursuing 
						a new career as Software Engineer. I decided to 
						switch careers because I strongly believe you need 
						to be the change you want to see in the world and 
						I think this world needs more women engineers. 
					</p>
					<h4> Contact Information: tanivelisse@gmail.com </h4>

				</div>
				<br/>
			</div> 

		</div>
	)

}
export default About;