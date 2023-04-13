import React from "react";
import {
  CustomDesc,
  CustomHeading,
  CustomTitle,
} from "../../../components/CustomTypo";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomContainer from "../../../components/CustomContainer";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "125px",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  textWrap: {
    display: "flex",
    justifyContent: "center",
  },
  heading: {
    paddingTop: "12px",
  },
  desc: {
    paddingTop: "12px",
    maxWidth: "430px",
    float: "right",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      float: "none",
    },
  },
}));
const MainTitle = () => {
  const classes = useStyles();
  return (
    <CustomContainer className={classes.container}>
      <CustomTitle>Contact Us</CustomTitle>
      <Grid container className={classes.textWrap}>
        <Grid item md={6} sm={12} xs={12}>
          <CustomHeading className={classes.heading}>
            Contact service for our customers
          </CustomHeading>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <CustomDesc className={classes.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </CustomDesc>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default MainTitle;
