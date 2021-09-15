import React, { useEffect, useState } from 'react'
import axios from 'axios'


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
            admin panel

            <table style={{ border: '2px solid black', margin: 'auto', padding: 'auto' }} >
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
                        <td style={{ border: '2px solid black' }} >{admin.phonenumber}</td>



                        {/* <td><button onClick={() => deleteadmin(admin.id)} >delete</button></td> */}

                    </tr>


                )}






            </table>



        </div>
    )
}