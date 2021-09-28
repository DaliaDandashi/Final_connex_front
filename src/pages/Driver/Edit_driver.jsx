import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import './Edit_driver.css'

export default function Edit_driver(props) {
    let id = props.match.params.id
    const history = useHistory();
    const [user, setuser] = useState("")
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [phonenumber, setphonenumber] = useState("")
    const [username, setusername] = useState("")

    console.log(firstname)

    console.log(id)
    async function getdrive(id) {
        let y = await axios.get(`http://localhost:8000/user/${id}`)
        let p = y.data.result
        setfirstname(p.firstname)
        setlastname(p.lastname)
        setphonenumber(p.phonenumber)
        setusername(p.username)
    }

    useEffect(() => {
        getdrive(id)
    }


        , []

    )

    async function updrive(e) {
        e.preventDefault();

        let body = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            phonenumber: phonenumber
        }


        let y = await axios.put(`http://localhost:8000/user/${id}`, body)
        console.log(y)
    }



    return (

        <div style={{ display: 'flex', flexDirection: 'column', width: '15rem', margin: 'auto', padding: 'auto' }}>
            <h3 style={{ fontFamily: "sans-serif", color: ' #154758' }}> Edit Driver</h3>
            <form onSubmit={updrive} >
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
                        value={firstname}
                        onChange={(e) => setfirstname(e.target.value)}
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
                        value={lastname}
                        onChange={(e) => setlastname(e.target.value)}
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
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
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
                        value={phonenumber}
                        onChange={(e) => setlastname(e.target.value)}
                    />
                </div>
                <div className="Sub_Back">
                    <div><button type='submit' className="button_add_driver"> Save</button></div>
                    <div> <button type='submit' className="button_add_driver" onClick={() =>
                        history.push({ pathname: `/List_driver` })
                    }  >
                        Back
                    </button>
                    </div>
                </div>
            </form>
        </div >
    )
}