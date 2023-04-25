import React from "react";
import "../index.css"
import music from "../img/music.mp3"
function Footer()
{
return(
<div>
<div className="footer">
    <div className="box-container">
        <div className="box">
            <h3>Contact Info</h3>
            <p><i className="fas fa-map-marker-alt">  </i>Chennai-600020,India</p>
            <p><i className="fas fa-envelope">  </i>ival@gmail.com</p>
            <p><i className="fas fa-phone">  </i>+000-000-000</p>
            <p><i className="fas fa-phone">  </i>+111-222-333</p>
        </div>
        <div className="box">
            <h3>Branch Location</h3>
            <a href="/">India</a>
            <a href="/">USA</a>
            <a href="/">France</a>
            <a href="/">Russia</a>
        </div>
        <div className="box">
            <h3>Quick Links </h3>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Service</a>
            <a href="/">FAQ</a>
            <a href="/">Login</a>
        </div>
        <div className="box">
            <h3>Follow Us</h3>
            <a href="/">Instagram</a>
            <a href="/">Facebook</a>
            <a href="/">Twitter</a>
            <a href="/">Linkedin</a>
        </div>
    </div>
    <h1 className="credit">© Copyright 2023 - IVAL. All Rights Reserved.</h1>
</div>
<audio id="myaudio" autoPlay="autoplay" loop="loop" controls="controls">
<source src={music} type="audio/mp3" />
</audio>

    </div>
);
}
export default Footer;