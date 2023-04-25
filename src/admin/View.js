import React,{useState, useEffect} from "react";
import {Link,useParams} from 'react-router-dom';
import axios from "axios";
function View()
{
    const [user,setUser] =useState({});
          const {id} = useParams();
          useEffect (()=>
          {
            axios.get(`http://localhost:3001/dashboard/view/${id}`).then 
            ((resp)=> setUser({...resp.data[0]}))

          },[id])
    return(
        <div className="adminbge">
   <center>    
<h1 className="alignh1"> VIEW</h1>
<div  className="alignupdate">
<div className="bloge">
<p> USER CONTACT DETAILS </p>
<div>
    <strong> ID :</strong>
    <span> {id}</span>
    <br></br>
    <strong> NAME :</strong>
    <span> {user.username}</span>
    <br></br>
    <strong> EMAIL :</strong>
    <span> {user.email}</span>
    <br></br>
   
    <br></br>
    <Link to="/admin/dashboard"> GO BACK </Link>
</div>
</div>
 
</div>
</center>
</div>
    )
}
export default View;