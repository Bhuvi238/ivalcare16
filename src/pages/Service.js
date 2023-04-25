import  React from "react"
import service from "../img/service.png";
import doctor from "../img/doctor.png";
import period from "../img/period.png";
import health from "../img/health.png";
import wish from "../img/wf.png";
import explore from "../img/explore talent.png";
import blog from "../img/blog.PNG";
import "../index.css";
import Chatbot from "../component/Chat";
import Footer from './Footer';
import Nav from './Nav';
function Service()
{
    return(
    <div className="mainbody">
        <Nav/>
        <big><center><h1 className="sie">The empowered woman is powerful beyond measure and beautiful beyond description.  
</h1></center></big>  <br/>
<div>	<center> <img src={service} width="600" height="490"  alt="img" className="responsive"/></center> </div>
<br/>
<big><center>
<hr/>
			<h1 className="fi">SERVICES OF IVAL</h1></center></big>
			<hr/>
            <br/>
       <br/>
            <div className="servicemain"> 
		<center><table >
            <tr className="colorservice">
		    <td><figure><img src={doctor} width="300" height="300"  alt="img"className="responsive"/>
             <center><figcaption> Doctor Consultation <br/> </figcaption></center>
	        </figure></td>
	       <td><figure><img src={period} width="300" height="300" alt="img" className="responsive"/>
	          <center><figcaption>Period Tracker    <br/> </figcaption></center>
                   </figure></td>
                    <td><figure><img src={blog} width="300" height="300" alt="img" className="responsive"/>
	          <center><figcaption> Blog   <br/>   </figcaption></center>
                   </figure></td>
                   
           </tr>
           <tr  className="colorservice">
           <td><figure><img src={health} width="300" height="300" alt="img" className="responsive"/>
	          <center><figcaption>Health tips  <br/> </figcaption></center>
	       </figure></td>
           <td><figure><img src={wish} width="300" height="300" alt="img" className="responsive"/>
	          <center><figcaption>Womenfriend  <br/> </figcaption></center>
                   </figure></td>
                    <td><figure><img src={explore} width="300" height="300" alt="img" className="responsive"/>
	          <center><figcaption> Explore Talent    <br/>  </figcaption></center>
	       </figure></td>
           </tr>
	   </table></center>
       </div>
       <br/>
       <br/>
       <Chatbot/>
       <Footer/>
    </div>
    )
    
}
export default Service;