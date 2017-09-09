import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser, displayUserLogin } from '../../actions'
import Modal from 'react-modal'
import MdImage from 'react-icons/lib/md/image'
import MdExit from 'react-icons/lib/md/exit-to-app'

class UserBar extends Component {

	state = {
		name: null,
	}

	handleName = (e) => {
		this.setState({
			name: e.target.value,
		})
	}

	handleLogIn = () => {
		const user = this.state.name
		this.props.loginUser(user)
	}

	handleLogOut = () => {
		this.setState({
			name: null,
		})
		this.props.loginUser(null)
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
			        		Hi, What would you like to be called?
			        	</span>
			        	<input  
			        		className='user-login-modal-input'
							type="text" 
							placeholder="Call Me ..."
							onChange={this.handleName}
						></input>
						<button  
							className='user-login-modal-submit'
							onClick={this.handleLogIn}
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
						<MdImage
							size={40}
							color='grey'
						/>
						<span className="user-nickname">{this.props.user.user}</span>
						<MdExit
							color='grey'
							onClick={this.handleLogOut}
							className="user-bar-logout-button"
						/>		
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