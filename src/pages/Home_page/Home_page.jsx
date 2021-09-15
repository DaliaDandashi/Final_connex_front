import React from 'react'
import img from './banner.jpg';
import Our_service from '../../components/our_service'
import Geolocation from '../../components/geaolocation'



export default function Home_page() {

    return (
        <div>

            <img className="banner" src={img} />
            <div style={{ overflowY: "scroll", height: "450px" }}></div>
            <div><Our_service/></div>
            <div><Geolocation/></div>
            
        </div>
      
    )
}