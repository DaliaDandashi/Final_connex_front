import React from 'react';
import Getin2 from '../../components/Getin_touch/Getin2/getin2';
import Getin3 from '../../components/Getin_touch/Getin3/getin3';
import style from './get_in_touch.module.css'
// import Header from '../../components/Home_Page/header/header';
import Footer from '../../components/footer/Footer';
import About1 from '../../components/Getin_touch/About1/about1';
import Navbar from '../../components/Navbar';
export default function Getin() {


    return (
        <div class='fadivget'>
           <Navbar/>
            <About1 />
            <Getin2 />
            <Getin3 />
            <Footer />
        </div>
    )
}



