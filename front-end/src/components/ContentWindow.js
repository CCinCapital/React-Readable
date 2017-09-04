import React, { Component } from 'react'
import ChatTopic from './ChatTopic'
import ChatArea from './ChatArea'
import ReplyPanel from './ReplyPanel'

class ContentWindow extends Component {

	render () {
		return (
			<div>
				<ChatTopic
				></ChatTopic>
				<ChatArea
				></ChatArea>
				<ReplyPanel
				></ReplyPanel>
			</div>
		)
	}
}

export default ContentWindow