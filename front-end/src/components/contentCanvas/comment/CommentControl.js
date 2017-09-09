import React, { Component } from 'react'
import { connect } from 'react-redux'
import FaEdit from 'react-icons/lib/fa/edit'
import FaTrashO from 'react-icons/lib/fa/trash-o'

class CommentControl extends Component {

	state = {
		hover: false,
	}

	mouseOver = () => {
		this.setState({
			hover: true,
		})
	}

	mouseOut = () => {
		this.setState({
			hover: false,
		})
	}

	handleEdit () {
		console.log('edit')
	}

	handleDelete () {
		console.log('delete')
	}

	render () {
		return (
			<div 
				className={(this.state.hover === true) ? "comment-options" : "comment-options-hidden"}
				onMouseOver={this.mouseOver}
				onMouseOut={this.mouseOut}
			>
				<FaEdit
					className="comment-options-button"
					onClick={this.handleEdit}
				/>
				<FaTrashO
					className="comment-options-button"
					onClick={this.handleDelete}
				/>
			</div>
		)
	}
}

function mapDispatchToProps (dispatch) {
    return {

    }
}

export default connect(null, mapDispatchToProps)(CommentControl)
