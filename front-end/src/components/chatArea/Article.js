import React, { Component } from 'react'

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
				</div>
			)
		}
	}

	render () {
		return this.handleContent()
	}
}

export default Article