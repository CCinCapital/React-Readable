import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Tab extends Component {

	render () {
		return (
			<div className="tab-wraper">
				<a className="tab-item" href="">
					<i className="chat-ico"></i>
				</a>
				<a className="tab-item" href="">
					<i className="more-topic-ico"></i>
				</a>
			</div>
		)
	}
}

export default Tab