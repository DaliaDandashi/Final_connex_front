import React from 'react'
import img from './banner.jpg';
import Our_service from '../../components/our_service'
import Geolocation from '../../components/geaolocation'
import Maps from '../../components/Maps/Maps';
import Footer from '../../components/footer/Footer';
import './Home_page.css';
import Navbar from '../../components/Navbar';




export default function Home_page() {

    return (
        <div>
            <Navbar />
            <img className="banner" src={img} />

            <div style={{ overflowY: "scroll", height: "450px" }} className="div_home_style">
                <center>
                <h1 className="H1_A_H">FAST  &  SAFE</h1>
                <h2 className="H2_A_H">BUS SERVICE</h2>
                {/* <a href="#" id="download">Download</a> */}
                </center>
            </div>

            <div><Our_service /></div>
            <div className="M_G">
                <div><Maps /></div>
                <div id="A"></div>
                <div className="Home_geo"><Geolocation /></div>

                <div className="Home_footer">
                    <Footer />
                </div>
            </div>


        </div>

    )
}