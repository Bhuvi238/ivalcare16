import React from 'react';
import {Link} from 'react-router-dom';
import Navuser from "./Navuser";
import {useState} from "react"
import "./user.css"
function Userpage()
{
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 5000);
  }
    return (
      !loading && (
        <div>
            <Navuser/>
           <br></br>
<div className="servicec">

            <Link to='/userpage/doctor'  >  DOCTOR </Link>
            <Link to='/userpage/period' > PERIOD</Link>
            <Link to='/userpage/blog' > BLOG</Link>
            <Link to='/userpage/health' > HEALTH</Link>
            <Link to='/userpage/womenfriend'>WOMENFRIEND</Link>
            <Link to='/userpage/explore' > EXPLORE TALENT</Link> 
            
            </div>
        </div>
      )
    )
}
export default Userpage;