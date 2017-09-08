import React, { Component } from 'react'
import VoteComment from '../voteComment'

class Reply extends Component {

	render () {
		const timeStamp = JSON.stringify(new Date(this.props.comment.timestamp))

		return (
			<div className="article-reply-wraper"
			>
				<div className="">
					<span>
						{this.props.comment.author}
					</span>
					<span>
						{timeStamp}
					</span>
					<span
						onClick={() => (console.log('click'))}
					>
						Edit
					</span>
				</div>
				<div className="article-reply">
					<div className="article-reply-content">
						<p className="article-reply-plain">{this.props.comment.body}</p>
					</div>	
					<div className="article-reply-pointer"></div>
					<img className="article-reply-user-icon" alt="" src={require('../../resources/icon/user1.jpg')}></img>
				</div>
				<VoteComment
					comment={this.props.comment}
				/>
			</div>
		)
	}
}

export default Reply