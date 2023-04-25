import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Help from './pages/Help';
import Service from './pages/Service';
//import Login from './Loginpages/Login';
import Signup from './Loginpages/Signup';
import Adminlogin from './Loginpages/Adminlogin';
import DashBoard from './admin/DashBoard';
import  Doctordetails from './admin/Doctordetails';
import Trackerdetails  from './admin/Trackerdetails';
import Wishlistdetails  from './admin/Wishlistdetails';
import AddEdit from './admin/AddEdit';

import View from './admin/View';
//import Wishlistdetails from './admin/Wishlistdetails ';
import Home from './pages/Home';
import About from './pages/About';
import Period from './servicepages/Period';
import Wishlist from "./servicepages/Womenfriend";
import Doctor from "./servicepages/Doctor";
import Blog from "./servicepages/Blog";
import Explore from "./servicepages/Explore";
import BlogView from "./servicepages/BlogView";
import Exploreview from "./servicepages/Exploreview";
import Health from "./servicepages/Health";
import UserPage from "./user/Userpage";
import Userhome from "./user/Userhome";
import Profile from "./user/Profile";
import Editprofile from "./user/Editprofile";
import Gallery from "./user/Gallery";
import Navfile from "./admin/Navfile";
import Adminhome  from "./admin/Adminhome";
import ExploreTalent  from "./admin/ExploreTalent";
import Blogdetails  from "./admin/Blogdetails";
import Adddoctor from "./admin/Adddoctor"
import {useState} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css"
function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
    <div className="navbody">
      <div>
      <ToastContainer position="top-center"/>
       <Router> 
      <Routes>
    
      <Route path="/" element={<Home />}></Route>
      <Route path="/service" element={<Service />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/help" element={<Help />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      
      <Route path="/adminlogin" element={<Adminlogin/>}></Route>
      <Route path="/userpage/doctor" element={<Doctor/>}></Route>
      <Route path="/userpage/period" element={<Period/>}></Route>
      <Route path="/userpage/womenfriend" element={<Wishlist/>}></Route>
      <Route path="/userpage/blog" element={<Blog />}></Route>  
       <Route path="/userpage/health" element={<Health />}></Route>
       <Route path="/userpage/explore" element={<Explore/>}></Route>
       <Route path="/userpage/explore/view" element={<Exploreview />}></Route> 
    <Route path="/userpage" element={<UserPage/>}></Route>
    <Route path="/userpage/profile" element={<Profile/>}></Route>
    <Route path="/userpage/profile/edit" element={<Editprofile/>}></Route>
    <Route path="/userhome" element={<Userhome/>}></Route>
    <Route path="/userpage/gallery" element={<Gallery/>}></Route>
    <Route path="/admin/dashboard" element={<DashBoard/>}></Route>
    <Route path="/admin/doctordetails" element={< Doctordetails/>}></Route>
    <Route path="/admin/trackerdetails" element={< Trackerdetails/>}></Route>
    <Route path="/admin/exploretalent" element={< ExploreTalent/>}></Route>
    <Route path="/admin/wishlistdetails" element={< Wishlistdetails/>}></Route>
    <Route path="/admin/blogdetails" element={< Blogdetails/>}></Route>
      <Route path="/admin/dashboard/addcontact" element={< AddEdit />}></Route>
      <Route path="/admin/dashboard/update/:id" element={<AddEdit />}></Route> 
      <Route path="/admin/dashboard/view/:id" element={<View />}></Route> 
      <Route path="/admin/navfile" element={<Navfile />}></Route>  
      <Route path="/admin/adminhome" element={<Adminhome />}></Route>  
      <Route path="/admin/adddoctor" element={<Adddoctor />}></Route>  
      <Route path="/userpage/blog/view" element={<BlogView />}></Route>  
     </Routes>
      </Router>
    
    </div>
    </div>
    
  )
  );
}
 
export default App;
