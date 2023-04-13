import React from "react";
import { Box, Grid, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomContainer from "../../../components/CustomContainer";
import {
  CustomTitle,
  CustomHeading,
  CustomDesc,
} from "../../../components/CustomTypo";
import Bubble from "../media/BubbleBG.png";
import CustomImg from "../../../components/CustomImg";
import S1 from "../media/s1.png";
import S2 from "../media/s2.png";
import S3 from "../media/s3.png";
import S4 from "../media/s4.png";
const useStyles = makeStyles((theme) => ({
  bg: {
    marginTop: "125px",
    backgroundImage: `url(${Bubble})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 0",
    textAlign: "center",
    backgroundSize:"100%",
    paddingBottom: "141px",
  },
  img: {
    width: "100%",
    maxHeight: "254px",
  },
}));
const ServiceSection = () => {
  const classes = useStyles();
  return (
    <Box className={classes.bg}>
      <CustomContainer>
        <CustomTitle>Our Services</CustomTitle>
        <CustomHeading sx={{ paddingTop: "12px" }}>
          We focus on your beauty
        </CustomHeading>
        <CustomDesc sx={{ paddingTop: "20px" }}>
          Lorem ipsum dolor sit amet
        </CustomDesc>
        <Grid
          container
          columnSpacing={{ md: "84px", sm: "24px", xs: "24px" }}
          rowSpacing={{ md: "68px", sm: "24px", xs: "24px" }}
          paddingTop={"70px"}
        >
          <Grid item md={4} sm={4} xs={6}>
            <CustomImg src={S1} className={classes.img}></CustomImg>
          </Grid>
          <Grid item md={8} sm={8} xs={12} order={{ md: 2, sm: 2, xs: 3 }}>
            <CustomImg src={S2} className={classes.img}></CustomImg>
          </Grid>
          <Grid item md={8} sm={8} xs={12} order={{ md: 3, sm: 3, xs: 4 }}>
            <CustomImg src={S3} className={classes.img}></CustomImg>
          </Grid>
          <Grid item md={4} sm={4} xs={6} order={{ md: 4, sm: 4, xs: 2 }}>
            <CustomImg src={S4} className={classes.img}></CustomImg>
          </Grid>
        </Grid>
      </CustomContainer>
    </Box>
  );
};

export default ServiceSection;
