import React from "react";
import Navbar from "../../../../components/Navbar";
import BackToTop from "../../../../components/BackToTop";
import Footer from "../../../../components/Footer";
import TeamSection from "../../components/TeamSection";
import Slogan from "../../components/Slogan";
import Testimonial from "../../components/Testimonial";

const Team = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BackToTop></BackToTop>
      <TeamSection></TeamSection>
      <Slogan></Slogan>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default Team;
