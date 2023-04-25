import  React from "react"

import "../index.css";

import Footer from './Footer';
import Nav from './Nav';

function Help()
{
  return(
    <div className="mainbody">
      <div>
      <Nav/>
    <center> <h1 className="sie"> HELPLINE </h1> </center> 
     
            <div class="Price-row">
                <div class="price-col" data-tilt>
                    
                   
                    <ul>
                        <li>National Domestic Violence Hotline: 1-800-799-SAFE (7233)</li>
                        <li>National Sexual Assault Hotline: 1-800-656-HOPE (4673)</li>
                        <li>National Trafficking Hotline: 1-888-373-7888</li>
                        <li>National Eating Disorders Association: 1-800-931-2237</li>
                        <li>National Women's Health Hotline: 1-800-994-9662</li>
                        <li>National Commission for Women: +91-11-26942369, 26944754</li>
                    </ul>
                   
                </div>
                <div class="price-col" data-tilt>
                    
                    
                    <ul>
                        <li>Substance Abuse and Mental Health Services Administration (SAMHSA) Treatment Referral Hotline: 1-800-662-HELP (4357)</li>
                        <li>The Crisis Text Line: Text "HELLO" to 741741</li>
                        <li>National Alliance on Mental Illness (NAMI) HelpLine: 1-800-950-NAMI (6264)</li>
                        <li>The Trevor Project (for LGBTQ+ youth in crisis): 1-866-488-7386</li>
                        <li>Tamil Nadu State Women's Commission: +91-44-28880019</li>
                        <li>National Commission for Women: +91-11-26942369, 26944754</li>
                    </ul>
                  
                </div>
                <div class="price-col" data-tilt>
                  
                    
                    <ul>
                        <li>Tamil Nadu Domestic Violence Helpline: 1091</li>
                        <li>All India Women's Helpline: 181</li>
                        <li>Women in Distress (Chennai): +91-44-24640050</li>
                        <li>ChildLine India Foundation (for children in need of care and protection): 1098</li>
                        <li>Nirmal Oswal Foundation (for female victims of domestic violence): +91-22-26204050</li>
                        <li>Ministry of Women and Child Development: +91-11-23978046</li>
                        
                    </ul>
                  
                </div>
                </div>
                
           <br></br>

<Footer/>

        </div>
        </div>
   
    );
        
}
export default Help;