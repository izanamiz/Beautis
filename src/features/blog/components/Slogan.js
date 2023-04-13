import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomContainer from "../../../components/CustomContainer";
import SloganBg from "../media/slogan.png";
import Mask from "../media/BackgroundMask.png";

const useStyles = makeStyles((theme) => ({
  bg: {
    marginTop: "43px",
    backgroundImage: `url(${SloganBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 0",
    backgroundSize: "100% 100%",
    position: "relative",
    [theme.breakpoints.down("lg")]: {
      backgroundSize: "auto 100%",
    },
  },
  mask: {
    position: "absolute",
    zIndex: "1",
    top: "0",
    right: 0,
    bottom: 0,
    left: 0,
    backgroundImage: `url(${Mask})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    [theme.breakpoints.down("lg")]: {
      backgroundSize: "auto 100%",
    },
  },
  wrapper: {
    position: "relative",
    zIndex: "2",
    padding: "121px 0 107px",
    display: "flex",
    textAlign: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontWeight: "600!important",
    fontSize: "2.25rem!important",
    lineHeight: "45px!important",
    color: "#FFFFFF!important",
    maxWidth: "500px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  desc: {
    textAlign: "right",
    paddingTop: "9px",
    fontWeight: "500!important",
    fontSize: "1rem",
    lineHeight: "24px",
    color: "#D9D9D9",
    letterSpacing: "0.1em",
    maxWidth: "680px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
}));
const Slogan = () => {
  const classes = useStyles();
  return (
    <Box className={classes.bg}>
      <CustomContainer>
        <Box className={classes.wrapper}>
          <Typography className={classes.heading}>Blog</Typography>
          <Typography className={classes.desc}>Home • Blog</Typography>
        </Box>
      </CustomContainer>
      <Box className={classes.mask}></Box>
    </Box>
  );
};

export default Slogan;
