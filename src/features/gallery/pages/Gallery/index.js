import React from "react";
import Navbar from "../../../../components/Navbar";
import BackToTop from "../../../../components/BackToTop";
import Footer from "../../../../components/Footer";
import GallerySection from "../../components/GallerySection";
import Slogan from "../../components/Slogan"
import Quota from "../../components/Quota"

const Gallery = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BackToTop></BackToTop>
      <GallerySection></GallerySection>
      <Slogan></Slogan>
      <Quota></Quota>
      <Footer></Footer>
    </div>
  );
};

export default Gallery;
