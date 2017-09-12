import React, { Component } from 'react'

import CommentControl from './CommentControl'


class CommentBody extends Component {

  render () {

    return (
      
      <div className={this.props.className}>    
        <span>
          {this.props.comment.body}
        </span> 
        <CommentControl
          comment={this.props.comment}
        />
      </div>
    )
  }
}

export default CommentBody
