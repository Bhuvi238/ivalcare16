import React from "react";
import Navfile from "./Navfile";

import { useEffect, useState } from "react";
import axios from "axios";
//import {Link} from "react-router-dom";
function ExploreTalent()
{
    const [data, setData] = useState([]);
    const loadData = async() =>
    {
        const response = await axios.get("http://localhost:3001/exploreview");
        setData(response.data)
    }
    useEffect(() => {
          loadData();
      }, []);
      
    return (
        <div className="adminbg">
              <Navfile />
              <center>
              <h1 className="headeradmin"> EXPLORE TALENT</h1>
              <div > 
              <table className="f1-table">
              <thead>
                <tr>
                    <th style ={{textAlign:"center"}}> NO   </th>
                    <th style ={{textAlign:"center"}}> UserID  </th>
                    <th style ={{textAlign:"center"}}> RoleName   </th>
                    <th style ={{textAlign:"center"}}> Job Description  </th>
                    <th style ={{textAlign:"center"}}> Experience </th>
                    <th style ={{textAlign:"center"}}> Skills   </th>
                </tr>
                </thead>
                <tbody className="tablemain">
                    {data.map((item,index)=>
                    {
                 return(
                
                            <tr key={item.euserid}>
                        <th scope="row"> {index+1 } </th>
                        <td>{item.euserid} </td>
                    <td>{item.rolename} </td>
                    <td>{item.jobd} </td>
                    <td>{item.experience} </td>
                    <td>{item.skills} </td>
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
export default ExploreTalent;