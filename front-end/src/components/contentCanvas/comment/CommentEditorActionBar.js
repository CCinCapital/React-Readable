import React, { Component } from 'react'

import { connect } from 'react-redux'

// import MdTagFaces from 'react-icons/lib/md/tag-faces'
// import TiImage from 'react-icons/lib/ti/image'


class CommentEditorActionBar extends Component {

  render () {
    
    return (
      <div className="commentEditor-actionBar">
        <p className={this.props.editExistingComment === false ? "hidden" : "commentEditor-editing-msg"}>Editing comment:</p>
        {// <MdTagFaces
        //   size={20}
        //   color="grey"
        // />
        // <TiImage
        //   size={20}
        //   color="grey"
        // />
        }
      </div>
    )
  }
}

function mapStateToProps ({ rootStore }) {
  return {
    editExistingComment: rootStore.commentEditor.editExistingComment,
  }
}

export default connect(mapStateToProps)(CommentEditorActionBar)
