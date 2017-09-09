import React, { Component } from 'react'
import { connect } from 'react-redux'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import FaTrashO from 'react-icons/lib/fa/trash-o'
import FaEdit from 'react-icons/lib/fa/edit'

class PostControl extends Component {


	handleEdit = (e) => {
		console.log('edit')
	}

	handleDelete = (e) => {
		console.log('delete')
	}

	render () {
		return (
			<ul className={this.props.className}>
				<li>
					<FaAngleDown
						size={20}
						//color="grey"
					/>
				</li>
				<li 
					className="post-control-button"
					onClick={this.handleEdit}
				>
					<FaEdit
						size={35}
						color="grey"
					/>
					<span>edit</span>
				</li>
				<li 
					className="post-control-button"
					onClick={this.handleDelete}
				>
					<FaTrashO
						size={35}
						color="grey"
					/>
					<span>delete</span>
				</li>
			</ul>
		)
	}
}

function mapDispatchToProps (dispatch) {
    return {

    }
}

export default connect(null, mapDispatchToProps)(PostControl)