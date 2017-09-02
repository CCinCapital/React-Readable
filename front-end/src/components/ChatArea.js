import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Article from './Article'
import ArticleReply from './ArticleReply'

class ChatArea extends Component {

	render () {
		return (
			<div className="chatArea">
				<Article
				></Article>
				<ArticleReply
					reply={'looooooooooooooooooooooooooooooooooo0000000000000000000000000000000000000000000000000oooooog reply'}
				></ArticleReply>
				<ArticleReply
					reply={'short reply'}
				></ArticleReply>
				<div className="spacer-360px"></div>
			</div>
		)
	}
}

export default ChatArea