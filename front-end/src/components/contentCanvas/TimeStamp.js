import React, { Component } from 'react'
import { connect } from 'react-redux'

import FaUser from 'react-icons/lib/fa/user'
import FaEdit from 'react-icons/lib/fa/edit'


class TimeStamp extends Component {

  UI_author () {
    if (this.props.showAuthor === false) {
      return (
        <div></div>
      )
    }

    const author = this.props.author

    if (author === null || author === undefined){
      return (
        <span>
          <FaUser/>
          <span> anonymous </span>
        </span>
      )
    }
    else {
      return (
        <span>
          <FaUser/>
          <span>: {author} </span>
        </span> 
      )     
    }
  }

  render () {
    
    return (
      <div className={this.props.className}>
        {this.UI_author()}
        <FaEdit/>
        <span>: {this.props.date}</span>
      </div>  
    )
  }
}

function mapStateToProps ({ user }) {
  return {
    user: user.user,
  }
}

export default connect(mapStateToProps)(TimeStamp)

