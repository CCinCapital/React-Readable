import React, { Component } from 'react'
import ReplyPanelActionBar from './ReplyPanelActionBar'
import ReplyPanelInputArea from './ReplyPanelInputArea'
import ReplyPanelSubmitButton from './ReplyPanelSubmitButton'

class ReplyPanel extends Component {

	render () {
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

export default ReplyPanel