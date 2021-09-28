import React from "react";
import './About_us_2.css';
import iimm1 from './mechanical-gears-.png'
import iimm2 from './face-scan.png'
import iimm3 from './headphones.png'
import iimm4 from './timer.png'
export default function About_us2() {
    return (
        <div className="pic12333">

            <div className="container  editingg"  >

                <div class="row " >

                    <div class="firstt-div col-lg-4 ">
                        <div class="myanimationn">
                            <h1 class="hereweare">____</h1>
                            <p class="widthforr"><b>Why Us</b></p>
                            <h1 class="hereweare hereplease">______</h1>

                        </div>
                        <div class="mmm">
                            <p className="p_about_p1">Big agencies have salaries, personnel, and office space rent to pay while still making a profit, but we don't. Which means, you get the same quality of work, for cheaper prices</p>
                            <p className="p_about_p1">Our purpose is to serve the community we live in, and play a part in its growth.</p>
                        </div> </div>

                    <div class="col-lg-4 ">
                        <div class="second-div">


                            <div > <img class="iim1" src={iimm1} />
                                <h5 className="h5_about">      Experience</h5> </div>
                            <p className="p_about">12+ years of experience in both marketing and advertising.</p>

                            <div>

                                <img class="iim1" src={iimm2} />

                                <h5 className="h5_about">Education</h5>
                                <p className="p_about"> Bachelor Degrees in Advertising & Marketing, Web Development & Design, and Graphic Design.</p>
                            </div> </div>
                    </div>


                    <div class=" col-lg-4">
                        <div class="third-div">
                            <div>

                                <img class="iim1" src={iimm3} />
                                <h5 className="h5_about">
                                    Price
                                </h5>
                                <p className="p_about">Very competitive prices that are affordable to smaller businesses.</p>
                            </div>
                            <div>
                                <img class="iim1" src={iimm4} />
                                <h5 className="h5_about">Customer Support</h5>
                                <p className="p_about">
                                    Constant follow up and support, any day, any time.
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>


    )
}