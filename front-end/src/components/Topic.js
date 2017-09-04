import React, { Component } from 'react'

class Topic extends Component {

	render () {
		return (
			<div className="topic-wraper">
				<img className="topic-icon" alt="" src={require('../resources/icon/user2.jpg')}></img>
				<div className="topic">
					<span className="topic-topic">Where are you going?</span>
					<span className="topic-latest-reply">Latest Message goes here.</span>
				</div>
				<div className="topic-new-reply"></div>
			</div>
		)
	}
}

export default Topic