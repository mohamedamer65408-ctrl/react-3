import React from "react";
import Navbar from "./home/Navbar";
import Header from "./home/Header";
import About from "./home/About";
import Device from "./home/Device";
import Age from "./home/Age";
import Download from "./home/Download";
import App_section from "./home/App_section";
import Footer from "./home/Footer";

function App(){

  return(

    <div>

      <Navbar/>
      <Header/>
      <About/>
      <Device/>
      <Age/>
      <Download/>
      <App_section/>
      <Footer/>

    </div>

  )
}

export default App;