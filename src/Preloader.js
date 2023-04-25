import React from 'react';
import loader from "./loader.gif"
const Preloader = () => {
  return (
    
     <div id="spinner" class="ivalcontainer">
      <img src={loader} alt="WELCOME TO IVAL" width="100%" />
    </div>
  );
};

export default Preloader;