import { styled, Box, Typography, Collapse } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CustomBox = styled(Box)(({ theme }) => ({
  position: "fixed",
  zIndex: "100",
  top: "100px",
  left: "0",
  right: "0",
  // opacity: "0.95",
  "& a": {
    textDecoration: "none",
  },
}));
const CustomTypography = styled(Typography)(({ theme }) => ({
  paddingTop: "25px",
  paddingBottom: "25px",
  fontWeight: "600",
  fontSize: "1.5rem",
  lineHeight: "24px",
  letterSpacing: "0.1em",
  color: "#091156",
  cursor: "pointer",
  textAlign: "center",
  "&:hover": {
    backgroundColor: "#091156",
    fontWeight: "600",
    color: "#e4e7ff",
  },
}));

const LinkList = () => {
  return (
    <Box>
      <Link to="/home">
        <CustomTypography>Home</CustomTypography>
      </Link>
      <Link to="/about">
        <CustomTypography>About</CustomTypography>
      </Link>
      <Link to="/service">
        <CustomTypography>Service</CustomTypography>
      </Link>
      <Link to="/gallery">
        <CustomTypography>Gallery</CustomTypography>
      </Link>
      <Link to="/contact">
        <CustomTypography>Contact</CustomTypography>
      </Link>
    </Box>
  );
};
const Menu = ({ backgroundColor, toggle }) => {
  return (
    <CustomBox sx={{ backgroundColor: backgroundColor }}>
      <Collapse in={toggle} appear={true} unmountOnExit>
        <LinkList />
      </Collapse>
    </CustomBox>
  );
};

export default Menu;
