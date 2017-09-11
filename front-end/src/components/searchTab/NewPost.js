import React, { Component } from 'react'
import { connect } from 'react-redux'

import { showPostEditor } from '../../actions'

import TiEdit from 'react-icons/lib/ti/edit'


class NewPost extends Component {

  render () {

    return (
      <TiEdit
        className={this.props.className}
        color='grey'
        onClick={() => (this.props.showPostEditor(true))}
      />
    )
  }
}

function mapStateToProps ({ posts }) {
  return {
    isModalOpen: posts.postEditor.isModalOpen,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    showPostEditor: (isOpen) => dispatch(showPostEditor(null, isOpen, true)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
