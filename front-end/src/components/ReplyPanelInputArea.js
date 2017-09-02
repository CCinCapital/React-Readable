import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ReplyPanelInputArea extends Component {

	render () {
		return (
			<div className="reply-content-wraper">
				<textarea name="" placeholder="Reply..." className="reply-content"></textarea>
			</div>
		)
	}
}

export default ReplyPanelInputArea