import React, { Component } from 'react'
import { connect } from 'react-redux'

class ChatTopic extends Component {

	handleTitle () {
		if (this.props.post === undefined) {
			return (
				<div>
				</div>
			)
		}
		else {
			return (
				<div className="chat-topic-wraper">
					<span className="chat-topic">{this.props.post.title}</span>
					<i className="chat-topic-menu"></i>
				</div>
			)
		}
	}

	render () {
		return (
			this.handleTitle()
		)
	}
}

function mapStateToProps ({ activePost }) {
	return {
		post: activePost.post
	}
}

function mapDispatchToProps (dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatTopic)