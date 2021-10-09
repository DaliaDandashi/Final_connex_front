import react, { useState, useEffect, useContext } from "react";
import { useHistory, Link } from 'react-router-dom'
import axios from "axios";
import Dashboard from "../../components/Dashboard/Dashboard";
import './List_driver.css';

import SessionContext from '../../components/session/SessionContext';
export default function List_driver() {
    let history = useHistory();
    const [ListDriver, setListDriver] = useState([]);



    async function fetchData() {
        let y = await axios.get(`http://localhost:8000/driversss`)
            .then(res => {
                let data = res.data.result;
                setListDriver(data);
            });

    }


    async function deletedrive(id) {
        let y = await axios.delete(`http://localhost:8000/user/${id}`)
        console.log(y)
        setListDriver(ListDriver.filter(l => l.id != id))
    }


    console.log(ListDriver)

    useEffect(() => {

        fetchData();
    }, []);
    
    return (


        <>
            <div>
                <Dashboard />
            </div>
            <center>
            <button onClick={() => history.push('/adddriver')}  className="Add_Driber_button">Add Driver</button>
            </center>
            <div>
                <center>
                    <div className="List_Driver_div">
                        <table className="tab_List_Driver">

                            <tr className="tr_tab_List">
                                <td className="td_tab_List">First Name</td>
                                <td className="td_tab_List">Last Name</td>
                                <td className="td_tab_List">Username</td>
                                <td className="td_tab_List">Phone Number</td>
                                <td className="td_tab_List">Delete</td>
                                <td className="td_tab_List">Edit</td>

                            </tr>

                            {ListDriver.map(List_driver =>
                                <tr className="tr_tab_List_M">

                                    <td className="td_tab_List">{List_driver.firstname}</td>
                                    <td className="td_tab_List">{List_driver.lastname}</td>
                                    <td className="td_tab_List">{List_driver.username}</td>
                                    <td className="td_tab_List">{List_driver.phonenumber}</td>
                                    <td className="td_tab_List"><button onClick={() => deletedrive(List_driver.id)} className="list_button">Delete</button></td>
                                    <td className="td_tab_List"><Link to={`Edit_driver/${List_driver.id}`} className="edit_list_driver">Edit</Link></td>



                                </tr>

                            )}
                        </table>
                    </div>
                </center>
            </div>

        </>
    )
}


