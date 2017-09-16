import React, { Component } from 'react'
import { connect } from 'react-redux'

import { showCommentEditor, AsyncDeleteComment } from '../../../actions/comments'

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

  handleEdit = () => {
    this.props.showCommentEditor(this.props.comment, true)
  }

  handleDelete = () => {
    this.props.AsyncDeleteComment(this.props.comment)
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
      showCommentEditor: (comment, editExistingComment) => dispatch(showCommentEditor(comment, editExistingComment)),
      AsyncDeleteComment: (data) => dispatch(AsyncDeleteComment(data)),
    }
}

export default connect(null, mapDispatchToProps)(CommentControl)
