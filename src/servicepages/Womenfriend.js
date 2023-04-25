import { useState } from "react";
import Axios from "axios";
import Navuser from "../user/Navuser";
import p1 from "../img/p1.PNG";
import {toast} from 'react-toastify';
function WishList() {
  const [wuserid,setWuserid] = useState("");
  const [location, setLocation] = useState("");
  const [wishlist, setWishlist] = useState("");
  const id= sessionStorage.getItem("id")
  const wishliste = ()=>{
   
    Axios.post("http://localhost:3001/wishlist",{
     
        wuserid:id,
        wishlist: wishlist,
        location: location
  
   })
      .then((response) =>
      {
      console.log(response);
     toast.success("successfully added wishlist")
    }).catch(error => {
      console.log(error);
      toast.error('Failed to add wishlist');
    });
  
  };
  return (
    <div >
      <div >
       <div className="bloge">
       <input
       type="number" value={id}
       placeholder="userid"
        onChange={(e)=>{
          setWuserid(e.target.value);
        }} 
        
        disabled  ></input>
      <input
       type="text"
        onChange={(e)=>{
          setWishlist(e.target.value);
        }} 
        placeholder="I wish"
      ></input>
      <input
      type="text"
       onChange={(e)=>{
        setLocation(e.target.value);
      }} 
        
        placeholder="location"
      ></input>
      <button onClick={wishliste}>Add</button>
      </div>
    </div>
    </div>
  );
}


export default function App() {
  return (
    <div className="wfbg">
       <Navuser/>
       <br/>
    <center>  <h1> WOMEN FRIEND </h1> </center> 
   <center>  <div className="pbody">  <img src={p1} alt="fgsG" width="50%"/> 
 <br></br>
 <br></br>
       <div> <big><h1> What is Period Poverty </h1></big>  <br></br>
<p className="info">Period poverty refers not only to the lack of access to menstrual hygiene products but also to a lack of period education and basic sanitary services.
</p><br></br>
<br></br>
<big><h1>Why We Care </h1></big><br></br>
<p className="info">As a young woman myself, I believe that we need to take action against period poverty. It is immensely important and relevant that we don't stay quiet but take action and speak out on this global issue, which affects millions of girls each day.
</p><br></br>
<br></br>
<big><h1>How to Use Our Website </h1></big> <br></br>
<p className="info">To tackle against the stigma and the effects of period poverty on girls and women, the PeriodFriend website provides  the donation service . With our platform for menstruators to request pad donations  
  
 </p></div>
      
 </div>   </center>  <div  className="mainbodyee">
              
                
       
                
                 <br></br>
         <center> <h1 className="h1"> ADD YOUR WISHLIST </h1>    </center>
       <center><WishList /> </center> 
        <br/>
        <br/>
      </div>
      </div>
    
  );
}
