import React, { Component } from 'react';
import './style.scss';

export class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email              : {
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

	handleSubmit = () => {
		if (this.isNotEmptyObject(this.state.email)) {
			console.log(this.state.email);
		}
	};

	formChange = (event) => {
		const { email } = this.state;

		var regName = /^[a-zA-Z ]{1,30}$/;
		if (event.target.id === 'fname') {
			if (regName.test(event.target.value)) {
				this.setState({
					borderFnameStyling : {
						border : '2px solid green'
					},
					email              : {
						first_name : event.target.value,
						last_name  : email.last_name,
						service    : email.service,
						phoneNo    : this.setState.phoneNo
					}
				});
			}
			else {
				this.setState({
					borderFnameStyling : {
						border : '2px solid red'
					},
					email              : {
						first_name : '',
						last_name  : email.last_name,
						service    : email.service,
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

					email              : {
						first_name : email.first_name,
						last_name  : event.target.value,
						service    : email.service,
						phoneNo    : this.setState.phoneNo
					}
				});
			}
			else {
				this.setState({
					borderLnameStyling : {
						border : '2px solid red'
					},
					email              : {
						first_name : email.first_name,
						last_name  : '',
						service    : email.service,
						phoneNo    : this.setState.phoneNo
					}
				});
			}
		}

		if (event.target.id === 'phno') {
			console.log(event.target.value);
			if (/^[+]?([\d]{10})$/.test(event.target.value)) {
				this.setState({
					borderPhnoStyling : {
						border : '2px solid green'
					},

					email             : {
						first_name : email.first_name,
						last_name  : email.last_name,
						phoneNo    : event.target.value,
						service    : email.service
					}
				});
			}
			else {
				this.setState({
					borderPhnoStyling : {
						border : '2px solid red'
					},
					email             : {
						first_name : email.first_name,
						last_name  : email.last_name,
						service    : email.service,
						phoneNo    : ''
					}
				});
			}
		}
	};

	render() {
		const { email } = this.state;
		return (
			<div className="formContainer">
				<div className="nameContainer">
					<input
						required
						className="firstLastNameBox"
						placeholder="First Name"
						type="text"
						id="fname"
						value={email.first_name || ''}
						name="fname"
						style={this.state.borderFnameStyling}
						onChange={this.formChange}
					/>
					<input
						required
						className="firstLastNameBox"
						placeholder="Last Name"
						type="text"
						value={email.last_name || ''}
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
							email : {
								first_name : email.first_name,
								last_name  : email.last_name,
								phoneNo    : email.phoneNo,
								service    : e.target.value
							}
						});
					}}
					value={email.service || ''}
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
						Submit
					</button>
				</div>
			</div>
		);
	}
}

export default Form;
