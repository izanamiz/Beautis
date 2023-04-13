import { Box, Grid, styled, Typography } from "@mui/material";
import CustomContainer from "../../../components/CustomContainer";
import { makeStyles } from "@mui/styles";
import CustomImg from "../../../components/CustomImg";

import {
  CustomDesc,
  CustomHeading,
  CustomTitle,
} from "../../../components/CustomTypo";
import Arrow from "../media/angle-double-right.png";
import Animation1 from "../media/Animation1.png";
import Animation2 from "../media/Animation2.png";
import Animation3 from "../media/Animation3.png";
import React from "react";
const obj = [
  {
    img: Animation1,
    title: "Beauty Consultation",
    heading: "We services beauty consultation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.",
    sub: "Make an Appointment",
  },
  {
    img: Animation2,
    title: "Skin Treatements",
    heading: "Skin care and treatment by expert",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.",
    sub: "Make an Appointment",
  },
  {
    img: Animation3,
    title: "Beauty Product",
    heading: "We present quality beauty products",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.",
    sub: "Make an Appointment",
  },
];
const CustomGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    textAlign: "center!important",
  },
}));
const SubWrap = styled(Box)(({ theme }) => ({
  marginTop: "24px",
  display: "flex",
  alignItems: "center",
  gap: "13px",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));
const CustomSub = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  fontSize: "1rem",
  lineHeight: "24px",
  letterSpacing: "0.1em",
  color: "#091156",
}));
const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: "20px",
  },
  heading: {
    paddingTop: "12px",
    maxWidth: "411px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%!important",
    },
  },
  desc: {
    paddingTop: "12px",
    maxWidth: "475px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%!important",
    },
  },

  img: {
    maxWidth: "100%",
    [theme.breakpoints.down("md")]: {
      float: "none!important",
    },
  },
}));
const Vision = () => {
  const classes = useStyles();
  return (
    <CustomContainer>
      {obj.map((val, idx) => {
        return (
          <React.Fragment key={idx}>
            <CustomGrid container paddingBottom={"92px"}>
              <Grid
                item
                md={6}
                sm={12}
                xs={12}
                order={idx % 2 ? { md: 2 } : { md: 1 }}
              >
                <CustomImg
                  src={val.img}
                  alt="Animation"
                  className={classes.img}
                  sx={!(idx % 2) ? { float: "left" } : { float: "right" }}
                ></CustomImg>
              </Grid>
              <Grid
                item
                md={6}
                sm={12}
                xs={12}
                order={!(idx % 2) ? { md: 2 } : { md: 1 }}
              >
                <Box sx={idx % 2 ? { float: "left" } : { float: "right" }}>
                  <CustomTitle className={classes.title}>
                    {val.title}
                  </CustomTitle>
                  <CustomHeading className={classes.heading}>
                    {val.heading}
                  </CustomHeading>
                  <CustomDesc className={classes.desc}>{val.desc}</CustomDesc>
                  <SubWrap>
                    <CustomSub>{val.sub}</CustomSub>
                    <CustomImg src={Arrow} height={"25px"}></CustomImg>
                  </SubWrap>
                </Box>
              </Grid>
            </CustomGrid>
          </React.Fragment>
        );
      })}
    </CustomContainer>
  );
};

export default Vision;
