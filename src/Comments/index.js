import React from 'react';

const Comments = (props) => {

	const commentsToDisplay = props.comments

	const displayComments = commentsToDisplay.map((comment,i)=>{
		return(
				<div key={i} className="comment-box">
					<li key={i} value={comment}>
					
						<span>{comment.body}</span><br/>
						<span>Comment by:{comment.user_username}</span><br/>
						<button onClick={props.delete.bind(null, comment)}>Delete</button><br/>
						{props.commentMessage}
					</li><br/>

				</div>
		)
	});
	return(
			<div className="AllComments">
			<h1>Comments</h1>
			{displayComments}
			</div>

		)
	
}

export default Comments;
