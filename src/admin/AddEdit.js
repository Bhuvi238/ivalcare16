import React, {useState, useEffect} from "react";
import {Link,useParams} from 'react-router-dom';
import { useNavigate} from "react-router-dom";
import { toast} from 'react-toastify';
import axios from "axios";
const initialState ={
    username:"",
    email:"",
    password: "",
};
function AddEdit()
{
          const [state,setState] =useState(initialState);
          const {username,email,password} = state;

          const navigate =useNavigate();
          const {id} = useParams();
          useEffect (()=>
          {
            axios.get(`http://localhost:3001/dashboard/view/${id}`).then 
            ((resp)=> setState({...resp.data[0]}))

          },[id])
          const handleSubmit =(e)=>
          {
            e.preventDefault();
            /*  check the field */
            if(!username || !email || ! password)

            {
                toast.error("Please  provide value into each input field");
            }
            else 
            {
                /* if id not equal to previous id then the value saved*/
                if(!id){
                axios.post("http://localhost:3001/dashboard/post",{
                    username,email,password,
                }).then(()=>
                {
                    setState({username:" ",email:" " ,password:" "})
                })
                .catch((err)=> toast.error(err.response.data));
                toast.success("User updated  successfully")
                

                
             }
            else{
                /*  if the value is already there then it is updated*/
                axios.put(`http://localhost:3001/dashboard/update/${id}`,{
                    username,email,password
                }).then(()=>
                {
                    setState({username:" ",email:"  " ,password: " "})
                })
                .catch((err)=> toast.error(err.response.data))
                toast.success("contact updated  successfully")
            }
                setTimeout(()=> navigate("/admin/dashboard") ,500)
            }
        
          }
          /* */
          const handleInputChange = (e) =>
          {
            const {name, value}= e.target;
            setState({...state, [name]: value});

          }
    return(
        <div className="adminbge">
           <center>
            <h1 className="alighh1"> ADD USER </h1>
            <form className="alignupdate"
             onSubmit={handleSubmit}>
                <div className="bloge">
           
            <input  
            type="text"  id="username" name ="username"  placeholder="username"
            value ={username || " "} onChange={handleInputChange}
             />
            
            <input  
            type="email" id="email" name ="email" placeholder="email" 
            value ={email || " "} onChange={handleInputChange}
             />
             
             <input  
            type="password" id="password" name ="password" placeholder="password" 
            value ={password || " "} onChange={handleInputChange}
             />
            
 <input type="submit" value={id ? "Update":"Save"}/>
 <Link to="/admin/dashboard">
    <input type="button" value="Go Back"/>
 </Link>
</div>
            </form>
            </center>
        </div>

    );
}
export default AddEdit;
