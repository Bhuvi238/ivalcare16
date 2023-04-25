import React from "react";
import Navfile from "./Navfile"
import { useState ,useEffect} from "react";

import Axios from "axios";
function Wishlistdetails()
{
    const [data, setData] = useState([]);
    const loadData = async() =>
    {
        const response = await Axios.get("http://localhost:3001/wishview");
        setData(response.data)
    }
    useEffect(() => {
          loadData();
    }, []);
     const deletewl = (wishlist) => {
        if(window.confirm("ARE YOU WANT TO DELETE?"))
        {
        Axios.delete(`http://localhost:3001/wishview/delete/${wishlist}`).then((response) => {
          setData( data.filter((item1) => { return item1.wishlist != wishlist;  })  );
          });
        
    }
    };
       const approvewl= (wishlist) => {
        if(window.confirm("ARE YOU WANT TO APPROVE?"))
        {
        Axios.delete(`http://localhost:3001/wishview/approve/${wishlist}`).then((response) => {
          setData( data.filter((item1) => { return item1.wishlist != wishlist;  })  );
          });
        
    }
      };
    return (
        <div className="adminbgee">
              <Navfile />
              <center>
            <h1 className="headeradmin">wishlist Details</h1>
            <div> 
              <table className="f1-table">
            <thead>
         <tr>
             
             <th style ={{textAlign:"center"}}> Wishlist   </th>
             <th style ={{textAlign:"center"}}> Location  </th>
             <th style ={{textAlign:"center"}}> Approve  </th>
                  <th style={{ textAlign: "center" }}> Reject  </th>
                   <th style ={{textAlign:"center"}}> Status  </th>
         </tr>
         </thead>
         <tbody className="tablemain">
             {data.map((item1)=>
             {
          return(
         
                     <tr>
             <td>{item1.wishlist} </td>
              <td>{item1.location} </td>
             
            <td>  <button  onClick={() => {approvewl(item1.wishlist);  }} className="profilebtnee">
                  Approve </button> </td>
                  <td>  <button  onClick={() => { deletewl(item1.wishlist);  }} className="profilebtneee">
                      Reject </button> </td>
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
    )
}
export default Wishlistdetails;