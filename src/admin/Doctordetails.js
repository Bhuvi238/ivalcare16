import React from "react";
import Navfile from "./Navfile"
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
//import { toast} from 'react-toastify';
function Doctordetails()
{
    const [data, setData] = useState([]);
    const loadData = async() =>
    {
        const response = await Axios.get("http://localhost:3001/doctordetails/viewdc");
        setData(response.data)
    }
    useEffect(() => {
          loadData();
      }, []);
      const deleteDc = (userid) => {
        if(window.confirm("ARE YOU WANT TO DELETE?"))
        {
        Axios.delete(`http://localhost:3001/doctordetails/delete/${userid}`).then((response) => {
          setData( data.filter((item1) => { return item1.userid !== userid;  })  );
          });
        
    }
    };
       const approvedc= (userid) => {
        if(window.confirm("ARE YOU WANT TO Approve?"))
        {
        Axios.delete(`http://localhost:3001/doctordetails/approve/${userid}`).then((response) => {
          setData( data.filter((item1) => { return item1.userid !== userid;  })  );
          });
        
    }
      };
   return(
    <div className="adminbg">
<div>
    
    <Navfile/>
    <center>
     <h2 className="headeradmin"> Doctor details</h2>
     <div > 
        <Link to="/admin/adddoctor"> 
        <button  className="addbtne" >Add Doctor  </button></Link>
              <table className="f1-table">
         <thead>
         <tr>
             <th style ={{textAlign:"center"}}> NO   </th>
             <th style ={{textAlign:"center"}}> UserID  </th>
             <th style ={{textAlign:"center"}}> FirstName   </th>
             <th style ={{textAlign:"center"}}> LastNAme   </th>
             <th style ={{textAlign:"center"}}> Date </th>
             <th style ={{textAlign:"center"}}> Time </th>
                                   <th style={{ textAlign: "center" }}> Symptoms </th>
                                   <th style ={{textAlign:"center"}}> Reject </th>
                                   <th style={{ textAlign: "center" }}> Approve </th>
                                    <th style ={{textAlign:"center"}}> status </th>
         </tr>
         </thead>
         <tbody>
             {data.map((item1,index)=>
             {
          return(
         
                     <tr key={item1.userid}>
                 <th scope="row"> {index+1 } </th>
                 <td>{item1.userid} </td>
             <td>{item1.fname} </td>
             <td>{item1.lname} </td>
             <td>{item1.date} </td>
             <td>{item1.time} </td>
             <td>{item1.symptoms} </td>
             <td> 
                      <button onClick={() => { deleteDc(item1.userid); }}
                          className="profilebtneee">
                  Delete </button></td>
               <td>   <button onClick={() => {approvedc(item1.userid);  }} className="profilebtnee" >
                  Approve </button>
                  </td>
                   <td>{item1.status} </td>
                     </tr>
                 )
             }

             )}
         </tbody>
     </table>
     </div> 
     </center>
 </div>
    </div>
   )
    
}
export default Doctordetails;