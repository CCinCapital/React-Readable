import React, { Component } from 'react'
import CommentVoter from './CommentVoter'
import CommentBody from './CommentBody'
import TimeStamp from '../TimeStamp'
import MdImage from 'react-icons/lib/md/image'

class CommentFromLeft extends Component {

	render () {
	    const author = (this.props.comment.author === null) ? "anonymous" : this.props.comment.author 
	    const date = (new Date(this.props.comment.timestamp)).toLocaleString().substr(0, 17) 

		return (
			<div className="comment-wraper-left">
				<TimeStamp
					author={author}
					date={date}
					className="comment-stamp"
				/>
				<CommentVoter
					className="comment-voter"
					comment={this.props.comment}
				/>
				<MdImage
					size={30}
					color={'grey'}
				/>
				<div className="comment-pointer-left"></div>	
				<CommentBody
					comment={this.props.comment}
					className="comment-body-left"
				/>
			</div>
		)
	}
}

export default CommentFromLeft