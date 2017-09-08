import React, { Component } from 'react'
import { connect } from 'react-redux'

class Timestamp extends Component {

	render () {
		const author = this.props.post.author
		const time = JSON.stringify(new Date(this.props.post.timestamp))
		return (
			<div>
				<span>By: {author} </span>
				<span>Last edit: {time}</span>
			</div>
		)
	}
}

function mapStateToProps ({ activePost }) {
	return {
		post: activePost.post,
	}
}

export default connect(mapStateToProps)(Timestamp)