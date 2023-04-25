import  React from "react"
//import uuid from "react-uuid";
import "../index.css";
import { useEffect, useState } from "react";
import Axios from "axios";
//import {useNavigate} from "react-router-dom";
import Navuser from "../user//Navuser";

function BlogView()
{
    const [data, setData] = useState([]);
    const loadData = async() =>
    {
        const response = await Axios.get("http://localhost:3001/blog/view");
        setData(response.data)
    }
    useEffect(() => {
          loadData();
      }, []);
    return(
        <div className="blogbg" >
            <Navuser/>
           <center><h2>Blog</h2></center>
       <div className="blogmain">
               
               
                {data.map((item3,index)=>
                    {
              return(
                <div className="card-container">
                <div className="card-item">
                    <div className="content">
              <p key={item3.buserid}>  </p> 
              <i class="fa-solid fa-blog"></i>
              
               <p className="bp">    {item3.blogp} </p>
               <p>{item3.name}  </p> 
               </div>
               </div>
               </div>
                 )}
                 )} 
                
        
               
             
 </div>
</div>

    
    );
              }
export default BlogView;
