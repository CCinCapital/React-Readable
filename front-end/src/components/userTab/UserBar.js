import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser, displayUserLogin } from '../../actions'
import Modal from 'react-modal'

class UserBar extends Component {

	state = {
		name: null,
	}

	handleName = (e) => {
		this.setState({
			name: e.target.value,
		})
	}

	handleLogin = () => {
		const user = this.state.name
		this.props.loginUser(user)
	}

	userBar () {
		if (this.props.user.user === null) {
			return (
				<div className="user-bar-wraper">
					<button 
						className="user-login-button"
						onClick={() => (this.props.displayUserLogin(true))}
					>
						<span>- login -</span>
					</button>
					 <Modal
			          className='user-login-modal'
			          overlayClassName='user-login-overlay'
			          isOpen={this.props.user.isModalOpen}
			          contentLabel='user-login-Modal'
			        >
			        	<span className='user-login-modal-greeting'>
			        		Hi, What would like to be called?
			        	</span>
			        	<input  
			        		className='user-login-modal-input'
							type="text" 
							placeholder="Call Me ..."
							onChange={this.handleName}
						></input>
						<button  
							className='user-login-modal-submit'
							onClick={this.handleLogin}
						>
							<span>confirm</span>
						</button>
			        </Modal>
		        </div>
			)
		}
		else {
			return (	
				<div className="user-bar-wraper">	
					<div className="user-bar">
						<img className="user-avatar" alt="" src={require('../../resources/icon/user1.jpg')}></img>
						<div className="user-nickname">
							<span className="user-nickname-display-name">{this.props.user.user}</span>
						</div>		
					</div>
				</div>
			)			
		}
	}

	render () {
		return (
			this.userBar()
		)
	}
}

function mapStateToProps ({ user }) {
	return {
		user: user,
	}
}

function mapDispatchToProps (dispatch) {
	return {
		loginUser: (data) => dispatch(loginUser(data)),
		displayUserLogin: (data) => dispatch(displayUserLogin(data)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBar)