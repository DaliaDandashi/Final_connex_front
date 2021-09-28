import react, { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom'
import axios from "axios";
import Dashboard_Drive from "../../components/Dashboard_Driver/Dashboard_Driver";
import './DashboardDriver.css';

import SessionContext from '../../components/session/SessionContext';
export default function DashboardDriver() {

    return (
        <div className="Entry_dash_div">
           <Dashboard_Drive />

            {/* <div className="pad"> */}
                <center>
                    <h1 className="Entry_Admin_h1">hello Driver!</h1>
                </center>
            
            {/* </div> */}
        </div >
    )
}