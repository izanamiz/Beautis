import React from "react";
import { Box, Grid, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomContainer from "../../../components/CustomContainer";
import Bubble from "../media/BackgroundBubble.png";
import {
  CustomDesc,
  CustomHeading,
  CustomTitle,
} from "../../../components/CustomTypo";
import CustomButton from "../../../components/CustomButton";
const useStyles = makeStyles((theme) => ({
  bg: {
    paddingTop: "90px",
    backgroundImage: `url(${Bubble})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 0",
    paddingBottom: "73.34px",
  },
  container: {
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      justifyContent: "center",
    },
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      paddingTop: "24px",
    },
  },
  heading: {
    paddingTop: "12px",
  },
  desc: {
    paddingTop: "24px",
    maxWidth: "561px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
}));
const Quota = () => {
  const classes = useStyles();
  return (
    <Box className={classes.bg}>
      <CustomContainer>
        <Grid container className={classes.container}>
          <Grid item md={7} sm={12} xs={12}>
            <CustomTitle className={classes.title}>Get The Quota</CustomTitle>
            <CustomHeading className={classes.heading}>
              Want to be handled by our professional team immediately?
            </CustomHeading>
            <CustomDesc className={classes.desc}>
              Id dui erat sed quam tellus in purus. Pellentesque congue
              fringilla cras tellus enim.
            </CustomDesc>
          </Grid>
          <Grid item md={5} sm={12} xs={12}>
            <Box className={classes.btn}>
              <CustomButton
                padding={" 16px 45px"}
                buttonText={"Make an Appointment"}
              ></CustomButton>
            </Box>
          </Grid>
        </Grid>
      </CustomContainer>
    </Box>
  );
};

export default Quota;
