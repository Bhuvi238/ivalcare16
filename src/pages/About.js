import  React from "react"
import bhuvana from "../img/bh.jpeg";
import divya from "../img/di.jpg";
import about from "../img/about.jpg";
import ival from "../img/ival.png";
import "../index.css"
import Footer from './Footer';
import Nav from './Nav';
function About()
{
   
    return (
        <div className="mainbody">  
            <Nav/>
             <big><center><h1 className="sie">OUR STORY</h1></center></big>
            <div><center><div><big><h1 id="r1">Welcome to Ival</h1></big></div></center> </div>
            <div>   <center> <img src={ival} width="600" height="490"  alt="img" className="responsive"/></center> </div>
            <big><center>
               
            <h1 className="fi">FOUNDERS OF IVAL</h1></center></big>
           
       <div className="c1">
       
        <center>     <img src={about} width="400" height="400"  alt="img" className="responsive"/>
        
           <h2>Our Mission</h2>
             <p id="a1">At ival, our mission is to develop the women
              empowerment through our powerful, creative and trustworthy products</p>
            <h2>Our Vision</h2>
             <p id="a2">As a strategic, productive women's care, ival is dedicated to working safe,
              trustworthy and unique women's by working
             for the women in order to make the world better for women..</p>
             </center>
        </div>
        <div>
            <br></br>
        <center>
            <figure><img src={divya} width="300" height="300"  alt="img"className="responsive"/>
             <center><figcaption>DIVYA(236)</figcaption></center>
            </figure>
           <figure><img src={bhuvana} width="300" height="300" alt="img" className="responsive"/>
              <center><figcaption>BHUVANA(238)</figcaption></center>
           </figure>
       </center>
       </div>
       <br></br>
       <div id="c3">
        <big><h2 > <center>WHAT WE STAND FOR </center></h2></big>
        <div id="c2"><p>"IVAL" is a women’s friend website that provides many services and raises awareness
for women. The services we provide are doctor consultations for women who are facing
problems like depression, health issues, counseling, and parenting; supporting the needy
through NGOs, trusts, and orphanages; and operating a helpline through which sponsors
help those who need help. sharing the story of each individual through blogs, socially
supporting women who require the law. Maintain your fitness by getting health and
fitness advice and tracking your menstrual cycle with a period tracker so that you can
plan accordingly. It also alerts you two days in advance. Post the casting and recruiting
news on the Explore Talent website, as well as the blog and share your story.</p>
    </div>
     <br></br>
     </div>
     <br></br>
<Footer/>
    </div>
    )
   
}
export default About;
