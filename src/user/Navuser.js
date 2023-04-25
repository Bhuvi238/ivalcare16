
import {NavLink} from 'react-router-dom';
import "./user.css";
//import logo from "../img/logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
//import Axios from "axios";
function Navuser() {
    const [click, setClick] = useState(false);
  // const usern = localStorage.getItem("username")
   const logout= ()=>
   {
    localStorage.removeItem("username")
    sessionStorage.removeItem("id")
   }
  /*const logout = async () => {
            try {
                const response = await fetch('/logout');
                const data = await response.json();
                if (data.result === 'SUCCESS') {
                    alert('User logout operation success.');
                   
                } else {
                    alert('User logout operation error (message: ' + data.message + ').');
                }
            } catch(e) {
                console.error(e);
                alert('Request error!');
            }
        }; */
    const handleClick = () => setClick(!click);
    
    return(
        <div>
        
  <>
    <nav className="navbar">
   
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
        IVAL
          
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink  exact   to="/userhome"   activeClassName="active"   className="nav-links"   onClick={handleClick} >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            
            
                    <div className="dropdown">
                <NavLink  activeClassName="active"  className="nav-links"  onClick={handleClick}>Service</NavLink>
                <div className="dropdown-content">
                    <Link to='/userpage/doctor'  className='linkt'>  DOCTOR </Link>
                    <Link to='/userpage/period'  className='linkt'> PERIOD</Link>
                    <Link to='/userpage/blog'   className='linkt'> BLOG</Link>
                    <Link to='/userpage/health'   className='linkt'> HEALTH</Link>
                    <Link to='/userpage/womenfriend'  className='linkt'>WOMENFRIEND</Link>
                        <Link to='/userpage/explore'  className='linkt'> EXPLORE TALENT</Link>
                      </div>
                        </div>
               
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/userpage/gallery"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
            Gallery

            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/userpage/profile"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
             Profile
            </NavLink>
          </li>
          <li className="nav-item">
           <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={logout}
            >
             Logout
            </NavLink>
        
          </li>
         
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  </>
        </div>
    )
}
export default Navuser;
