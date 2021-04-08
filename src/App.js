import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Banner from './Header';
import Maincontent from './Maincontent';
import Footer from './Footer';
import logo from './logo512.png';

function App() {
  return (
    <div className="App">
      <div class="container-fluid">
        <div class="row">
          <div className="col-12 col-sm-12 col-md-3 col-xl-2 bd-sidebar ">
            <a href={process.env.PUBLIC_URL} > 
              <img src={logo} alt="Logo" className="mdWidth70"/>
            </a>
            <Navbar /></div>
          <div className="col-12 col-md-9 col-xl-10 p-0 bg-dark text-light">
            <Banner />
            <Maincontent />
            <Footer />
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;