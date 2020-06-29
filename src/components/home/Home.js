import React, { Component } from 'react';
import '../home/style.scss';

class Home extends Component {
	render() {
		return (
			<div className="homeWrapper">
				<div className="tagWrapper">
					<a className="emailTagWrapper" href="mailto:shivamtraders18@gmail.com">
						<i className="fa fa-envelope" aria-hidden="true" /> : shivamtraders18@gmail.com
					</a>
					<a className="emailTagWrapper" href="tel:+919831767911">
						<i className="fa fa-phone" aria-hidden="true" /> : +91-9831767911
					</a>
				</div>
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
