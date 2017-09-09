import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { sortPosts, displayPostsSorter } from '../../actions'
import FaStar from 'react-icons/lib/fa/star'
import FaListOl from 'react-icons/lib/fa/list-ol'
import IosClock from 'react-icons/lib/io/ios-clock'

class PostsArranger extends Component {

	sortButtonDiv (sortBy) {
		if (sortBy === 'timestamp') {
			return (
				<IosClock 
					color='grey'
					className="posts-arranger-icon" 
					onClick={()=>(this.props.displayPostsSorter(true))}
				/>
			)			
		}
		else if (sortBy === 'vote') {
			return (
				<FaStar 
					color='grey'
					className="posts-arranger-icon" 
					onClick={()=>(this.props.displayPostsSorter(true))}
				/>
			)			
		}
		else {
			return (
				<FaListOl 
					color='grey'
					className="posts-arranger-icon" 
					onClick={()=>(this.props.displayPostsSorter(true))}
				/>
			)
		}

	}


	arrangeByDiv (sortBy) {
		if (sortBy.title === 'sort by : ') {
			return (
				<FaListOl 
					color='grey'
					className="posts-arranger-icon" 
				/>
			)
		}

		if (sortBy.name === 'timestamp') {
			return (
				<IosClock 
					color='grey'
					className="posts-arranger-icon" 
				/>
			)			
		}
		else if (sortBy.name === 'vote') {
			return (
				<FaStar 
					color='grey'
					className="posts-arranger-icon" 
				/>
			)			
		}
		else {
			return (
				<FaListOl 
					color='grey'
					className="posts-arranger-icon" 
				/>
			)
		}
	}

	render () {

		return (
			<div className="posts-arranger" >
				{this.sortButtonDiv(this.props.sortBy)}
				<Modal
					className='posts-arranger-modal'
					overlayClassName='posts-arranger-overlay'
					isOpen={this.props.isModalOpen}
					onRequestClose={() => (this.props.displayPostsSorter(false))}
					contentLabel='posts-arranger-Modal'
				>
					<div>
						{
							Object.entries(this.props.sortByList).map((sortType) => {
								return (
									<div className="posts-arranger-types"
										onClick={() => {this.props.sortPosts(sortType[1].name)}}
										key = {sortType}
									>
										{this.arrangeByDiv(sortType[1])}
										<span className="posts-arranger-types-name">{sortType[1].title}</span>
									</div>
								)
							})
						}
					</div>
				</Modal>
			</div>
		)
	}
}

function mapStateToProps ({ sortByList, sortPosts }) {
	return {
		sortBy: sortPosts.sortBy,
		isModalOpen: sortPosts.isModalOpen,
		sortByList: sortByList,
	}
}

function mapDispatchToProps (dispatch) {
	return {
		displayPostsSorter: (data) => dispatch(displayPostsSorter(data)),
		sortPosts: (data) => dispatch(sortPosts(data)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsArranger)

