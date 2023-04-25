import React, { useState ,useEffect} from "react";
import Moment from "react-moment";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../index.css";
import Axios from "axios";
import Navuser from "../user/Navuser";
import {useNavigate} from "react-router-dom";
import {toast} from 'react-toastify';
import Preloader from "../Preloader";
  
function Period() {
  const [tuserid, setTuserid] = useState("");
  const [value, onChange] = useState(new Date());
  const [cycle, cycleValue] = useState("28");

  const id= sessionStorage.getItem("id")
  const date = value;
  const value1 = moment( date ).format("YYYY-MM-DD hh:mm:ss");
  const nextperiod = moment( date ).add(cycle-1, "days").format("YYYY-MM-DD");
const ovulation = moment( date ).add(cycle -1-14 , "days").format("YYYY-MM-DD  hh:mm:ss");
  console.log(cycle);
  const cycleLength = parseInt(cycle);
  const tracker = ()=>{
    toast.success("Calculated cycle");
    Axios.post("http://localhost:3001/tracker",{
     
      tuserid:id,
      value1:value1,
      cycleLength:cycleLength,
      nextperiod:nextperiod,
      ovulation:ovulation,
      
      
   })
      .then((response) =>
      {
      console.log(response);
      alert("successfully stored");

     
    });
  };
 
  const navigate = useNavigate();
  const trackerSubmit=() =>
  {
    if(!value ||!cycle )
    {
      
      toast.error("Please fill all the fields");
      }
    else
    {
      tracker();
   
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
      <div className="maintracker">
        <Navuser/>
    <center>   <h1 className="pt">PERIOD TRACKER </h1> </center>
    <center>  <div className="mainpt" >
  <div >
 <center>  <label for="city">Userid</label>
  <input type="number" id="city" placeholder="userid" value={id}  onChange={(e)=>{
                    setTuserid(e.target.value);
                  }} disabled />
     <label for="cycle">Select your cycle length : </label>
        <select
          onChange={(e) => cycleValue(e.target.value)}
          defaultValue={cycle}
          className="m-2"
        >
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
          <option value="32">32</option>
          <option value="33">33</option>
          <option value="34">34</option>
          <option value="35">35</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
        </select> </center>
      </div>
  
     <center> <label className="text-center">
       Select your last period start date from the calendar
      </label> </center>
      
      <div className="d-flex justify-content-center ">
        <Calendar onChange={onChange} value={value} 
          className="calendar mt-0" />
            <button onClick={trackerSubmit} className="btn btn-primary">
              SUBMIT  </button>
      </div>
      </div>
      </center>
      <div className="text-centerer mt-4 p-2">
        <div className="row">
          <div class="d-flex justify-content-center">
            <div className="col-md-3 m-3 box ">
              <p>Next Period</p>
  
              <Moment format="YYYY-MM-DD" 
                add={{ days: cycleLength - 1 }}   >
                {date} 
              </Moment>
            </div>
            <div className="col-md-3 m-3 box ">
              <p> Approximate Ovulation Day</p>
  
              <Moment
                format="YYYY-MM-DD  hh:mm:ss"
                add={{ days: cycleLength - 1 - 14 }} 
               >
                {date}
              </Moment>
            
              
            </div>
          </div>
        </div>
      </div>
     </div>
     } </>
    
  );
}
  
export default Period;