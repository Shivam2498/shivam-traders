import React, { Component } from 'react';
import Form from './form/form';
import './style.scss';

export class Contact extends Component {
	render() {
		return (
			<div className="contactContainer">
				<div className="contactTextWrapper">
					<div className="contactHeader">
						<p>Contact Us</p>
					</div>
					<div className="contactSubHeader">
						<p>
							Questions or concerns? Just fill out the form below and our support team will get back to
							you within 24 hours
						</p>
					</div>
				</div>
				<div className="contactFormWrapper">
					<Form />
				</div>
			</div>
		);
	}
}

export default Contact;
