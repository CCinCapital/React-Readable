import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentEditorActionBar from './CommentEditorActionBar'
import { handleEditComment, asyncPostComment, asyncUpdateComment } from '../../../actions/comments'
import { uuid } from '../../../utils/helper'

class CommentEditor extends Component {

  handleEdit = (e) => {
    this.props.handleEditComment(this.body.value)
  }

  handlePostNewComment = (e) => {
    e.preventDefault()

    const id = uuid()
    const author = this.props.user
    const parentId = this.props.post.id
    const body = this.props.buffer
    const timestamp = Date.now()

    const comment = {
      id, 
      parentId,
      author, 
      timestamp,
      body,   
    }

    this.props.asyncPostComment(comment)

    this.body.value = ''
  }

  handleUpdateRevisedComment = (e) => {
    e.preventDefault()

    const id = this.props.comment.id
    const author = this.props.user
    const parentId = this.props.comment.parentId
    const body = this.props.buffer
    const timestamp = Date.now()

    const comment = {
      id, 
      parentId,
      author, 
      timestamp,
      body,   
    }

    this.props.asyncUpdateComment(comment)

    this.body.value = ''
  }


  commentEditor () {
    if (this.props.post === null || this.props.post === undefined) {
      return (
        <div></div>
      )
    }
    else {
      return (
        <form 
          className="commentEditor"
          onSubmit={this.props.editExistingComment ? this.handleUpdateRevisedComment : this.handlePostNewComment} 
        >
          <CommentEditorActionBar/>
          <textarea 
            placeholder="I have something to say..."
            value={this.props.buffer}
            onChange={this.handleEdit}
            ref={(value) => (this.body = value)}
            required
          ></textarea>
          <span>Readable App by Can Chen</span>
          <button>Send</button>
        </form>
      )     
    }
  }

  render () {
    return (
      this.commentEditor()
    )
  }
}

function mapStateToProps ({ user, rootStore }) {
  return {
    user: user.user,
    post: rootStore.activePost.post,
    comment: rootStore.commentEditor.commentToEdit,
    buffer: rootStore.commentEditor.buffer,
    editExistingComment: rootStore.commentEditor.editExistingComment,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    asyncPostComment: (data) => dispatch(asyncPostComment(data)),
    handleEditComment: (data) => dispatch(handleEditComment(data)),
    asyncUpdateComment: (data) => dispatch(asyncUpdateComment(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentEditor)