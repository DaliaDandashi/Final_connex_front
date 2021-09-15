import axios from 'axios';
import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/styles';

// const useStyles = makeStyles({
//   newUser: {
//     flex: 4
//   },
//   newAdminForm: {
//     display: 'inline-block',
//     flexWrap: 'wrap'
//   },

//   newAdminItem: {
//     width: '400px',
//     display: 'flex',
//     flexDirection: 'column',
//     marginTop: '10px',
//     marginRight: '20px'
//   },




//   // newAdminSelect: {
//   //   height: '40px',
//   //   borderRadius: '5px'
//   // },

//   newAdminButton: {
//     width: '220px',
//     border: 'none',
//     backgroundColor: 'darkblue',
//     color: 'white',
//     padding: '15px 1px',
//     fontWeight: 600,
//     borderRadius: '10px',
//     marginTop: '30px',
//     cursor: 'default'
//   }


// });


export default function Addadmin() {

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

  async function addadmin(e) {
    e.preventDefault();
    let body = {
      firstname: state.firstname,
      lastname: state.lastname,
      username: state.username,
      phonenumber: state.phonenumber,
      password: state.password
    }
    console.log(body)
    let r = await axios.post(`http://localhost:8000/user`, body)

    console.log(r)

  }





  return (

     <div style={{ display: 'flex', flexDirection: 'column', width: '15rem', margin: 'auto', padding: 'auto' }}>
  
        <h3 style={{fontFamily:"sans-serif" }}>New Admin</h3>
        <form onSubmit={addadmin} className="newAdminForm" >
          <div className="newAdminItem">

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

          <div className="newAdminItem">

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
          <div className="newAdminItem">

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
          <div className="newAdminItem">
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
          <div className="newAdminItem">
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
          <button type="submit" className="newAdminButton">create</button>
          
        </form>
     
    </div>
  )
}