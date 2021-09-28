import { margin } from '@material-ui/system';
import React from 'react';
import About_us from '../../components/about_us/About_us';
 import Footer from '../../components/footer/Footer'
import About_us2 from '../../components/about_us/About_us_2';
import Navbar from '../../components/Navbar';



export default function ABOUT_US() {



    return (
        <div className="ab_us">
<Navbar/>
            < About_us />
            <About_us2 />
            
            <Footer />
           

        </div>

    )
}
