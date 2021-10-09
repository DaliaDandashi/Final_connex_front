import react, { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom'
import axios from "axios";
import Dashboard from "../../components/Dashboard/Dashboard";
import './Entry_Dash_Admin.css';

import SessionContext from '../../components/session/SessionContext';

export default function Entry_Dash_Admin() {

    return (
        <div className="Entry_dash_div">
           <Dashboard />

            {/* <div className="pad"> */}
                <center>
                    <h1 className="Entry_Admin_h1">Hello Admin!</h1>
                </center>
            
            {/* </div> */}
        </div >
    )
}


