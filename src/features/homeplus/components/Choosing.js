import React from "react";
import { Box, Grid, Typography, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomContainer from "../../../components/CustomContainer";
import Background from "../media/Background.png";
import CustomImg from "../../../components/CustomImg";
import Handshake from "../media/handshake1.png";
import Bro from "../media/brotherhood1.png";
import Earth from "../media/earth1.png";
import Doctor from "../media//doctor1.png";

const obj = [
  {
    img: Handshake,
    textTitle: "100%",
    textHeading: "trusted clinic",
    active: true,
  },
  {
    img: Bro,
    textTitle: "99%",
    textHeading: "customer love",
    active: false,
  },
  {
    img: Earth,
    textTitle: "75+",
    textHeading: "asian branch",
    active: false,
  },
  {
    img: Doctor,
    textTitle: "1.200+",
    textHeading: "licensed worker",
    active: false,
  },
];

const CustomBox = styled(Box)(({ theme }) => ({
  paddingTop: "277px",
}));

const CustomHeading = styled(Typography)(({ theme }) => ({
  paddingTop: "20px",
  fontWeight: "600",
  fontSize: "2.25rem",
  lineHeight: "45px",
  color: "#ffffff",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));
const CustomDesc = styled(Typography)(({ theme }) => ({
  marginTop: "20px",
  fontWeight: "400",
  fontSize: "1rem",
  lineHeight: "24px",
  color: "#D8DCFF",
  letterSpacing: "0.1em",
  maxWidth: "486px",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    textAlign: "center",
  },
}));
const TextTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  fontSize: "2.25rem",
  lineHeight: "45px",
  color: "#FFFFFF",
}));
const TextHeading = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  fontSize: "1rem",
  lineHeight: "20px",
  color: "#FFFFFF",
}));
const useStyles = makeStyles((theme) => ({
  bg: {
    marginTop: "-70px",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 0",
    backgroundSize: "100% 100%",
    [theme.breakpoints.down("lg")]: {
      backgroundSize: "auto 100%",
    },
    paddingBottom: "262.5px",
  },
  itemWrap: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  textWrap: {
    marginLeft: "11px",
  },
  active: {
    color: "#FF9ACB!important",
  },
}));
const Choosing = () => {
  const classes = useStyles();
  return (
    <Box className={classes.bg}>
      <CustomContainer>
        <CustomBox>
          <Grid container columnSpacing={"139px"} rowSpacing={"49px"}>
            <Grid item md={6} sm={12} xs={12}>
              <CustomHeading>Why choosing us?</CustomHeading>
              <CustomDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis.
              </CustomDesc>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Grid container rowSpacing={"43px"}>
                {obj.map((val, idx) => {
                  return (
                    <Grid item md={6} sm={6} xs={12} key={idx}>
                      <Box className={classes.itemWrap}>
                        <CustomImg src={val.img}></CustomImg>
                        <Box className={classes.textWrap}>
                          <TextTitle>{val.textTitle}</TextTitle>
                          {val.active && (
                            <TextHeading className={classes.active}>
                              {val.textHeading}
                            </TextHeading>
                          )}
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </CustomBox>
      </CustomContainer>
    </Box>
  );
};

export default Choosing;
