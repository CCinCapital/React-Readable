import React, { Component } from 'react'
import PostTitleBar from './contentCanvas/PostTitleBar'
import Canvas from './contentCanvas/Canvas'
import ReplyPanel from './replyPanel/ReplyPanel'

class ContentWindow extends Component {

	render () {
		return (
			<div>
				<PostTitleBar/>
				<Canvas/>
				<ReplyPanel/>
			</div>
		)
	}
}

export default ContentWindow