import React from "react";
import { Box, CardMedia, Grid, styled } from "@mui/material";
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
    backgroundSize: "100%",
    paddingBottom: "141px",
  },
  img: {
    width: "auto",
    height: "100%",
    borderRadius: "25px",
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
          columnSpacing={{ md: "84px", bg: "50px", xxs: "35px", xs: "24px" }}
          rowSpacing={{ md: "68px", bg: "50px", xxs: "35px", xs: "24px" }}
          paddingTop={"70px"}
        >
          <Grid item sm={4} xxs={6} xs={6}>
            <CardMedia
              component="img"
              src={S1}
              className={classes.img}
            ></CardMedia>
          </Grid>
          <Grid item sm={8} xxs={12} xs={12} order={{ sm: 2, xxs: 3, xs: 3 }}>
            <CardMedia
              component="img"
              src={S2}
              className={classes.img}
            ></CardMedia>
          </Grid>
          <Grid item sm={8} xxs={12} xs={12} order={{ sm: 3, xxs: 4, xs: 4 }}>
            <CardMedia
              component="img"
              src={S3}
              className={classes.img}
            ></CardMedia>{" "}
          </Grid>
          <Grid item sm={4} xxs={6} xs={6} order={{ sm: 4, xxs: 2, xs: 2 }}>
            <CardMedia
              component="img"
              src={S4}
              className={classes.img}
            ></CardMedia>
          </Grid>
        </Grid>
      </CustomContainer>
    </Box>
  );
};

export default ServiceSection;
