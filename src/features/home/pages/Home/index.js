import React from "react";
import Header from "../../components/Header";
import Service from "../../components/Service";
import About from "../../components/About";
import Contact from "../../components/Contact";
import { Box } from "@mui/material";
import Navbar from "../../../../components/Navbar";
import BackToTop from "../../../../components/BackToTop";
import ProTeams from "../../components/ProTeams";
import Footer from "../../../../components/Footer";

const Home = () => {
  return (
    <Box>
      <Navbar backgroundColor={"rgb(228, 231, 255)"}></Navbar>
      <Header></Header>
      <Service></Service>
      <About></About>
      <ProTeams></ProTeams>
      <Contact></Contact>
      <BackToTop></BackToTop>
      <Footer></Footer>
    </Box>
  );
};

export default Home;
