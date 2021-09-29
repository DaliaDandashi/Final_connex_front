import React from "react";
import './Maps.css';
import img from '../image/rouute.png'

export default function Maps() {
    return (
        <div >
            {/* <img  src={img} className="maps" /> */}
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.2909479168015!2d35.820022514274974!3d34.44476160439204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1521f17d6d0ce73d%3A0x4ab04d2f3fddc234!2sConnext%20ISP!5e0!3m2!1sen!2slb!4v1632834264542!5m2!1sen!2slb"  style={{width="600",height="450", allowfullscreen="" ,loading="lazy"}} ></iframe> */}

            <div class="gmap_canvas">
                <iframe width="1400" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=lebanon%20tripoli%20and%20beirut&t=&z=13&ie=UTF8&iwloc=&output=embed"  ></iframe>
                <a href="https://www.embedgooglemap.net" className="gmap_canvas"></a>

            </div>
        </div>

    )
}
