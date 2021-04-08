import React from 'react';
import './App.css';

import scp from './data.json';
const scpmenu = scp.map(
  (scp) =>{
    return(
      <li><a href={'#'+scp.item}>{scp.item}</a></li>
    )
  }
);

function Navbar(){
    return(
      
        <nav className=" navbar navbar-expand-lg sticky ">
          
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" >
              <li><a href={process.env.PUBLIC_URL} > Home</a></li>
              {scpmenu}
            </ul>
          </div>
        </nav>
    )
}

export default Navbar;