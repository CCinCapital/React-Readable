import React, { Component } from 'react'

import CommentVoter from './CommentVoter'
import CommentBody from './CommentBody'
import TimeStamp from '../TimeStamp'

import MdImage from 'react-icons/lib/md/image'


class CommentFromRight extends Component {

  render () {
    const date = (new Date(this.props.comment.timestamp)).toLocaleString().substr(0, 17) 

    return (
      <div className="comment-wraper-right">
        <TimeStamp
          date={date}
          className="comment-stamp"
          showAuthor={false}
        />
        <CommentBody
          comment={this.props.comment}
          className="comment-body-right"
        />
        <div className="comment-pointer-right"></div>
        <MdImage
          size={30}
          color={'blue'}
        />
        <CommentVoter
          className="comment-voter"
          comment={this.props.comment}
        />
      </div>
    )
  }
}

export default CommentFromRight
