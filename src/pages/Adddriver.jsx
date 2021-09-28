import axios from 'axios';
import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import './Adddriver.css';

export default function Adddriver() {
  const history = useHistory();
  const [state, updateState] = useState({
    firstname: "",
    lastname: "",
    username: "",
    phonenumber: "",
    password: ""
  })

  async function setState(nextState) {
    updateState((prevState) => ({
      ...prevState,
      ...nextState
    }))
  }

  async function handlechange(e) {
    let { name, value } = e.target;
    setState({ [name]: value })

  }

  async function adddriver(e) {
    e.preventDefault();

    let body = {
      firstname: state.firstname,
      lastname: state.lastname,
      username: state.username,
      phonenumber: state.phonenumber,
      password: state.password
    }
    await axios.post(`http://localhost:8000/signup`, body)
      .then(
        setState({
          firstname: "",
          lastname: "",
          username: "",
          phonenumber: "",
          password: ""
        }));
  }


  return (

    <div style={{ display: 'flex', flexDirection: 'column', width: '15rem', margin: 'auto', padding: 'auto' }}>

      <h3 style={{ fontFamily: "sans-serif", color: ' #154758' }}> Add New Driver</h3>
      <form onSubmit={adddriver} className="newDriverForm" >
        <div className="newDriverItem">

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="Firstname"
            type="text"
            autoComplete="firstname"
            autoFocus
            name="firstname"
            value={state.firstname}
            onChange={handlechange}
          />
        </div>

        <div className="newDriverItem">

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="Lastname"
            type="text"
            autoComplete="lastname"
            autoFocus
            name="lastname"
            value={state.lastname}
            onChange={handlechange}
          />
        </div>
        <div className="newDriverItem">

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            type="text"
            autoComplete="username"
            autoFocus
            name="username"
            value={state.username}
            onChange={handlechange}
          />
        </div>
        <div className="newDriverItem">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phonenumber"
            label="PhoneNumber"
            type="phonenumber"
            autoComplete="phonenumber"
            autoFocus
            name="phonenumber"
            value={state.phonenumber}
            onChange={handlechange}
          />
        </div>
        <div className="newDriverItem">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            autoComplete="password"
            autoFocus
            name="password"
            value={state.password}
            onChange={handlechange}
          />
        </div>
        
          <div className="Sub_Back">
          <div>
            <button type="submit" className="newDriverButton" className="button_add_driver">Create</button>
          </div>
          <div>
            <button type='submit' className="button_add_driver" onClick={() =>
              history.push({ pathname: `/List_driver` })
            }  >
              Back
            </button>
          </div>
        </div>
      </form>

    </div>
  )
}