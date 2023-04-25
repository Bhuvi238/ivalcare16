import  React from "react"
//import uuid from "react-uuid";
import "../index.css";
import {toast} from 'react-toastify';
import {  useState,useEffect } from "react";
import Axios from "axios";
import {useNavigate} from "react-router-dom";
import Navuser from "../user/Navuser";
import "./service.css";
import Preloader from "../Preloader";
function Blog()
{
 
    const [buserid, setBuserid] = useState("");
    const [blogp, setBlogp] = useState("");
    const [name, setName] = useState("");
    const id= sessionStorage.getItem("id")
 const blog = () =>{
 
 Axios.post("http://localhost:3001/blogpost",
    {
      buserid:id,
      blogp:blogp,
      name:name
    })  .then((response) =>
    {
    console.log(response);
   
  }) .catch(error => {
    console.log(error);
    toast.error('Failed to book appointment');
  });
 
   
  };
/* useEffect(() => {
   localStorage.setItem("wishList", JSON.stringify(post));
   console.log("data saved");
 }, [post]);

 function clickHandler() {
   setPost((list) => list.concat({ id: uuid(), post: value ,post:name}));
   setValue("");
   setName(""); 
 } */
 const navigate = useNavigate();
 function clickHandler() {
   if(!blogp ||!name)
   {
     
     alert("Please fill all the fields");
     }
   else
   {
     blog();
     navigate("/userpage/blog")
     toast.success("Successfullty posted")
   }
 } 
 
 function clickHandler1() 
  {
    
   navigate("/userpage/blog/view")
}         
  return (
    
    <div >
      <h1 className="headeradmin"> BLOG</h1>
<form >
        <div className="bloge">
        <input
      type="number"
   
       placeholder="userid" value={id}
        onChange={(e)=>{
          setBuserid(e.target.value);
        }} disabled ></input>
        <textarea  
         
          placeholder="Enter Your Story"
        onChange={(e) =>
          setBlogp(e.target.value)} required>

        </textarea>
     
        <input
         type="text"
       
        placeholder="Name"
        onChange={(e)=>{
          setName(e.target.value);
        }} required 
      ></input>
      <br></br>
      <button onClick={clickHandler}>Add</button>
      <button onClick={clickHandler1} >VIEW </button>
      <br></br>
      <br></br>
      </div>
      </form>
      </div>
    );
}
export default function App() {
 
    return (
    
 
      <div className="blogbg">
        <Navuser/>
       <br/>
       <br/>  
         <center> <h1 className="h1e">SHARE YOUR STORY</h1>    </center>
       <center><Blog /> </center> 
        <br/>
        <br/>
   
     
        <br/>
        <br/>
    

      </div>
      
    );
  }