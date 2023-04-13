import React from "react";
import Navbar from "../../../../components/Navbar";
import BackToTop from "../../../../components/BackToTop";
import Footer from "../../../../components/Footer";
import Slogan from "../../components/Slogan";
import BlogList from "../BlogList";

const Blog = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BackToTop></BackToTop>
      <Slogan></Slogan>
      <BlogList></BlogList>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
