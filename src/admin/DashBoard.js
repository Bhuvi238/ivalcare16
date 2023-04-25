import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
//import "../index.css";
import Navfile from "./Navfile"
import { toast} from 'react-toastify';
import "./admin.css"
function DashBoard()
{
    const [data, setData] = useState([]);
    const loadData = async() =>
    {
        const response = await axios.get("http://localhost:3001/dashboard/view");
        setData(response.data)
    }
    useEffect(() => {
          loadData();
      }, []);
      
      const deleteContact =(id) =>
      {
        if(window.confirm("ARE YOU WANT TO DELETE?"))
        {
            axios.delete(`http://localhost:3001/dashboard/delete/${id}`);
            toast.success("deleted  successfully")
            setTimeout(() =>   loadData(),500);
               
        }
      }
    return(
        <div className="adminbg" >
    
           <Navfile/>
           <center>   <h2 className="headeradmin"> DASHBOARD </h2> 
           <Link to="/admin/dashboard/addcontact"> 
                    <button  className="addbtne"  > ADD USER </button>
                        </Link> </center>
                        <br></br>
         <center>  <div className="board"> <table className="f1-table">
                <thead>
                <tr>
                    <th > No   </th>
                    <th > Userid   </th>
                    <th > Name   </th>
                    <th > Email   </th>
                    <th > Password </th>
                    <th > Edit   </th>
                    <th > Delete  </th>
                    <th > View   </th>
                </tr>
                </thead>
                <tbody className="tablemain">
                    {data.map((item,index)=>
                    {
                 return(
                
                            <tr key={item.id}>
                        <th scope="row"> {index+1 } </th>
                      <td>{item.id} </td>
                    <td>{item.username} </td>
                    <td>{item.email} </td>
                    <td>{item.password} </td>
                    
                    <td> <Link to={`/admin/dashboard/update/${item.id}`} >
                    <button  className="profilebtne"  > Edit </button> 
                        </Link>  </td> 
                         <td>      <button onClick={() => deleteContact(item.id)}
                             className="profilebtned"> Delete </button>  </td>
                        <td>     <Link to={`/admin/dashboard/view/${item.id}`} >
                    <button  className="profilebtne" > View </button>
                        </Link>
                        </td>
                       
                            </tr>
                        )
                    }

                    )}
                </tbody>
            </table>
            </div> 
            </center>
        </div>

    );
}
export default DashBoard;