import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomContainer from "../../../components/CustomContainer";
import SloganBg from "../media/Slogan.png";
import Mask from "../media/BackgroundMask.png";
import CustomImg from "../../../components/CustomImg";

const useStyles = makeStyles((theme) => ({
  bg: {
    marginTop: "25px",
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
    padding: "180px 0 196px",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
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
    paddingTop: "9px",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "24px",
    color: "#CACACA",
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
          <Typography className={classes.heading}>
            Customer satisfaction is our main goal{" "}
          </Typography>
          <Typography className={classes.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </Typography>
        </Box>
      </CustomContainer>
      <Box className={classes.mask}></Box>
    </Box>
  );
};

export default Slogan;
