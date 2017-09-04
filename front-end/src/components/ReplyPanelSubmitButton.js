import React, { Component } from 'react'

class ReplyPanelSubmitButton extends Component {

	render () {
		return (
			<div className="reply-action">
				<span className="reply-description">Press Ctrl+Enter to start a new line</span>
				<a className="reply-button" href="">Send</a>
			</div>
		)
	}
}

export default ReplyPanelSubmitButton