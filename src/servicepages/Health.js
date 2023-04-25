import React from "react"
import anemia from "../img/anemia.png";
import diabetes from "../img/diabetes.jpg";
import pain from "../img/pain.jpg";
import Thyroid from "../img/Thyroid.jpg";
import white from "../img/white.png";
import pcod from "../img/pcod.jpg";
import healthtips from "../img/healthtips.jpg";
import Navuser from "../user/Navuser";
import "../index.css"
 function Health()
 {
      return(
          <div className="wfbg">
              <Navuser/>
    
              <div>
        <big><center><h1 className="si">Happiness is the highest form of health.  
</h1></center></big>  <br/>
                  <div>	<center> <img src={healthtips} width="600" height="490"  alt="img" className="responsive"/></center> </div>
<br/>
<big><center>
<hr/>
			<h1 className="fi">Health Tips</h1></center></big>
			<hr/>
      <center>
            <div className="healthalign"> 
		<div >
           <figure className="column"><img src={pcod} width="300" height="300"  alt="img"className="responsive"/>
             <center><figcaption> <a href="https://pharmeasy.in/blog/pcod-problems-know-its-symptoms-causes-and-treatment/"> PCOD  </a> <br/>  </figcaption></center>
                              </figure>
                                  
                                      </div>
	       <figure className="column"><img src={anemia} width="300" height="300" alt="img" className="responsive"/>
                                  <center><figcaption>ANEMIA  <br />   </figcaption>
                                </center>
                   </figure>
    <figure className="column"><img src={diabetes} width="300" height="300" alt="img" className="responsive"/>
	          <center><figcaption> DIABETES   <br/>  </figcaption></center>
                              </figure>
  
                   
          
         
           <figure className="column1"><img src={white} width="300" height="300" alt="img" className="responsive"/>
	          <center><figcaption>WHITE DISCHARGE  <br/> </figcaption></center>
	       </figure>
           <figure className="column1"><img src={Thyroid} width="300" height="300" alt="img" className="responsive"/>
	          <center><figcaption>THYROID  <br/> </figcaption></center>
                   </figure>
                    <figure className="column1"><img src={pain} width="300" height="300" alt="img" className="responsive"/>
	          <center><figcaption> STOMACH PAIN DURING PERIODS   <br/> </figcaption></center>
	       </figure>
                                   
           
       </div> </center>
    </div>

          </div>
      );
 }
 export default Health;