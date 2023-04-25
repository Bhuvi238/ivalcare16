import React from "react";
import {Link } from  'react-router-dom';
import "../index.css"
import logo from "../img/logo.png";
function Nav()
{
    return (
        <div >
<div className="header">  
<div className="logoi"> <img   src={logo} alt="" width="60"/> </div>
         <ul className="main-nav">
        <li> <Link className="ae" to='/' >  HOME </Link>  </li> 
        <li>   <Link className="ae"to='/about' > ABOUT</Link>  </li>
        <li>  <Link className="ae"to='/service' > SERVICE</Link> </li>
        <li>   <Link className="ae" to='/help' >    HELP </Link>  </li>
                    <li>    
                    <div class="dropdown">
                <Link className="ae" to='/signup' >   LOGIN</Link>
                <div className="dropdown-content">
                    <Link to='/signup'  > USER LOGIN </Link>
                    <Link to='/adminlogin' > ADMIN LOGIN</Link>
                    
                
                      </div>
                        </div>
                        </li>
        </ul>
</div> </div>)
}
export default  Nav;
