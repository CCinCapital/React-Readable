import React, { Component } from 'react'
import Timestamp from '../timestamp'
import Vote from '../vote'

class Article extends Component {

	handleContent() {
		if (this.props.content === undefined) {
			return (
				<div>
				</div>
			)
		}
		else {
			return (
				<div className="article-wraper">
					<div className="article-content">
						<span>
							{this.props.content.body}
						</span>
					</div>
					<Timestamp/>
					<Vote/>
				</div>
			)
		}
	}

	render () {
		return this.handleContent()
	}
}

export default Article