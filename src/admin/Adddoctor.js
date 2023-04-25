import { useState } from "react";
import Axios from "axios";
import {toast} from "react-toastify"
function Adddoctor() {
  const [dname, setDname] = useState("");
  const [dtype, setDtype] = useState("");

  const adddoctor = ()=>{
    if(!dname || !dtype)
    {
      toast.error("ENTER THE FIELDS")
    }
    else{
      
    Axios.post("http://localhost:3001/adddoctor",{
     
       
        dname: dname,
        dtype: dtype
  
   })
      .then((response) =>
      {
      console.log(response);
     
      });
      toast.success("Doctor added successfully")
    }
  };
return (
    <div className="adminbge">
     
        <center>
        <h1 className="alignh1"> ADD DOCTOR </h1>
        <div  className="alignupdate">
       <div className="bloge">
       <input
       type="text"
        onChange={(e)=>{
            setDname(e.target.value);
        }} 
        placeholder="name"
      ></input>
      <input
       type="text"
        onChange={(e)=>{
         setDtype(e.target.value);
        }} 
        placeholder="type"
      ></input>
    
      <button onClick={adddoctor}>Add</button>
      </div>
      </div>
      </center>
   
    </div>
  );
}
export default Adddoctor;
