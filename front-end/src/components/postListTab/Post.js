import React, { Component } from 'react'
import { activePost } from '../../actions'
import { connect } from 'react-redux'

class Post extends Component {

	selectCategoryImg () {
		if (this.props.post.category === 'react') {
			return require('../../resources/icon/react.svg')
		}
		else if (this.props.post.category === 'udacity') {
			return require('../../resources/icon/udacity.svg')
		}
		else if (this.props.post.category === 'redux') {
			return require('../../resources/icon/redux.png')
		}
		else {
			return require('../../resources/icon/all.svg')
		}
	}

	render () {
		
		return (
			<div className="post-list-post-wraper"
				onClick={() => (this.props.activePost(this.props.post))}
			>
				<img className="post-list-post-icon" alt="" src={this.selectCategoryImg()}
				></img>
				<span className="post-list-post-score">{this.props.post.voteScore}</span>
				<div className="post-list-post">
					<span className="post-list-post-title">{this.props.post.title}</span>
					<span className="post-list-post-body">{this.props.post.body}</span>
				</div>
			</div>
		)
	}
}

function mapDispatchToProps (dispatch) {
    return {
        activePost: (data) => dispatch(activePost(data))
    }
}

export default connect(null, mapDispatchToProps)(Post)