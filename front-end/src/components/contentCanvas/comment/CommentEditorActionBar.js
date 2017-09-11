import React, { Component } from 'react'

import MdTagFaces from 'react-icons/lib/md/tag-faces'
import TiImage from 'react-icons/lib/ti/image'

class CommentEditorActionBar extends Component {

  render () {
    
    return (
      <div className="commentEditor-actionBar">
        <MdTagFaces
          size={20}
          color="grey"
        />
        <TiImage
          size={20}
          color="grey"
        />
      </div>
    )
  }
}

export default CommentEditorActionBar
