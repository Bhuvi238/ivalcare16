

import React from "react";
import { useState ,useEffect } from "react";
import Axios from "axios";
//import Login from "./Login";
import "./login.css";
import {useNavigate} from "react-router-dom";
//import Footer from '../pages/Footer';
import Nav from '../pages/Nav';
import {toast} from 'react-toastify';
import validator from "validator";
function Signup()
{
   
     const [usernameReg,setUsernameReg] = useState("");
    const [passwordReg,setPasswordReg] = useState("");
    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(false);
    const [err, setError] = useState(null);
    
    Axios.defaults.withCredentials = true;


     const register = ()=>{
      Axios.post("http://localhost:3001/register",{
       
        username:usernameReg,
        password:passwordReg,
        email:email
     })
      .catch ((err)=> {
        alert(err.response.data)
        console.log(err.response.data);
        setError(err.response.data);
     
    })
    };
    const navigate = useNavigate();
    const login = ()=>{
      Axios.post("http://localhost:3001/login",{
        username:username,
        password:password
      }).then((response)=>{
 
        if(!response.data.auth)
        {
         
           
          setLoginStatus(false)
          navigate("/signup")
          
        }
        else
        {
          setLoginStatus(true)
     
         console.log(response.data.result[0].username)
          toast.success("Hi ! Welcome to Ival " + response.data.result[0].username);
         localStorage.setItem("token",response.data.token)
         localStorage.setItem("username",response.data.result[0].username)
         sessionStorage.setItem("id",response.data.result[0].id)
        }
      });
    };
    const userAuthenticate= () =>
    {
      Axios.get("http://localhost:3001/isuser",{
        headers:
        {
          "x-access-token": localStorage.getItem("token")
        }
      }).then((response)=>
      {
        console.log(response)
      })
    }
    useEffect(() => {
      Axios.get("http://localhost:3001/login").then((response) => {
        if (response.data.loggedIn === true) {
          setLoginStatus(response.data.user[0].username);
        }
      });
    }, []);

    const [errorMessage, setErrorMessage] = useState('')
 
    const validate = (value) => {
   
      if (validator.isStrongPassword(value, {
        minLength: 8, minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 1
      })) {
        setErrorMessage('Is Strong Password')
      } else {
        setErrorMessage('Is Not Strong Password')
      }
    }
  const handleSubmit=() =>
  {
    if(!usernameReg ||!passwordReg ||!email)
    {
     
      toast.error("Please fill all the fields");
      }
    else
    {
      register();  
    }


  }
  const handleLogin=() =>
  {
    if(!username ||!password)
    {
      toast.error("Please fill all the fields");
    }
    else
    {
    login();
    userAuthenticate();
    navigate("/userhome");
    }
}
function handlePasswordChange(e) {
  setPasswordReg(e.target.value);
  validate(e.target.value)

}
      return(
<div className="mainbodyl" >
<Nav/>

          <br>
          </br>
          <br>
          </br>
          <center>
          <div className="row">
<div className="loginmain">
    <div className="mainlogin">      
    <input type="checkbox" id="chk" aria-hidden="true"/>
            <div className="signuplogin">
                <form>
   <label for="chk" aria-hidden="true">Sign up</label>
   <input type="text"  placeholder="User name" id="name" onChange={(e)=>{
                    setUsernameReg(e.target.value);
                  }} required />
   <input type="email"  placeholder="Email"  id="email" onChange={(e) => {
                    setEmail(e.target.value);
                  }} required />
   <input type="password"  placeholder="Password"  id="password" onChange={
            handlePasswordChange} required/>
            
            {errorMessage === '' ? null :
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</span>}
  <button onClick={handleSubmit}>Sign up</button>
              {err} 
                </form>
            </div>




            <div className="login">
                <form>
                    <label for="chk" aria-hidden="true">Login</label>
                    <input type="text" name="username" placeholder="username"  onChange={(e)=>{
                setUsername(e.target.value);
              }} required/>
                    <input type="password" name="pswd" placeholder="Password" onChange={(e)=>{
                setPassword(e.target.value);
              }} required/>
                    <button onClick={handleLogin} href="/">Login</button>
                </form>
            
            </div>
    </div>
          </div>
          <br>
          </br>
        
          </div>
          <div>
          </div>
          </center>
          </div>

  );
}
  export default Signup;