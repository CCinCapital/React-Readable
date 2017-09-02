import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Topic from './Topic'

class TopicNav extends Component {

	render () {
		return (
			<div className="topic-nav-wraper">
				<div className="topic-nav">
					<Topic
					></Topic>
					<Topic
					></Topic>
					<Topic
					></Topic>
					<Topic
					></Topic>
					<Topic
					></Topic>
				</div>
			</div>
		)
	}
}

export default TopicNav