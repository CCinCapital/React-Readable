import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { loginUser } from '../../actions'

import MdImage from 'react-icons/lib/md/image'
import MdExit from 'react-icons/lib/md/exit-to-app'


class UserBar extends Component {

  handleLogOut = () => {
    this.props.loginUser(null)
  }

  UI_UserBar () {
    if (this.props.user === null) {
      return (      
        <div className="userBar-wraper">
          <Link to="/login">
            <button className="userBar-loginBtn">
              <span>- login -</span>
            </button>
          </Link>
        </div>
      )
    }
    else {
      return (  
        <div className="userBar-wraper">  
          <div className="userBar">
            <MdImage
              size={40}
              color='grey'
            />
            <span className="userBar-username">{this.props.user}</span>
            <MdExit
              color='grey'
              onClick={this.handleLogOut}
              className="userBar-logoutBtn"
            />    
          </div>
        </div>
      )     
    }
  }

  render () {

    return (
      this.UI_UserBar()
    )
  }
}

function mapStateToProps ({ user }) {
  return {
    user: user.user,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loginUser: (data) => dispatch(loginUser(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBar)
