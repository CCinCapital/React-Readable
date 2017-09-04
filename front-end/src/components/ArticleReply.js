import React, { Component } from 'react'

class ArticleReply extends Component {

	render () {
		return (
			<div className="article-reply-wraper">
				<div className="article-reply">
					<div className="article-reply-content">
						<p className="article-reply-plain">{this.props.reply}</p>
					</div>	
					<div className="article-reply-pointer"></div>
					<img className="article-reply-user-icon" alt="" src={require('../resources/icon/user1.jpg')}></img>
				</div>
			</div>
		)
	}
}

export default ArticleReply