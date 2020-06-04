import React, { Component } from 'react';
import './style.scss';

export class Form extends Component {
	render() {
		return (
			<div className="formContainer">
				<div className="nameContainer">
					<input
						required
						className="firstLastNameBox"
						placeholder="First Name"
						type="text"
						id="fname"
						name="fname"
					/>
					<input
						required
						className="firstLastNameBox"
						placeholder="Last Name"
						type="text"
						id="lname"
						name="lname"
					/>
				</div>
				<input
					required
					className="phoneNumberBox"
					placeholder="Phone Number"
					type="tel"
					id="phno"
					name="phno"
				/>
				<select className="phoneNumberBox" name="cars" id="cars">
					<option selected disabled value="volvo">
						Select Service
					</option>
					<option value="volvo">Volvo</option>
					<option value="saab">Saab</option>
					<option value="mercedes">Mercedes</option>
					<option value="audi">Audi</option>
				</select>
				<div className="submitContainer">
					<button className="submit">Submit</button>
				</div>
			</div>
		);
	}
}

export default Form;
