import React, { Component } from 'react';
import './style.scss';

export class Footer extends Component {
	render() {
		return (
			<div className="footerContainer">
				<div className="addressWrapper">
					<h1>Address</h1>
					<p>Pipang Ltd, Griva Digeni, 81-83 Jacovides Tower, 1st Floor 1090 Picosia USA</p>
				</div>
				<div className="getInTouchWrapper">
					<h1>Get In Touch</h1>
					<a href="mailto:shivamtraders18@gmail.com">
						<span>Email Address:</span> shivamtraders18@gmail.com
					</a>
					<p>
						<span>Contact Number:</span> 9831767911/9830179644
					</p>
				</div>
			</div>
		);
	}
}

export default Footer;
