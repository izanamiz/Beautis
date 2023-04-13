import React from "react";
import Navbar from "../../../../components/Navbar";
import BackToTop from "../../../../components/BackToTop";
import Footer from "../../../../components/Footer";
import Header from "../../components/Header";
import About from "../../components/About";
import Service from "../../components/Service";
import Choosing from "../../components/Choosing";
import Blog from "../../components/Blog";
import Request from "../../components/Request";

const HomePlus = () => {
  return (
    <div>
      <Navbar backgroundColor={"#5e628f"} color={"#D8DCFF"} activecolor={"#ffffff"}></Navbar>
      <Header></Header>
      <About></About>
      <Service></Service>
      <Choosing></Choosing>
      <Blog></Blog>
      <Request></Request>
      <BackToTop></BackToTop>
      <Footer></Footer>
    </div>
  );
};

export default HomePlus;
