import React from "react"
import Navfile from "./Navfile";
import { useEffect, useState } from "react";
import Axios from "axios";
function Trackerdetails()
{
    const [data, setData] = useState([]);
    const loadData = async() =>
    {
        const response = await Axios.get("http://localhost:3001/trackerview");
        setData(response.data)
    }
    useEffect(() => {
          loadData();
      }, []);
    return (
        <div className="adminbg">
             <Navfile />
             <center>
            <h1 className="headeradmin">Tracker Details</h1>
            <div> 
              <table className="f1-table">
         <thead>
         <tr>
             <th style ={{textAlign:"center"}}> NO   </th>
             <th style ={{textAlign:"center"}}> Userid   </th>
             <th style ={{textAlign:"center"}}> Start Date  </th>
             <th style ={{textAlign:"center"}}> cycleLength  </th>
             <th style ={{textAlign:"center"}}> Next Date </th>
             <th style ={{textAlign:"center"}}> Ovulation</th>
             
         </tr>
         </thead>
         <tbody className="tablemain">
             {data.map((item1,index)=>
             {
          return(
         
                     <tr key={item1.tuserid}>
                 <th scope="row"> {index+1 } </th>
                 <td>{item1.tuserid} </td>
             <td>{item1.value} </td>
             <td>{item1.cycleLength} </td>
             <td>{item1.nextperiod} </td>
             <td>{item1.ovulation} </td>
             
            
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
export default Trackerdetails;