import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Dashboard from '../../components/Dashboard/Dashboard';
import './mssg.css';
// import NavBar from '../../components/NavBar/NavBar'



export default function Seemssg() {

    const [mssgs, setmssgs] = useState([])

    async function getall() {

        await axios.get(`http://localhost:8000/mssg`).then(
            res => {
                console.log(res)
                let mssgs = res.data.result;
                setmssgs(mssgs)
            }
        )
    }



    async function deletemssg(id) {

        await axios.delete(`http://localhost:8000/mssg/${id}`)

        setmssgs([...mssgs].filter(m => m.id != id))

    }

    useEffect(() => {
        getall()
    }, [])

    return (
        <div>
            {/* <NavBar/> */}
            <Dashboard />

            <div className="mssg_div">
                <table className="tab_mssg">

                    <tr className="tr_mssg">
                        <td className="td_mssg">Name</td>
                        <td className="td_mssg">Email</td>
                        <td className="td_mssg">Phone Number</td>
                        <td className="td_mssg">Message</td>
                        <td className="td_mssg">Delete</td>
                    </tr>

                    {mssgs.map(mssg =>
                        <tr key={mssg.id} className="tr_mssg_M">

                            <td className="td_mssg">{mssg.name}</td>
                            <td className="td_mssg">{mssg.email}</td>
                            <td className="td_mssg">{mssg.phonenumber}</td>
                            <td className="td_mssg">{mssg.message}</td>
                            <td className="td_mssg"><button onClick={() => deletemssg(mssg.id)} className="mssg_button" >Delete</button>      </td>

                        </tr>

                    )}
                </table>
            </div>
        </div>
    )
}