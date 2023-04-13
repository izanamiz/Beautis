import React from "react";
import { Box, Grid, Typography, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomContainer from "../../../components/CustomContainer";
import SloganBg from "../media/unsplash_NPjNtTExSJ4.png";
import Mask from "../media/BackgroundMask.png";
import Play from "../media/PlayButton2.svg";
import CustomImg from "../../../components/CustomImg";

const useStyles = makeStyles((theme) => ({
  bg: {
    marginTop: "28px",
    backgroundImage: `url(${SloganBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 0",
    backgroundSize: "100% 100%",
    [theme.breakpoints.down("lg")]: {
      backgroundSize: "auto 100%",
    },
    position: "relative",
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
    padding: "182px 0",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      justifyContent: "center",
    },
  },
  heading: {
    fontWeight: "600!important",
    fontSize: "2.25rem!important",
    lineHeight: "45px!important",
    color: "#FFFFFF!important",
    maxWidth: "600px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  desc: {
    paddingTop: "20px",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "24px",
    color: "#CACACA",
    letterSpacing: "0.1em",
    maxWidth: "555px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  img: {
    float: "right",
    [theme.breakpoints.down("md")]: {
      paddingTop: "24px",
      float: "none",
    },
  },
}));
const Slogan = () => {
  const classes = useStyles();
  return (
    <Box className={classes.bg}>
      <CustomContainer>
        <Grid container className={classes.wrapper}>
          <Grid item md={6} sm={12} xs={12}>
            <Typography className={classes.heading}>
              Best responsibility and service for our customers
            </Typography>
            <Typography className={classes.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </Typography>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <CustomImg src={Play} className={classes.img}></CustomImg>
          </Grid>
        </Grid>
      </CustomContainer>
      <Box className={classes.mask}></Box>
    </Box>
  );
};

export default Slogan;
