import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReplyPanelActionBar from './ReplyPanelActionBar'
import { postComment, fetchCommentsUnderPost } from '../../actions'
import { uuid } from '../../utils/helper'

class ReplyPanel extends Component {

	state = {
		content: "Reply...",
	}

	handleInput = (e) => {
		this.setState({
			content: e.target.value,
		})
	}

	handleSubmit = (e) => {
		const id = uuid()
		const author = this.props.user
		const parentId = this.props.post.id
		const body = this.state.content
		const timestamp = Date.now()

		this.props.postComment({ id, timestamp, body, author, parentId })
		
		this.setState({
			content: "Reply...",
		})
	}

	replyPanel () {
		if (this.props.post === undefined) {
			return (
				<div>
				</div>
			)
		}
		else {
			return (
				<div className="reply-wraper">
					<ReplyPanelActionBar/>
					<div className="reply-content-wraper">
						<textarea 
							name="" 
							placeholder={this.state.content}
							className="reply-content"
							onChange={this.handleInput}
						></textarea>
					</div>
					<div className="reply-action">
						<span className="reply-description">Press Ctrl+Enter to start a new line</span>
						<button 
							className="reply-button"
							onClick={this.handleSubmit} 
						>Send</button>
					</div>
				</div>
			)			
		}
	}

	render () {
		return (
			this.replyPanel()
		)
	}
}

function mapStateToProps ({ user, activePost }) {
	return {
		user: user.user,
		post: activePost.post,
	}
}

function mapDispatchToProps (dispatch) {
	return {
		postComment: (data) => dispatch(postComment(data)),
		fetchCommentsUnderPost: (data) => dispatch(fetchCommentsUnderPost(data)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReplyPanel)