import React, { Component } from 'react'
import { connect } from 'react-redux'

import { findPost } from '../../actions'


class Post extends Component {

  callBack = () => { 
    const id = this.props.post.id 
    const category = this.props.post.category
    this.props.callBackFromParent({ 
      category,
      id, 
    }) 
    this.props.findPost(id, this.props.post) 
  } 

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
        onClick={this.callBack} 
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
    findPost: (id, post) => dispatch(findPost(id, post)),
  }
}

export default connect(null, mapDispatchToProps)(Post)
