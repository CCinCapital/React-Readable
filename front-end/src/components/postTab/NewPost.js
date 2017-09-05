import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { submitPost, displayPostEditor } from '../../actions'

class NewPost extends Component {

	state = {
		title: null,
		content: null,
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
		})
		this.props.displayPostEditor(false)
	}

	handleSubmit = (e) => {
		const title = this.state.title
		const content = this.state.content
		const timestamp = Date.now()
		console.log(Date(timestamp*1000))

		this.props.submitPost({ title, content })
		this.setState({
			title: null,
			content: null,			
		})

		this.props.displayPostEditor(false)
	}

	render () {
		return (
			<div>
				<img
					className="new-post"
					alt=""
					src={require('../../resources/icon/newpost.svg')}
					onClick={() => (this.props.displayPostEditor(true))}
				></img>
		        <Modal
		          className='post-editor-modal'
		          overlayClassName='post-editor-overlay'
		          isOpen={this.props.postEditor.isModalOpen}
		          onRequestClose={() => (this.props.displayPostEditor(false))}
		          contentLabel='post-editor-Modal'
		        >
					<img
						className="post-editor-discard"
						alt=""
						src={require('../../resources/icon/discard_post.svg')}
						onClick={this.handleDiscard}
					></img>
		        	<span className="post-editor-title">Edit Post</span>
					<img
						className="post-editor-submit"
						alt=""
						src={require('../../resources/icon/submit_post.svg')}
						onClick={this.handleSubmit}
					></img>
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

function mapStateToProps ({ postEditor }) {
	return {
		postEditor: postEditor,
	}
}

function mapDispatchToProps (dispatch) {
	return {
		displayPostEditor: (data) => dispatch(displayPostEditor(data)),
		submitPost: (data) => dispatch(submitPost(data)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)