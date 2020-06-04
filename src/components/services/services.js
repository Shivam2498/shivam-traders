import React, { Component } from 'react';
import ServiceCard from './servicecard/servicecard';
import './style.scss';
import About from '../../assets/images/about.png';

class Services extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data : [
				{
					image      : About,
					heading    : 'Heading',
					subHeading :
						'It provides detailed income and expense reports with graphs so you can easilly see your spending patterns and budget at a glance. Read below to find out more'
				}
			]
		};
	}

	render() {
		const { data } = this.state;
		return (
			<div className="serviceContainer">
				<div className="serviceHeader">Services We Provide</div>
				<div className="serviceWrapper">
					<div className="serviceCardWrapper">
						<ServiceCard data={data[0]} />
					</div>
					<div className="serviceCardWrapper">
						<ServiceCard data={data[0]} />
					</div>
					<div className="serviceCardWrapper">
						<ServiceCard data={data[0]} />
					</div>
				</div>
			</div>
		);
	}
}

export default Services;
