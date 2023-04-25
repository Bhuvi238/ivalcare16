import React from "react";
import { useState } from "react";
import Axios from "axios";
//import Login from "./Login"
import "./login.css";
import "../index.css"
import {useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
//import Footer from '../pages/Footer';
import Nav from '../pages/Nav';
function Adminlogin()
{
    
    const [ausername,setAusername] = useState("");
    const [apassword,setApassword] = useState("");
    
 
     
    const alogin = ()=>{
      Axios.post("http://localhost:3001/alogin",{
        username:ausername,
        password:apassword
      }).then((response)=>{
        if(response.data.message)
        {
          alert(response.data.message);
          navigate("/")
        }
        
        else
        {
          toast.success("Succesfully login")
          alert("Hi Welcome" + response.data[0].username);
         
        }
      });
    };
    const navigate = useNavigate();
    const handleAlogin=() =>
    {
    if(!ausername ||!apassword)
    {
      toast.error("Please fill all the fields");
    }
    else if (!/^[a-zA-Z]+$/.test(ausername) ) {
      toast.error("Name fields should only contain letters");
    }
    else
    {
      alogin();
      
      navigate("/admin/adminhome");
  }
}
    return(
    <div className="mainbody">
      <Nav/>
   
         <br/>
         <center>
        <div className="adminform" >
                <form>
                    <h1 className="adminhead">ADMIN LOGIN</h1>
                    <br></br> 
                    <input type="text" name="username" placeholder="username"  onChange={(e)=>{
                setAusername(e.target.value);
              }} required/>
                <br></br>
                    <input type="password" name="pswd" placeholder="Password" onChange={(e)=>{
                setApassword(e.target.value);
              }} required/>
              <br></br>
                    <button onClick={ handleAlogin}>Login</button>
             
                    <br></br>   </form>
                    <br></br> 
           
            </div>
        </center>
        <br>
        </br>
         
    </div>);
    
}
export default Adminlogin;