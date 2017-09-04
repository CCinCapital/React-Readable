import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { sortPosts, displayPostsSorter } from '../actions'

class PostsArranger extends Component {

	render () {
		const sortImg = this.props.sortBy.sortBy+'.svg'

		return (
			<div className="category-changer-arrange" >
				<img 
					className="category-changer-arrange-icon" 
					alt="" 
					src={require('../resources/icon/'+sortImg)}
					onClick={()=>(this.props.displayPostsSorter(true))}
				></img>
				<Modal
					className='modal'
					overlayClassName='overlay'
					isOpen={this.props.sortBy.isModalOpen}
					onRequestClose={() => (this.props.displayPostsSorter(false))}
					contentLabel='Modal'
				>
					<img 
						className="category-changer-arrange-icon" 
						alt="" 
						src={require('../resources/icon/timestamp.svg')}
						onClick={()=>(this.props.sortPosts('timestamp'))}
					></img>
					<img 
						className="category-changer-arrange-icon" 
						alt="" 
						src={require('../resources/icon/vote.svg')}
						onClick={()=>(this.props.sortPosts('vote'))}
					></img>
				</Modal>
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		sortBy: state.sortPosts,
	}
}

function mapDispatchToProps (dispatch) {
	return {
		displayPostsSorter: (data) => dispatch(displayPostsSorter(data)),
		sortPosts: (data) => dispatch(sortPosts(data)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsArranger)

