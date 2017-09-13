import React, { Component } from 'react'
import { connect } from 'react-redux'

import { showPostEditor, handleEditPost, asyncSubmitPost, asyncUpdatePost } from '../actions'
import { uuid } from '../utils/helper'

import FaTrashO from 'react-icons/lib/fa/trash-o'
import FaPaperPlane from 'react-icons/lib/fa/paper-plane'


class PostEditor extends Component {

  handleEdit = (e) => {
    const title = this.title.value
    const category = this.category.value
    const body = this.body.value

    const post = {
      title,
      category,
      body,
    }

    this.props.handleEditPost(post)
  }

  handleSubmitNewPost = (e) => {
    e.preventDefault()

    const id = uuid()
    const timestamp = Date.now()
    const author = this.props.user
    const title = this.props.buffer.titleBuffer
    const category = this.props.buffer.categoryBuffer
    const body = this.props.buffer.bodyBuffer

    const post = {
      id,
      timestamp,
      author,
      title,
      category,
      body,
    }

    this.props.asyncSubmitPost(post)
  }

  handleUpdateRevisedPost = (e) => {
    e.preventDefault()

    const id = this.props.post.id
    const timestamp = Date.now()
    const author = this.props.user
    const title = this.props.buffer.titleBuffer
    const category = this.props.buffer.categoryBuffer
    const body = this.props.buffer.bodyBuffer

    const post = {
      id,
      timestamp,
      author,
      title,
      category,
      body,
    }

    this.props.asyncUpdatePost(post)
  }

  render () {
    const className = (this.props.isModalOpen === true) ? "postEditor" : "hidden"

    return (
      <div className={className}>
        <form 
          className="postEditor"  
          onSubmit={this.props.isNewPost ? this.handleSubmitNewPost : this.handleUpdateRevisedPost}
        >
          <FaTrashO
            className="postEditor-discardBtn"
            color="grey"
            onClick={() => (this.props.showPostEditor(false))}
          />
          <div className='postEditor-title'>
            <span>Post Editor</span>
          </div>
          <button>
            <FaPaperPlane
              size={25}
              className="postEditor-submitBtn"
              color="green"
            />
          </button>
          <span>Post to :
            <select
              onChange={this.handleEdit}
              value={this.props.buffer.categoryBuffer}
              ref={(value) => (this.category = value)}
              required
            >
            {
              Object.entries(this.props.categoriesList).map((category) => {
                return (
                  <option
                    key={category[1].category} 
                    value={category[1].category}
                  >{category[1].title}</option> 
                )
              })
            }
            </select>
          </span>
          <input 
            type="text"
            placeholder="Please enter the title..."
            value={this.props.buffer.titleBuffer}
            onChange={this.handleEdit}
            ref={(value) => (this.title = value)}
            required
          ></input>
          <div className="postEditor-textareaWraper">
            <textarea 
              className="postEditor-textarea"
              type="text" 
              placeholder="Please enter the content..."
              value={this.props.buffer.bodyBuffer}
              onChange={this.handleEdit}
              ref={(value) => (this.body = value)}
              required
            ></textarea>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps ({ user, rootStore }) {
  return {
    isModalOpen: rootStore.postEditor.isModalOpen,
    post: rootStore.postEditor.postToEdit, 
    buffer: rootStore.postEditor.buffer,
    user: user.user,
    categoriesList: rootStore.categories.categoriesList,
    isNewPost: rootStore.postEditor.isNewPost,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    handleEditPost: (data) => dispatch(handleEditPost(data)),
    showPostEditor: (isOpen) => dispatch(showPostEditor(null, isOpen, false)),
    asyncSubmitPost: (data) => dispatch(asyncSubmitPost(data)),
    asyncUpdatePost: (data) => dispatch(asyncUpdatePost(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEditor)
