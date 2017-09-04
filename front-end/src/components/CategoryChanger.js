import React, { Component } from 'react'
import { connect } from 'react-redux'
import { displayCategoryChanger, changeCategory } from '../actions'
import Modal from 'react-modal'


class CategoryChanger extends Component {

	render () {
		const activeCategory = this.props.activeCategory.category
		const categoryTitle = this.props.categoryList[activeCategory].title
		const categoryImg = this.props.categoryList[activeCategory].img

		return (
			<div>
				<div className="category-changer"
					onClick={() => {this.props.displayCategoryChanger(true)}}
				>
					<img 
						className="category-changer-icon" 
						alt="" 
						src={require('../resources/icon/'+categoryImg)}
					></img>
					<span className="category-name">{categoryTitle}</span>
				</div>
				<Modal
					className='category-changer-modal'
					overlayClassName='category-changer-overlay'
					isOpen={this.props.activeCategory.isModalOpen}
					onRequestClose={() => {this.props.displayCategoryChanger(false)}}
					contentLabel='Modal'
				>
					<div>
						{
							Object.entries(this.props.categoryList).map((category) => {
								return (
									<div className="category-changer-category"
										onClick={() => {this.props.changeCategory(category[1].category)}}
										key = {category}
									>
										<img 
											className="category-changer-icon" 
											alt="" 
											src={require('../resources/icon/'+category[1].img)}
										></img>
										<span className="category-name">{category[1].title}</span>
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

function mapStateToProps ({ activeCategory, categoryList }) {
	return {
		activeCategory: activeCategory,
		categoryList: categoryList,
	}
}

function mapDispatchToProps (dispatch) {
	return {
		displayCategoryChanger: (data) => dispatch(displayCategoryChanger(data)),
		changeCategory: (data) => dispatch(changeCategory(data)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryChanger)