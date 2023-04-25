import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import Navuser from "../user/Navuser";
import "./user.css";

function ProfilePage() {
  

   
  const [userr, setUserr] = useState([]);
 const [duserr,setDuserr] =useState([])
 const [tuserr,setTuserr] =useState([])
 const [buserr,setBuserr] =useState([])
 const [euserr,setEuserr] =useState([])
 const [wuserr,setWuserr] =useState([])
  //const [error, setError] = useState(null);

  useEffect(() => {
    const username= localStorage.getItem("username")
    axios.get(`http://localhost:3001/userpage/profile?username=${username}`)
    . then((response) => {
     setUserr(response.data);
    
     })
     .catch(error => {
         setUserr(null);
         console.log(error)
     });
     
  }, []);
  useEffect(() => {
    const id= sessionStorage.getItem("id")
    axios.get(`http://localhost:3001/userpage/dprofile?id=${id}`)
    . then((response) => {
     setDuserr(response.data);
    
     })
     .catch(error => {
         setDuserr(null);
         console.log(error)
     });
     
  }, []);
  useEffect(() => {
    const id= sessionStorage.getItem("id")
    axios.get(`http://localhost:3001/userpage/tprofile?id=${id}`)
    . then((response) => {
     setTuserr(response.data);
    
     })
     .catch(error => {
         setTuserr(null);
         console.log(error)
     });
     
  }, []);
  useEffect(() => {
    const id= sessionStorage.getItem("id")
    axios.get(`http://localhost:3001/userpage/bprofile?id=${id}`)
    . then((response) => {
     setBuserr(response.data);
    
     })
     .catch(error => {
         setBuserr(null);
         console.log(error)
     });
     
  }, []);
  useEffect(() => {
    const id= sessionStorage.getItem("id")
    axios.get(`http://localhost:3001/userpage/eprofile?id=${id}`)
    . then((response) => {
     setEuserr(response.data);
    
     })
     .catch(error => {
         setEuserr(null);
         console.log(error)
     });
     
  }, []);
  useEffect(() => {
    const id= sessionStorage.getItem("id")
    axios.get(`http://localhost:3001/userpage/wprofile?id=${id}`)
    . then((response) => {
     setWuserr(response.data);
    
     })
     .catch(error => {
         setWuserr(null);
         console.log(error)
     });
     
  }, []);
  
   return (
    <div className="profilebg">
       <Navuser/>
      
      <br></br>
      <br></br>
            
              <div className="wrappere">
              
    <div className="left">
      
        <img src="https://static.vecteezy.com/system/resources/thumbnails/007/461/014/small/profile-gradient-logo-design-template-icon-vector.jpg" alt="user" width="100"/>
        <h4>ival{userr.username}</h4>
         <p>User</p>
         <h4>USERID</h4>
            <p>{userr.id}</p>
            <h4>EMAIL</h4>
                    <p>{userr.email}</p>
    </div>
   
    <div className="right">
       
        
      <div className="projects">
            <h3> Recent Activity</h3>
            <div className="projects_data">
                 <div className="data">
                    <h4>Doctor Appointment</h4>
                   <p> {duserr.fname}</p>
                   <p> {duserr.lname}</p>
                   <p> {duserr.time}</p>
                   <p> {duserr.date}</p>
                <p> {duserr.symptoms}</p>
                 <p>Status-{duserr.status}</p>
                 <p> {duserr.dcid}</p>
                 </div>
                 <div className="data">
                   <h4>Tracker</h4>
                    <p>{tuserr.nextperiod}</p>
              </div>
              <div className="data">
                   <h4>Explore Talent</h4>
                   <p>{euserr.euserid} </p>
                   <p>{euserr.rolename} </p>
                   
                   <p>{euserr.etid} </p>
              </div>
              <div className="data">
                   <h4>Blog</h4>
                   <p> {buserr.buserid}  </p>
                   <p>  {buserr.name} </p>
                   
                   <p>   {buserr.bgid} </p>
              </div>
              <div className="data">
                   <h4>Wishlist</h4>
                   <p> {wuserr.wuserid}  </p>
                   <p>  {wuserr.wishlist} </p>
                   <p> {wuserr.location} </p>
                 <p>   {wuserr.wfid} </p>
                 <p>Status-{wuserr.status}</p>
              </div>
            </div>
        </div>
 <center>   <div >
        <Link to={`/userpage/profile/edit`}> 
        <button className="profilebtn"> EDIT PROFILE </button> </Link>
      </div>
      </center>    
    </div>
</div>
    </div>
  );
}

export default ProfilePage;
