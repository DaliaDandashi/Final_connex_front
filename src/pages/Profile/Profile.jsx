import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import API from '../../API';
import NavBar from '../../components/Navbar'
import SessionContext from '../../components/session/SessionContext'
import './Profile.css';

export default function Profile() {

    const {
        session: { user: { id } }
    } = useContext(SessionContext);

    const [state, updateState] = useState({
        firstname: "",
        lastname: "",
        username: "",
        phonenumber: ""
    });

    function setState(nextState) {
        updateState(prevState => ({
            ...prevState,
            ...nextState
        }));
    }

    function handleChange(e) {
        let { name, value } = e.target;
        setState({ [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        API.put(`user/${id}`, state)
    }


    useEffect(() => {

        function fetData() {
            API.get(`user/${id}`)
                .then(res => {
                    const success = res.data.success;
                    if (success) {
                        const data = res.data.result;
                        setState({
                            firstname: data.firstname,
                            lastname: data.lastname,
                            username: data.username,
                            phonenumber: data.phonenumber
                        });
                    }
                });
        }

        fetData();
    }, [])

    return (
        <div>
            <NavBar />
            <form onSubmit={handleSubmit}>
            
                <center>
                    <fieldset className="Pof_field">
                        <legend className="Prof_leg"><h3 className="Prof_h3">Update Profile</h3></legend>
                        <input className="Prof_input" type="text" name="firstname" placeholder=" FirstName" value={state.firstname} onChange={handleChange} />
                        <input className="Prof_input" type="text" name="lastname" placeholder="LastName" value={state.lastname} onChange={handleChange} />
                        <input className="Prof_input" type="text" name="username" placeholder="Username" value={state.username} onChange={handleChange} />
                        <input className="Prof_input" type="text" name="phonenumber" placeholder="Phone Number" value={state.phonenumber} onChange={handleChange} />
                        <button className="Prof_button" type="submit" value="Update Profile" > Save </button>
                    </fieldset>
                </center>
            </form>

        </div>


    )

}