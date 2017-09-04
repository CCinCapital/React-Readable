import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { sortPosts, displayPostsSorter } from '../../actions'

class PostsArranger extends Component {

	render () {
		const activeSortType = this.props.sortBy.sortBy
		const sortTypeImg = this.props.sortByList[activeSortType].img

		return (
			<div className="posts-arranger" >
				<img 
					className="posts-arranger-icon" 
					alt="" 
					src={require('../../resources/icon/'+sortTypeImg)}
					onClick={()=>(this.props.displayPostsSorter(true))}
				></img>
				<Modal
					className='posts-arranger-modal'
					overlayClassName='posts-arranger-overlay'
					isOpen={this.props.sortBy.isModalOpen}
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
										<img 
											className="posts-arranger-types-icon" 
											alt="" 
											src={require('../../resources/icon/'+sortType[1].img)}
										></img>
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
		sortBy: sortPosts,
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

