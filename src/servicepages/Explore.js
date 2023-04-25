import  React from "react"
import Navuser from "../user/Navuser";
import "./service.css"
import { useState,useEffect } from "react";
import Axios from "axios";
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";
 function Explore()
{
const [euserid, setEuserid] = useState("");
    const [rolename, setRolename] = useState("");
    const [jobd, setJobd] = useState("");
    const [experience, setExperience] = useState(" ");
    const[skills,setSkills] = useState("");
    const id= sessionStorage.getItem("id")
    const explore= ()=>{
     
      Axios.post("http://localhost:3001/explore",{
        euserid:id,
        rolename:rolename,
        jobd:jobd,
        experience:experience,
        skills:skills
     })
        .then((response) =>
        {
        console.log(response);
        alert(response.message);
      }).catch(error => {
        console.log(error);
        alert('Failed to book appointment');
      });
    };
    function exploresubmit()
    {
      
        if(!rolename||!experience||!jobd||!skills)

            {
              toast.error("Please enter the fields")
            } 
          else
        {
          explore();
          toast.success("POSTED SUCCESSFULLY")
         
        }   
        
      }
      const navigate = useNavigate()
      function exploreview() 
      {
        
       navigate("/userpage/explore/view")
    }  
         
      return(
          <div className="exbg" >
              <Navuser/>
              <center>    <h1 className="e1"> EXPLORE TALENT </h1> </center> 
<form   className="displayee">
  <center>
   
        <div className="bloge">
        <input
      type="number"
       placeholder="userid" value={id}
       onChange={(e)=>{
        setEuserid(e.target.value);
      }} disabled
          ></input>
        <input
         type="text"
        
        placeholder=" Role Name"
      onChange={(e)=>{
          setRolename(e.target.value); 
        }}      required
      ></input>
       <input
         type="text"
        
        placeholder=" Job Description"
        onChange={(e)=>{
          setJobd(e.target.value);
        }} required 
      ></input>
       <input
         type="text"
        
        placeholder=" Experience"
        onChange={(e)=>{
          setExperience(e.target.value);
        }} required 
      ></input>
       <input
         type="text"
        
        placeholder="Skills"
        onChange={(e)=>{
          setSkills(e.target.value);
        }} required 
      ></input>
     
      <button onClick={ exploresubmit} >Add</button>
      <button onClick={ exploreview} >VIEW </button>
      
      </div>
      </center>
      </form>
      </div>
             
         
      );
 }

 export default Explore;
