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
            <Navbar/>
            <img className="banner" src={img} />
            <div style={{ overflowY: "scroll", height: "450px" }}></div>
            <div><Our_service /></div>
            <div><Geolocation /></div>
            <div><Maps/></div>
            <div className="Home_footer">
                <Footer />
            </div>


        </div>

    )
}