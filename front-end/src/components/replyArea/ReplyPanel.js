import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReplyPanelActionBar from './ReplyPanelActionBar'
import ReplyPanelInputArea from './ReplyPanelInputArea'
import ReplyPanelSubmitButton from './ReplyPanelSubmitButton'

class ReplyPanel extends Component {

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
					<ReplyPanelActionBar
					></ReplyPanelActionBar>
					<ReplyPanelInputArea
					></ReplyPanelInputArea>
					<ReplyPanelSubmitButton
					></ReplyPanelSubmitButton>
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

function mapStateToProps ({ activePost }) {
	return {
		post: activePost.post,
	}
}

export default connect(mapStateToProps)(ReplyPanel)