import React, { Component } from 'react';
import './style.scss';

class ServiceCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data : this.props.data
		};
	}

	render() {
		const { data } = this.state;

		return (
			<div className="cardContainer">
				<div className="cardImgWrapper">
					<img alt="Hello" className="cardImg" src={data.image} />
				</div>
				<div className="cardTextWrapper">
					<p className="cardHeader">{data.heading}</p>
					<p className="cardSubHeader">{data.subHeading}</p>
				</div>
			</div>
		);
	}
}

export default ServiceCard;
