import React, { Component } from 'react';
import '../home/style.scss';

class Home extends Component {
	render() {
		return (
			<div className="homeWrapper">
				<div className="homeTextWrapper">
					<div className="homeHeader">Shivam Traders</div>
					<div className="homeSubHeader">
						Cloud budget management for everyone. Only €69.95 a Month After a 7 Day Trial of Up to €4.99
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
