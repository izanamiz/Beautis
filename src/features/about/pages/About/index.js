import React from "react";
import Navbar from "../../../../components/Navbar";
import BackToTop from "../../../../components/BackToTop";
import Footer from "../../../../components/Footer";
import Header from "../../components/Header";
import Team from "../../components/Team";
import Slogan from "../../components/Slogan";
import Vision from "../../components/Vision";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BackToTop></BackToTop>
      <Header></Header>
      <Team></Team>
      <Slogan></Slogan>
      <Vision></Vision>
      <Footer></Footer>
    </div>
  );
};

export default About;
