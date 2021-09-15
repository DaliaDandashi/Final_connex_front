import react from 'react';
import  './our_service.css';
import img1 from './image/search-location.png';
import img2 from './image/pay.png';
import img3 from './image/family.png';
import img4 from './image/fast.png';

export default function our_service() {
    return (
        <div>
            <div className="container">
                <body className="sa_section1">
                    <h2 className="sa_firsth">_______________</h2>
                    <h1 className="sa_ourstory"> OUR SERVICES</h1>
                    <h2 className="sa_secondh">____________</h2>

                </body>


                <div class="container2 ">
                    <div class="row">

                        <div className='imageContainer' >
                            <img src="/assets/img/chauffer2.jpg" id="img_about" alt="no picture" />
                        </div>



                        <div class="sa_section3" >
                            <div class='DA_anim1_se part1'>
                                <img className="DA_icon_S" src={img1} />
                                <h4 className="DA_h4">SEARCH LOCATION</h4>
                            </div>
                            <div class='DA_anim1_se part1'>
                                <img className="DA_icon_S" src={img2} />
                                <h4 className="DA_h4">EASY PAYMENT</h4>
                            </div>
                            <div class='DA_anim1_se part1'>
                                <img className="DA_icon_S" src={img3} />
                                <h4 className="DA_h4">MAKE TRIP</h4>

                            </div>
                            <div class='DA_anim1_se part1'>
                                <img className="DA_icon_S" src={img4} />
                                <h4 className="DA_h4">FAST & BEST SERVICE</h4>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}