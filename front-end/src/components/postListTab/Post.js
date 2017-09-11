import React, { Component } from 'react'
import { connect } from 'react-redux'

import { activePost } from '../../actions'


class Post extends Component {

  URL_selectCategoryImg () {
    if (this.props.post.category === 'react') {
      return require('../../resources/icon/react.svg')
    }
    else if (this.props.post.category === 'udacity') {
      return require('../../resources/icon/udacity.svg')
    }
    else if (this.props.post.category === 'redux') {
      return require('../../resources/icon/redux.png')
    }
    else {
      return require('../../resources/icon/all.svg')
    }
  }

  render () {
    
    return (
      <div className="postTab-wraper"
        onClick={() => (this.props.activePost(this.props.post))}
      >
        <img 
          className="postTab-icon" 
          alt="" 
          src={this.URL_selectCategoryImg()}
        ></img>
        <span className="postTab-score">
          {this.props.post.voteScore}
        </span>
        <div className="postTab">
          <span className="postTab-title">
            {this.props.post.title}
          </span>
          <span className="postTab-body">
            {this.props.post.body}
          </span>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
    return {
        activePost: (data) => dispatch(activePost(data))
    }
}

export default connect(null, mapDispatchToProps)(Post)
