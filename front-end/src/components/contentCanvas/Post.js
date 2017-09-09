import React, { Component } from 'react'
import PostVoter from './PostVoter'
import TimeStamp from './TimeStamp'

class Post extends Component {

	handleContent() {
		if (this.props.content === undefined) {
			return (
				<div>
				</div>
			)
		}
		else {
		    const author = (this.props.content.author === null) ? "null" : this.props.content.author 
		    const date = (new Date(this.props.content.timestamp)).toLocaleString().substr(0, 17) 

			return (
				<div className="post-wraper">
					<TimeStamp
						author={author}
						date={date}
						className="post-stamp"
					/>
					<div className="post-content">
						<span>
							{this.props.content.body}
						</span>
					</div>
					<PostVoter
						className="post-voter"
					/>
				</div>
			)
		}
	}

	render () {
		return this.handleContent()
	}
}

export default Post