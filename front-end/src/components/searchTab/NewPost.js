import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { submitPost, displayPostEditor } from '../../actions'
import { uuid } from '../../utils/helper'
import TiEdit from 'react-icons/lib/ti/edit'
import FaTrashO from 'react-icons/lib/fa/trash-o'
import FaPaperPlane from 'react-icons/lib/fa/paper-plane'

class NewPost extends Component {

	state = {
		title: null,
		content: null,
		category: null,
	}

	handleTitle = (e) => {
		this.setState({
			title: e.target.value,
		})
	}

	handleContent = (e) => {
		this.setState({
			content: e.target.value,
		})
	}

	handleDiscard = (e) => {
		this.setState({
			title: null,
			content: null,
			category: null,
		})
		this.props.displayPostEditor(false)
	}

	handleCategory = (e) => {
		this.setState({
			category: e.target.value,
		})
	}

	handleSubmit = (e) => {
		const id = uuid()
		const author = this.props.user
		const category = this.state.category
		const title = this.state.title
		const body = this.state.content
		const timestamp = Date.now()

		this.props.submitPost({ id, timestamp, title, body, author, category })
		
		this.setState({
			title: null,
			content: null,
			category: null,			
		})

		this.props.displayPostEditor(false)
	}

	optionMenu () {
		return (
			Object.entries(this.props.categoryList).map((category) => {
				if (category[1].category === 'all') {
					return (
						<option
							key={category[1].category} 
							value={category[1].category}
							disabled='disabled'
						>select a category</option> 
					)
				}
				return (
					<option
						key={category[1].category} 
						value={category[1].category}
					>{category[1].title}</option> 
				)
			})
		)
	}

	render () {
		return (
			<div>
				<TiEdit
					className="new-post"
					color='grey'
					onClick={() => (this.props.displayPostEditor(true))}
				/>
		        <Modal
		          className='post-editor-modal'
		          overlayClassName='post-editor-overlay'
		          isOpen={this.props.postEditor.isModalOpen}
		          onRequestClose={() => (this.props.displayPostEditor(false))}
		          contentLabel='post-editor-Modal'
		        >
					<FaTrashO
						className="post-editor-discard"
						color="grey"
						onClick={this.handleDiscard}
					/>
					<div
						className='post-editor-title'
					>
						<span>New Post</span>
			        </div>
					<FaPaperPlane
						className="post-editor-submit"
						color="green"
						onClick={this.handleSubmit}
					/>
					<div
		        		className='post-editor-category-wraper'
					>
						<span>Category :</span>
			        	<select
							className='post-editor-category-selector'
			        		defaultValue='all'
							onClick={this.handleCategory}
			        	>
			        		{this.optionMenu()}
			        	</select>
		        	</div>
		        	<input 
			        	className="post-editor-input-title"
						type="text" 
						placeholder="Please enter the title..."
						onChange={this.handleTitle}
					></input>
					<div className="post-editor-input-content-wraper">
			        	<textarea 
			        		className="post-editor-input-content"
							type="text" 
							placeholder="Please enter the content..."
							onChange={this.handleContent}
			        	></textarea>
		        	</div>
		        </Modal>
	        </div>
		)
	}
}

function mapStateToProps ({ postEditor, user, categoryList }) {
	return {
		postEditor: postEditor,
		user: user.user,
		categoryList: categoryList,
	}
}

function mapDispatchToProps (dispatch) {
	return {
		displayPostEditor: (data) => dispatch(displayPostEditor(data)),
		submitPost: (data) => dispatch(submitPost(data)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)