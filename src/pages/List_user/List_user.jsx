import React, { useEffect, useState } from "react";
import axios from 'axios'
import Dashboard from "../../components/Dashboard_Driver/Dashboard_Driver";
import './List_user.css';

export default function ListUser() {

    const [ListUser, setListUser] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await axios.get(`http://localhost:8000/joinuser`)
                .then(res => {
                    let data = res.data.result;
                    setListUser(data);
                });
        }
        fetchData();
    }, []);

    return (
        <div>
            <div><Dashboard /></div>

            <div className="List_user_div">
                <table className="tab_List_user">

                    <tr className="tr_tab_List">
                        <td className="td_tab_List">First Name</td>
                        <td className="td_tab_List">Last Name</td>
                        <td className="td_tab_List">phone Number</td>
                        <td className="td_tab_List">Pickup Address</td>
                        <td className="td_tab_List">Trip</td>
                        <td className="td_tab_List">Date</td>
                        <td className="td_tab_List">Time</td>
                    </tr>

                    {ListUser.map(List_user =>
                        <tr className="tr_tab_List_M">

                            <td className="td_tab_List">{List_user.firstname}</td>
                            <td className="td_tab_List">{List_user.lastname}</td>
                            <td className="td_tab_List">{List_user.phonenumber}</td>
                            <td className="td_tab_List">{List_user.pickup_address}</td>
                            <td className="td_tab_List">{List_user.trip}</td>
                            <td className="td_tab_List">{List_user.date}</td>
                            <td className="td_tab_List">{List_user.time}</td>

                        </tr>

                    )}
                </table>
            </div>


        </div>
    )
}