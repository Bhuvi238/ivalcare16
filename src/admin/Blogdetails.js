import React from "react";
import Navfile from "./Navfile";

import { useEffect, useState } from "react";
import axios from "axios";
//import {Link} from "react-router-dom";
function Blogdetails()
{
    const [data, setData] = useState([]);
    const loadData = async() =>
    {
        const response = await axios.get("http://localhost:3001/blog/view");
        setData(response.data)
    }
    useEffect(() => {
          loadData();
      }, []);
      
    return (
        <div className="adminbg">
              <Navfile />
              <center>
              <h1 className="headeradmin"> BLOG DETAILS </h1>
              <div> 
              <table className="f1-table">
              <thead>
                <tr>
                    <th style ={{textAlign:"center"}}> NO   </th>
                    <th style ={{textAlign:"center"}}> UserD  </th>
                    <th style ={{textAlign:"center"}}> Title   </th>
                    <th style ={{textAlign:"center"}}> Content  </th>
                   
              
                </tr>
                </thead>
                <tbody className="tablemain">
                    {data.map((item,index)=>
                    {
                 return(
                
                            <tr key={item.buserid}>
                        <th scope="row"> {index+1 } </th>
                        <td>{item.buserid} </td>
                    <td>{item.name} </td>
                    <td>{item.blogp} </td>
                            </tr>
                        )
                    }

                    )}
                </tbody>
            </table>
            </div>
            </center>
        </div>
    )
}
export default Blogdetails;