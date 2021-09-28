import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import "./Adminpanel.css";


export default function Adminpanel() {


    const [admins, setadmins] = useState([])


    async function getadmins() {

        let s = await axios.get(`http://localhost:8000/user`)

        console.log("haydi l s", s.data.result)

        let resultt = s.data.result;
        setadmins(resultt)
    }



    // async function deleteadmin(id) {

    //     await axios.delete(`http://localhost:8000/user/${id}`)


    //     setadmins(admins.filter(s => s.id != id))

    // }



    useEffect(() => {

        getadmins()

    }, [])



    return (
        <div>
            <div className='HomeAdminContainer'>

                <div className='b1'>
                    <Link to="/addUser"> <h2> Admim </h2></Link>
                </div>

                <div className='b2'>
                    <h2>Driver</h2>
                </div>
                <div className='b3'>
                    <h2>customer</h2>
                </div>
            </div>
            {/* <table style={{ border: '2px solid black', margin: 'auto', padding: 'auto' }} >
                <tr style={{ border: '2px solid black' }} >
                    <td style={{ border: '2px solid black' }} >firstname</td>
                    <td style={{ border: '2px solid black' }} >lastname</td>
                    <td style={{ border: '2px solid black' }} >username</td>
                    <td style={{ border: '2px solid black' }} >phone number</td>
                    <td style={{ border: '2px solid black' }} >delete</td>
                </tr>

                {admins.map(admin =>
                    <tr style={{ border: '2px solid black' }}  >
                        <td style={{ border: '2px solid black' }} >{admin.firstname}</td>
                        <td style={{ border: '2px solid black' }} >{admin.lastname}</td>
                        <td style={{ border: '2px solid black' }} >{admin.username}</td>
                        <td style={{ border: '2px solid black' }} >{admin.phonenumber}</td> */}



            {/* <td><button onClick={() => deleteadmin(admin.id)} >delete</button></td> */}

            {/* </tr>


                )}






            </table> */}



        </div>
    )
}