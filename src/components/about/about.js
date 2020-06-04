import React, { Component } from 'react';
import '../about/style.scss';
import aboutImage from '../../assets/images/about.png';

export class About extends Component {
	render() {
		return (
			<div className="aboutContainer">
				<div className="aboutTextWrapper">
					<div className="aboutTextHeader">About</div>
					<div className="aboutTextSubHeader">
						Our software is made so you can access and manage your budget and expenses online at any time
						from any device. It provides detailed income and expense reports with graphs so you can easilly
						see your spending patterns and budget at a glance. Read below to find out more.
					</div>
				</div>
				<div className="aboutImageContainer">
					<img src={aboutImage} />
				</div>
			</div>
		);
	}
}

export default About;
