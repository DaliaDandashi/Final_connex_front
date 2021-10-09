import React from 'react';
import './getin3.css';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router';


export default function Getin3() {

	const [state, updateState] = useState({
		name: "",
		email: "",
		phonenumber: "",
		message: ""
	})


	async function setState(nextState) {
		updateState(prevState => ({
			...prevState,
			...nextState
		}))
	}



	async function handleChange(e) {
		let { name, value } = e.target

		setState({ [name]: value })
	}

	async function postmssg() {
		// e.preventDefault();‏

		let body = {
			name: state.name,
			email: state.email,
			phonenumber: state.phonenumber,
			message: state.message
		}
		console.log(body);
		await axios.post(`http://localhost:8000/mssg`, body);

		setState({
			name: "",
			email: "",
			phonenumber: "",
			message: ""
		});
	}


	return (

		<div class="DA_container">

			<div class="DA_row">
				<h4 style={{ textAlign: 'center' }}>We'd love to hear from you!</h4>
			</div>
			<form >
				<div class="DA_row DA_input-DA_container">
					<div class="DA_col-xs-12">

						<div class="DA_input DA_wide">

							<input type="text"  className="DA_input_get" name="name" value={state.name} onChange={handleChange} required/>
							<label>Name</label>
						</div>
					</div>
					<div class="DA_col-md-6 DA_col-sm-12">
						<div class="DA_input">
							<input type="text"  className="DA_input_get" name="email" value={state.email} onChange={handleChange} required/>
							<label>Email</label>
						</div>
					</div>
					<div class="DA_col-md-6 cDA_ol-sm-12">
						<div class="DA_input" style={{ float: 'right' }}>
							<input type="text"  className="DA_input_get" name="phonenumber" value={state.phonenumber} onChange={handleChange} required />
							<label>Phone Number</label>
						</div>
					</div>
					<div class="DA_col-xs-12">
						<div class="DA_input DA_wide">
							<textarea className="DA_itextarea_get"  name="message" value={state.message} onChange={handleChange} required></textarea>
							<label>Message</label>
						</div>
					</div>
					<div class="DA_col-xs-12">
						<button class="DA_btn-lrg DA_submit-btn" type="button" onClick={postmssg} >Send Message</button>
					</div>
				</div>

			</form>
		</div>



	)
}