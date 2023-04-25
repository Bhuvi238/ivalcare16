import React from "react";
import {Link} from 'react-router-dom';
import logo from "../img/logo.png";
import "./admin.css";
import axios from "axios";
import {useState,useEffect} from "react";
//import { useNavigate } from "react-router-dom";
function Navfile()
{
    
  function handleSubmit(e)
  {
    e.preventDefault();
  const hamburger = document.getElementById('menu');
  const navigation = document.getElementById('navigation');
  hamburger.addEventListener('click', function () {
      navigation.classList.toggle('active')
      console.log('clicked');
  })
}

const [count, setCount] = useState(null);
const [dcount, setDcount] = useState(null);
const [wcount, setWcount] = useState(null);
const [bcount, setBcount] = useState(null);

    useEffect(() => {
      axios.get('http://localhost:3001/userscount')
        .then(response=> setCount(response.data.count))
        .catch(error => console.error(error));
    }, []);
    useEffect(() => {
        axios.get('http://localhost:3001/dcount')
          .then(response=> setDcount(response.data.count))
          .catch(error => console.error(error));
      }, []);
      useEffect(() => {
        axios.get('http://localhost:3001/wishcount')
          .then(response=> setWcount(response.data.count))
          .catch(error => console.error(error));
      }, []);

      useEffect(() => {
        axios.get('http://localhost:3001/blogcount')
          .then(response=>  setBcount(response.data.count))
          .catch(error => console.error(error));
      }, []);
  
  
 
 

    return(
        <div>  
         <div className="warning">
        <h2> Sorry, this page doesn't support your device, Please use large screen device to see this page </h2>
    </div>

    <section className="adminnave" >
      
        <div className="navbare" id="navigation">
      <div className="logoalign">  <img src={logo} alt=""/> 
      <h2>IVAL  </h2></div>
            <ul className="center-nav">
                <li><i className="fa-solid fa-house"></i><Link  to="/admin/adminhome">Home </Link></li>
                <li><i className="fas fa-user-circle"></i><Link to="/admin/dashboard"> User Details</Link></li>
                <li><i className="fa fa-plus-square"></i><Link  to="/admin/doctordetails">Doctor Appointments</Link></li>
                <li><i className="fa-solid fa-copy"></i><Link   to="/admin/trackerdetails">Tracker Details</Link></li>
                <li><i className="fa-solid fa-comment"></i><Link  to="/admin/wishlistdetails">Women Friend</Link></li>
                <li><i className="fa-sharp fa-solid fa-floppy-disk"></i><Link  to="/admin/exploretalent">Explore Talent</Link></li>
                <li><i className="fab fa-blogger-b"></i><Link  to="/admin/blogdetails">Blog </Link></li>
            </ul>
            <ul className="bottom-nav">
                <li><i className="fa-solid fa-power-off"></i><Link  to="/">Logout </Link></li>
              
            </ul>
        </div>

    
        <div className="main-content">
            <div className="main-top">
                <div className="bars"  onClick={handleSubmit} id="menu">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>

           
            <div className="dashboard">
           <center>    <h2 className="heading"> Dashboard </h2> </center> 
                <div className="color-boxe">
                    <div className="boxe ">
                        <p> <i className="fa-solid fa-thumbs-up"></i> </p>
                      
                        <p> Total Users </p>
                        <div>  {count === null ? 'Loading...' : ` ${count} `}</div>
                     
                    </div>
                    <div className="boxe ">
                        <p><i className="fa-solid fa-comment"></i></p>
                        <p> Total appointments </p>
                        <div>  {dcount === null ? 'Loading...' : ` ${dcount} `}</div>
                    </div>
                    <div className="boxe">
                        <p> <i className="fa-solid fa-share"></i> </p>
                        <p> Total wishlist </p>
                        <div>  {wcount === null ? 'Loading...' : ` ${wcount} `}</div>
                    </div>
                    <div className="boxe">
                        <p> <i className="fa-sharp fa-solid fa-floppy-disk"></i> </p>
                        <p> Total Post </p>
                        <div>  {bcount === null ? 'Loading...' : ` ${bcount} `}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

 

</div>


    )
}
export default Navfile;