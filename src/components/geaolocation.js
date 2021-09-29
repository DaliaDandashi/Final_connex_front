import react from 'react';
import './geolocation.css';
import TextField from "@material-ui/core/TextField";
import Test from './signup'
import img_clock from './image/clock.png';
import { Link } from 'react-router-dom';

export default function geolocation() {
    return (
        <div className="tripdiv">
            <div className="request_position">
                {/*    <Test /> */}
                <h1>Do you need transport for your event?</h1>
                <Link to="/Reservation">
                    <button className="btn_requset" >Make a reservation </button>
                </Link>
                <div className="p_Icon">
                    <div className='image_request' >
                        <img className="Icon_clock" src={img_clock} />
                    </div>
                    <div>
                        <p>Take X min</p>
                    </div>
                </div>
                {/* <div id="A">

                </div> */}

            </div>
        </div>
    )
}