import react, { useEffect, useState } from 'react';
import './Reservation.css';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@mui/material/MenuItem';
import FormControl from "@material-ui/core/FormControl";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';

import { useHistory } from 'react-router-dom';

export default function Reservation() {

    const history = useHistory();
    const [trip, settrip] = useState("")
    const [sahar, setsahar] = useState("")
    const [time, settime] = useState("")
    const [date, setdate] = useState("")

    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [phonenumber, setphonenumber] = useState("")
    const [pickup_address, setpickup_address] = useState("")


    console.log(time)

    console.log(trip)

    async function makeapp(e) {
        e.preventDefault();

        let body = {
            tripe_title: trip,
            route: "route"
        }
        console.log({ body })
        let d = await axios.post(`http://localhost:8000/trip`, body)
            .then(res => {

                console.log(123, res.data.result.insertId)
                let id_tripp = res.data.result.insertId;

                let rbody = {
                    time: time,
                    date: date,
                    longitude: "x",
                    laltitude: "y",
                    empty_place: "0",
                    total_place: "0",
                    id_trip: id_tripp

                }
                console.log({ rbody })
                let y = axios.post(`http://localhost:8000/bus`, rbody).then(
                    dalia => {
                        //let id_buss = dalia.data.result.insertId;
                        // console.log(id_buss)
                        console.log({ dalia })


                        let ibody = {
                            firstname: firstname,
                            lastname: lastname,
                            phonenumber: phonenumber,
                            pickup_address: pickup_address,
                            id_bus: "1",
                            id_users: "2"

                        }
                        axios.post(`http://localhost:8000/reservation`, ibody)
                            .then(history.push('/'));



                    })

            }
            )
    }

    async function dd(trip) {

        if (trip == "Tripoli-Beirut") {
            setsahar("Tripoli-Beirut")
        } else {
            setsahar("Beirut-Tripoli")
        }

    }


    useEffect(() => {
        dd(trip)
    }, [trip])

    return (

        <div className="client_reserve">
            <center>
                <form onSubmit={makeapp}>
                    <h4 className="sa_ourstory" style={{ fontWeight: "bold" }}>Please fill out the quick form</h4>
                    <table className="table_reservation">
                        <div className="div_res">
                            <tr>
                                <td>
                                    <TextField
                                        required
                                        type="text"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        id="first name"
                                        label="First Name"
                                        autoComplete="first name"
                                        autoFocus
                                        name="name"
                                        size="small"
                                        onChange={(e) => setfirstname(e.target.value)}

                                    /> </td>
                                <td>
                                    <TextField
                                        required
                                        type="text"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        id="last name"
                                        label="Last Name"
                                        autoComplete="last name"
                                        autoFocus
                                        name="lastname"
                                        size="small"
                                        onChange={(e) => setlastname(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td> 
                                     <TextField
                                    required
                                    variant="outlined"
                                    margin="normal"
                                    type="text"
                                    fullWidth
                                    id="phone number"
                                    label="Phone number"
                                    autoComplete="phone number"
                                    autoFocus
                                    name="phone number"
                                    size="small"
                                    onChange={(e) => setphonenumber(e.target.value)}
                                />
                                </td>
                                <td> <TextField
                                    type="text"
                                    variant="outlined"
                                    margin="normal"
                                    // required
                                    fullWidth
                                    id="address"
                                    label="Pick up Address"
                                    autoComplete="address"
                                    autoFocus
                                    name="address"
                                    size="small"
                                    onChange={(e) => setpickup_address(e.target.value)}
                                /></td>
                            </tr>
                            <tr>
                                <td><TextField
                                 required
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="date_reservation"
                                    // label="Date of Reservation"
                                    type="date"
                                    autoComplete="date_reservation"
                                    autoFocus
                                    name="date_reservation"
                                    onChange={(e => setdate(e.target.value))}
                                    size="small"
                                /></td>
                                <td>
                                    <FormControl fullWidth>
                                        <InputLabel id="type-tripe">Trip</InputLabel>
                                        <Select
                                            labelId="type-tripe"
                                            id="type-tripe"
                                            value={trip}
                                            label="Trip"
                                            onChange={(e) => dd(settrip(e.target.value))}
                                            size="small"

                                        >
                                            <MenuItem >Type of Trip </MenuItem>
                                            <MenuItem value="Tripoli-Beirut">Tripoli-Beirut</MenuItem>
                                            <MenuItem value="Beirut-Tripoli">Beirut-Tripoli</MenuItem>
                                        </Select>

                                    </FormControl>
                                </td>
                            </tr>



                            {sahar == "Tripoli-Beirut" ? (
                                <div>
                                    <FormControl style={{ minWidth: "30%", marginRight: "4%" }} >
                                        <InputLabel id="type-tripe"  >Monday to Friday</InputLabel>
                                        <Select
                                            // size="small"
                                            labelId="time"
                                            id="time"
                                            value={time}
                                            label="Time"
                                            onChange={(e) => settime(e.target.value)}


                                        >

                                            <MenuItem value="6:00 am">6:00 am</MenuItem>
                                            <MenuItem value="7:00 am">7:00 am</MenuItem>
                                            <MenuItem value="8:00 am">8:00 am</MenuItem>
                                            <MenuItem value="9:00 am">9:00 am</MenuItem>
                                            <MenuItem value="10:00 am">10:00 am</MenuItem>
                                            <MenuItem value="12:00 pm">12:00 pm</MenuItem>
                                            <MenuItem value="2:00 pm">2:00 pm</MenuItem>

                                        </Select>
                                    </FormControl>

                                    <FormControl style={{ minWidth: "30%", marginRight: "4%" }}>
                                        <InputLabel id="type-tripe">Saturday</InputLabel>
                                        <Select
                                            labelId="time"
                                            id="time"
                                            value={time}
                                            label="Time"
                                            onChange={(e) => settime(e.target.value)}

                                        >


                                            <MenuItem value="9:00 am">9:00 am</MenuItem>
                                            <MenuItem value="11:00 am">11:00 am</MenuItem>

                                        </Select>
                                    </FormControl>

                                    <FormControl style={{ minWidth: "30%" }}>
                                        <InputLabel id="type-tripe">Sunday</InputLabel>
                                        <Select
                                            labelId="time"
                                            id="time"
                                            value={time}
                                            label="Time"
                                            onChange={(e) => settime(e.target.value)}

                                        >

                                            <MenuItem value="11:00 am">11:00 am</MenuItem>

                                        </Select>
                                    </FormControl>
                                </div>) : (<div>


                                    <FormControl style={{ minWidth: "30%", marginRight: "4%" }}>
                                        <InputLabel id="type-tripe">Monday to Friday</InputLabel>
                                        <Select
                                            labelId="time"
                                            id="time"
                                            value={time}
                                            label="Time"
                                            onChange={(e) => settime(e.target.value)}

                                        >


                                            <MenuItem value="9:00 am">9:00 am</MenuItem>
                                            <MenuItem value="11:00 am">11:00 am</MenuItem>
                                            <MenuItem value="1:00 pm">1:00 pm</MenuItem>
                                            <MenuItem value="2:30 pm">2:30 pm</MenuItem>
                                            <MenuItem value="3:30 pm">3:30 pm</MenuItem>
                                            <MenuItem value="4:30 pm">4:30 pm</MenuItem>
                                            <MenuItem value="5:00 pm">5:00 pm</MenuItem>
                                        </Select>

                                    </FormControl>


                                    <FormControl style={{ minWidth: "30%", marginRight: "4%" }}>
                                        <InputLabel id="type-tripe">Saturday</InputLabel>
                                        <Select
                                            labelId="time"
                                            id="time"
                                            value={time}
                                            label="Time"
                                            onChange={(e) => settime(e.target.value)}

                                        >



                                            <MenuItem value="12:00 pm">12:00 pm</MenuItem>

                                        </Select>
                                    </FormControl>


                                    <FormControl style={{ minWidth: "30%" }}>
                                        <InputLabel id="type-tripe">Sunday</InputLabel>
                                        <Select
                                            labelId="time"
                                            id="time"
                                            value={time}
                                            label="Time"
                                            onChange={(e) => settime(e.target.value)}

                                        >


                                            <MenuItem value="3:00 pm">3:00 pm</MenuItem>

                                        </Select>
                                    </FormControl>

                                </div>)
                            }
                            <div className="DA_Submit_div">  <button type="submit" className="DA_Submit">
                                Submit </button></div>

                        </div>


                    </table>
                </form>
            </center>
        </div>
    )
}