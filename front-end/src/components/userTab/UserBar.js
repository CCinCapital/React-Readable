import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loginUser, showUserLogin } from '../../actions'

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
          <button 
            className="userBar-loginBtn"
            onClick={() => (this.props.showUserLogin(true))}
          >
            <span>- login -</span>
          </button>
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
    showUserLogin: (data) => dispatch(showUserLogin(data)),
    loginUser: (data) => dispatch(loginUser(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBar)
