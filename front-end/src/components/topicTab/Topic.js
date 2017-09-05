import React, { Component } from 'react'
import { activePost } from '../../actions'
import { connect } from 'react-redux'

class Topic extends Component {

	render () {
		return (
			<div className="topic-wraper"
				onClick={() => (this.props.activePost(this.props.post))}
			>
				<img className="topic-icon" alt="" src={require('../../resources/icon/user2.jpg')}
				></img>
				<div className="topic">
					<span className="topic-title">{this.props.post.title}</span>
					<span className="topic-latest-reply">{this.props.post.body}</span>
				</div>
				<div className="topic-new-reply"></div>
			</div>
		)
	}
}

function mapStateToProps () {
	return {
	}
}

function mapDispatchToProps (dispatch) {
    return {
        activePost: (data) => dispatch(activePost(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic)