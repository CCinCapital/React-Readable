import React, { Component } from 'react'
import { connect } from 'react-redux'

import { showPostEditor, asyncDeletePost } from '../../actions'

import MdMenu from 'react-icons/lib/md/menu'
import FaTrashO from 'react-icons/lib/fa/trash-o'
import FaEdit from 'react-icons/lib/fa/edit'


class postController extends Component {

  UI_Controller () {
    if (this.props.post === null || this.props.post === undefined) {
      return (
        <div></div>
      )
    }
    else {
      return (
        <ul className="postController">
          <MdMenu
            size={30}
            className="postController-icon"
            color="grey"
          />
          <li>
            <span
              onClick={() => (this.props.showPostEditor(this.props.post, true))}
            >
              <FaEdit
                size={35}
                className="postController-icon"
                color="grey"
              />
              edit
            </span>
            <span
              onClick={() => (this.props.asyncDeletePost(this.props.post))}
            >
              <FaTrashO
                size={35}
                className="postController-icon"
                color="grey"
              />
              delete
            </span>         
          </li>
        </ul>
      )
    }
  }

  render () {

    return (
      this.UI_Controller()
    )
  }
}

function mapStateToProps ({ rootStore }) {
  return {
    post: rootStore.activePost.post,
  }
}

function mapDispatchToProps (dispatch) {
    return {
      showPostEditor: (post, isOpen) => dispatch(showPostEditor(post, isOpen, false)),
      asyncDeletePost: (data) => dispatch(asyncDeletePost(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(postController)
