import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomContainer from "../../../components/CustomContainer";
import SloganBg from "../media/unsplash_eflLpWC1Geo.png";
import Mask from "../media/BackgroundMask.png";
import Play from "../media/PlayButton.png";
import CustomImg from "../../../components/CustomImg";

const useStyles = makeStyles((theme) => ({
  bg: {
    marginTop: "126px",
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
    padding: "170px 0",
    textAlign: "center",
  },
  heading: {
    fontWeight: "600!important",
    fontSize: "2.25rem!important",
    lineHeight: "45px!important",
    color: "#FFFFFF!important",
  },
  textWrap: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "41px",
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
}));
const Slogan = () => {
  const classes = useStyles();
  return (
    <Box className={classes.bg}>
      <CustomContainer>
        <Box className={classes.wrapper}>
          <Typography className={classes.heading}>
            Watch the video tour
          </Typography>
          <Box className={classes.textWrap}>
            <Typography className={classes.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </Typography>
          </Box>

          <CustomImg src={Play}></CustomImg>
        </Box>
      </CustomContainer>
      <Box className={classes.mask}></Box>
    </Box>
  );
};

export default Slogan;
