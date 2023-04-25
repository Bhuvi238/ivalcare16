import  React from "react"
//import uuid from "react-uuid";
import "../index.css";
import { useEffect, useState } from "react";
import Axios from "axios";
//import {useNavigate} from "react-router-dom";
import Navuser from "../user//Navuser";

function Exploreview()
{
    const [data, setData] = useState([]);
    const loadData = async() =>
    {
        const response = await Axios.get("http://localhost:3001/exploreview");
        setData(response.data)
    }
    useEffect(() => {
          loadData();
      }, []);
    
    return(
        <div className="exbg">
             <Navuser/>
              
              <center>    <h1 className="e1"> EXPLORE TALENT </h1> </center> 
              <div  className="mainbodye">    
              {data.map((item3,index)=>
                   {      
                     return(
      <div className="explore-container">
      
       <div className="ecard-item">
           <div className="content" >
             <h1 key={item3.euserid}> </h1>
                       <center>    <h1 class='fas fa-tasks' className="title"> Explore Talent</h1>
                             </center>
         
               <h2 >{item3.rolename}</h2>
              

   <p className="bp">{item3.jobd}</p> 
   
    <p> {item3.experience}</p> 

   <p> {item3.skills} </p> 
           </div>
           </div>
           </div>
         
               
                 )}
                ) }
                
        
                </div>      
                </div>    

    
    );
              }
export default Exploreview;
