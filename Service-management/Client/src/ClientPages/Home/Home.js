import React from "react";
import Caroussel from "../../component/Carousel/Carousel";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import About from "../../component/About/About";
import OurTeam from "../../component/OurTeam/OurTeam";
const Home = () => {
  return (
    <div>      
        <Navbar />
        <Caroussel />
        <About/>
        <OurTeam/>
        <Footer/>
    </div>
  );
};

export default Home;