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
    const [username, setusername] = useState("")
    const [phonenumber, setphonenumber] = useState("")
   

    console.log(firstname)

    console.log(id)

    async function getdrive(id) {

        let y = await axios.get(`http://localhost:8000/user/${id}`)
        let p = y.data.result
        setfirstname(p.firstname)
        setlastname(p.lastname)
        setusername(p.username)
        setphonenumber(p.phonenumber)
        
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


          await axios.put(`http://localhost:8000/user/${id}`, body).then(()=>{history.push('/List_driver')})
         
        }

    

    return (

        <div style={{ display: 'flex', flexDirection: 'column', width: '15rem', margin: 'auto', padding: 'auto' }}>
            <h3 style={{ fontFamily: "sans-serif", color: ' #154758' }}> Edit Driver</h3>
            <form onSubmit={updrive} >
                <div className="newDriverItem">
                    <TextField
                        required
                        type="text"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="firstname"
                        label="Firstname"
                        autoComplete="firstname"
                        autoFocus
                        name="firstname"
                        value={firstname}
                        onChange={(e) => setfirstname(e.target.value)}
                    />
                </div>

                <div className="newDriverItem">

                    <TextField
                        required
                        type="text"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="lastname"
                        label="Lastname"
                        autoComplete="lastname"
                        autoFocus
                        name="lastname"
                        value={lastname}
                        onChange={(e) => setlastname(e.target.value)}
                    />
                </div>

                <div className="newDriverItem">

                    <TextField
                        required
                        type="text"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="username"
                        label="Username"
                        autoComplete="username"
                        autoFocus
                        name="username"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                    />
                </div>

                <div className="newDriverItem">
                    <TextField
                        required
                        type="phonenumber"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="phonenumber"
                        label="PhoneNumber"
                        autoComplete="phonenumber"
                        autoFocus
                        name="phonenumber"
                        value={phonenumber}
                        onChange={(e) => setphonenumber(e.target.value)}
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