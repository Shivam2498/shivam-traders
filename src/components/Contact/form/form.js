import React, { Component } from 'react';
import firebase from '../../../firebase.js';
import './style.scss';

export class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			submitted          : false,
			formData           : {
				first_name : '',
				last_name  : '',
				service    : '',
				phoneNo    : ''
			},
			borderFnameStyling : {
				border : ''
			},
			borderLnameStyling : {
				border : ''
			},
			borderPhnoStyling  : {
				border : ''
			}
		};

		this.formChange = this.formChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	isNotEmptyObject(obj) {
		for (var key in obj) {
			if (obj[key] === '' || obj[key] === undefined) {
				return false;
			}
		}
		return true;
	}

	writeUserData(data) {
		firebase.database().ref('users').push({
			firstName   : data.first_name,
			lastName    : data.last_name,
			phoneNo     : data.phoneNo,
			serviceNeed : data.service
		});
	}

	handleSubmit = () => {
		if (this.isNotEmptyObject(this.state.formData)) {
			this.writeUserData(this.state.formData);
			this.setState({
				submitted : true
			});
			// this.setState({
			// 	formData : {
			// 		first_name : '',
			// 		last_name  : '',
			// 		service    : '',
			// 		phoneNo    : ''
			// 	}
			// });
		}
	};

	formChange = (event) => {
		const { formData } = this.state;

		var regName = /^[a-zA-Z ]{1,30}$/;
		if (event.target.id === 'fname') {
			if (regName.test(event.target.value)) {
				this.setState({
					borderFnameStyling : {
						border : '2px solid green'
					},
					formData           : {
						first_name : event.target.value,
						last_name  : formData.last_name,
						service    : formData.service,
						phoneNo    : this.setState.phoneNo
					}
				});
			}
			else {
				this.setState({
					borderFnameStyling : {
						border : '2px solid red'
					},
					formData           : {
						first_name : '',
						last_name  : formData.last_name,
						service    : formData.service,
						phoneNo    : this.setState.phoneNo
					}
				});
			}
		}
		if (event.target.id === 'lname') {
			if (regName.test(event.target.value)) {
				this.setState({
					borderLnameStyling : {
						border : '2px solid green'
					},

					formData           : {
						first_name : formData.first_name,
						last_name  : event.target.value,
						service    : formData.service,
						phoneNo    : this.setState.phoneNo
					}
				});
			}
			else {
				this.setState({
					borderLnameStyling : {
						border : '2px solid red'
					},
					formData           : {
						first_name : formData.first_name,
						last_name  : '',
						service    : formData.service,
						phoneNo    : this.setState.phoneNo
					}
				});
			}
		}

		if (event.target.id === 'phno') {
			if (/^[+]?([\d]{10})$/.test(event.target.value)) {
				this.setState({
					borderPhnoStyling : {
						border : '2px solid green'
					},

					formData          : {
						first_name : formData.first_name,
						last_name  : formData.last_name,
						phoneNo    : event.target.value,
						service    : formData.service
					}
				});
			}
			else {
				this.setState({
					borderPhnoStyling : {
						border : '2px solid red'
					},
					formData          : {
						first_name : formData.first_name,
						last_name  : formData.last_name,
						service    : formData.service,
						phoneNo    : ''
					}
				});
			}
		}
	};

	render() {
		const { formData } = this.state;
		return (
			<div className="formContainer">
				<div className="nameContainer">
					<input
						required
						className="firstLastNameBox"
						placeholder="First Name"
						type="text"
						id="fname"
						value={formData.first_name || ''}
						name="fname"
						style={this.state.borderFnameStyling}
						onChange={this.formChange}
					/>
					<input
						required
						className="firstLastNameBox"
						placeholder="Last Name"
						type="text"
						value={formData.last_name || ''}
						id="lname"
						name="lname"
						style={this.state.borderLnameStyling}
						onChange={this.formChange}
					/>
				</div>
				<input
					required
					className="phoneNumberBox"
					placeholder="Phone Number"
					type="tel"
					id="phno"
					style={this.state.borderPhnoStyling}
					onChange={this.formChange}
					name="phno"
				/>
				<select
					onChange={(e) => {
						this.setState({
							formData : {
								first_name : formData.first_name,
								last_name  : formData.last_name,
								phoneNo    : formData.phoneNo,
								service    : e.target.value
							}
						});
					}}
					value={formData.service || ''}
					className="phoneNumberBox"
					name="service"
					id="service"
				>
					{/* <option selected disabled value="service">
						Select Service
					</option> */}
					<option value="volvo">Volvo</option>
					<option value="saab">Saab</option>
					<option value="mercedes">Mercedes</option>
					<option value="audi">Audi</option>
				</select>
				<div className="submitContainer">
					<button onClick={this.handleSubmit} className="submit">
						{this.state.submitted ? 'Done' : 'Submit'}
					</button>
				</div>
			</div>
		);
	}
}

export default Form;
