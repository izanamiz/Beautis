import React from "react";
import Navbar from "../../../../components/Navbar";
import BackToTop from "../../../../components/BackToTop";
import Footer from "../../../../components/Footer";
import ServiceSection from "../../components/ServiceSection";
import Vision from "../../components/Vision";
import Slogan from "../../components/Slogan";
import FaQ from "../../components/FaQ";
const Service = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BackToTop></BackToTop>
      <ServiceSection></ServiceSection>
      <Vision></Vision>
      <Slogan></Slogan>
      <FaQ></FaQ>
      <Footer></Footer>
    </div>
  );
};

export default Service;
