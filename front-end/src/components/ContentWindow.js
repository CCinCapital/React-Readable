import React, { Component } from 'react'
import ChatTopic from './chatArea/ChatTopic'
import ChatArea from './chatArea/ChatArea'
import ReplyPanel from './ReplyPanel'

class ContentWindow extends Component {

	render () {
		return (
			<div>
				<ChatTopic/>
				<ChatArea/>
				<ReplyPanel/>
			</div>
		)
	}
}

export default ContentWindow