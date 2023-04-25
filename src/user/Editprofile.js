import React from 'react';
import Navuser from"./Navuser"
import { useState,useEffect } from "react";
import axios from "axios";
import "./user.css"
import {useNavigate} from "react-router-dom";
import {toast} from 'react-toastify';
//import { useParams } from 'react-router-dom';
function Editprofile({user})
{
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const [euserid, setEuserid]  = useState('');

useEffect(() => {
  const id= sessionStorage.getItem("id")
  axios.get(`http://localhost:3001/userpage/editprofile?id=${id}`)
    .then(response => {
      setEuserid(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}, []);
const navigate =useNavigate()
  // Function to handle form submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    const id= sessionStorage.getItem("id")
    const usernamee =localStorage.getItem("username")
    // Make PUT request to update user profile
    axios.put(`http://localhost:3001/profile/${id}`,
     { username:usernamee,
      email:email,
      password:password })
      .then(res => {
        console.log(res.data);
        toast.success("Successfully Updated")
        navigate("/userpage/profile")
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div  className="profilebg">
      <Navuser/>
     <br></br>
     <center> <h1 className="si">UPDATE PROFILE </h1>    </center>
     <center>  <form onSubmit={handleSubmit} className="bloge" >
      <div >
       
      
         
          <input type="text" id="name" value={euserid.username || " "} onChange={(e) => setUsername(e.target.value)}
          placeholder="name"  disable/>
       
          
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} 
          placeholder="email"  required/>
       
          
          <input type="password" id="password"placeholder="password"
           value={password} onChange={(e) => setPassword(e.target.value)}  required />
       
          
          
        
       
        <button type="submit" className='profilebtn'>Update Profile</button>
         </div>
      </form>
      </center>
      </div>
    
        
    );
}
export default Editprofile;