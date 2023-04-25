import React from 'react';
import Navuser from './Navuser';
import "./user.css"
import ivalvideo from "./ivalvideo.mp4";
//import WordFlick from './WordFlick';
function UserHome(){
  
    return(
       
              
            <div  className='userhome'>
            <video autoPlay muted loop >
        <source src={ivalvideo} type="video/mp4" />
      </video>
            <div className='overlaynav'>  <Navuser />  </div> 
             
            <div className='overlaycontent'> EXPLORE IVAL </div>  
              
           <div className="overlay">IVAL CARE</div>
         </div>
    )
}
export default UserHome;