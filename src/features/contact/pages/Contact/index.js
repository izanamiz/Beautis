import React from "react";
import Navbar from "../../../../components/Navbar";
import BackToTop from "../../../../components/BackToTop";
import Footer from "../../../../components/Footer";
import MainTitle from "../../components/MainTitle";
import ContactSection from "../../components/ContactSection";
import Info from "../../components/Info";

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BackToTop></BackToTop>
      <MainTitle></MainTitle>
      <ContactSection></ContactSection>
      <Info></Info>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
