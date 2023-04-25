 import  React from "react";
 import {useState,useEffect} from "react";
 import Axios from "axios";
import { useNavigate } from "react-router-dom";
 import Navuser from "../user/Navuser";
 import {toast} from 'react-toastify';
 import "../index.css"
import Preloader from "../Preloader";                                                                                                                          
 function Doctor()
 {
  
  
  const [userid,setUserid] = useState(" ");
  const [fname,setFname] = useState("");
  const [lname,setLname] = useState("");
  const [date,setDate] = useState("");
  const [time,setTime] = useState("");
  const [symptoms,setSymptoms] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:3001/doptions')
      .then(response => {
        setOptions(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const id= sessionStorage.getItem("id")
  

  const doctor = ()=>{
    
    Axios.post("http://localhost:3001/doctor",{
     
      userid:id,
      fname:fname,
   lname:lname,
     date:date,
   time:time,
   symptoms:symptoms,
   selectedOption: selectedOption
   })
   .then((response) => {
    console.log(response);
    toast.success("Appointment booked successfully");
    navigate("/userpage/doctor");
  })
  .catch(error => {
    console.log(error);
    toast.error('Failed to book appointment');
  });
  };
  const today = new Date();
  const maxDate = new Date(today.setMonth(today.getMonth() + 2)).toISOString().split("T")[0];
  const navigate = useNavigate();
  const formSubmit = (e) =>{
    if (!userid || !fname || !lname || !date || !time || !symptoms) {
      toast.error("Please fill all the fields");
    } else if (isNaN(userid)) {
      toast.error("User ID should be a number");
    } else if (!/^[a-zA-Z]+$/.test(fname) || !/^[a-zA-Z]+$/.test(lname)) {
      toast.error("Name fields should only contain letters");
    } else {
      doctor();
   
    navigate("/userpage/doctor");
    }
  }
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
   return (
    <>
    {isLoading ? <Preloader /> : 
     <div className="doctormain">
       <Navuser/>
       
          <center>
            <div className="mainforme">
  <div className="wrapperdoctor">
 <div className="registration_form">
  <div className="title">   DOCTOR APPOINTMENT </div>
 <form>
 

 <div className="form_wrap">
 <div className="input_wrap">
  
  <label for="city">UserId</label>

  <input type="number" id="id" value={id}
   onChange={(e)=>{setUserid(e.target.value); }} 
 disabled/> 

 </div>
<div className="input_wrap">
   <label for="fname">First Name</label>
   <input type="text" id="fname" onChange={(e)=>{
                    setFname(e.target.value);
                  }} required />
     </div>
  <div className="input_wrap">
      <label for="lname">Last Name</label>
      <input type="text" id="lname"
      onChange={(e)=>{
        setLname(e.target.value);
      }} required />
    </div>
 <div className="input_wrap">
  <label for="date">Date </label>
  <input type="date" id="email" 
  min={new Date().toISOString().slice(0, 10)}
  max={maxDate}
  onChange={(e)=>{
    setDate(e.target.value);
  }} required />
 </div>
 <div className="input_wrap">
  <label for="time">Time </label>
  <input type="time" id="email"
  min={new Date().toLocaleTimeString('en-US', {hour12:false})}
  onChange={(e)=>{
    setTime(e.target.value);
  }} required />
 </div>

 <div className="input_wrap">
  <label for="country">Symptoms</label>
  <input type="text" id="country"
  onChange={(e)=>{
    setSymptoms(e.target.value);
  }} required />
 </div>
 <div className="input_wrap">
 <label>
          Doctor Type  </label>
          <select value={selectedOption} onChange={(e)=>{
     setSelectedOption(e.target.value);
  }}>
            {options.map(option => (
              <option key={option.docid} value={option.value}>{option.dname},{option.dtype}</option>
            ))}
          </select>
       
 </div>
 
 <div className="input_wrap">
   <input type="submit" value="Register Now"  className="submit_btn"  onClick={formSubmit}/>
 </div>
</div>
</form>
</div>
</div>
</div>
</center>
    </div>
            } </>
      );

 }
 export default Doctor;