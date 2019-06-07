import React from 'react';

const Comments = (props) => {
	const commentsToDisplay = props.comments
	const displayComments = commentsToDisplay.map((comment,i)=>{
		return(
				<div key={i}>
					<li key={i} value={comment}>
					
						<span>{comment.body}</span><br/>
				
					</li><br/>
				</div>
		)
	});
	return(
			<div>
			<h1>Comments</h1>
			{displayComments}
			</div>

		)
	
}

export default Comments;
