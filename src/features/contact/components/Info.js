import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CustomContainer from "../../../components/CustomContainer";
import CustomImg from "../../../components/CustomImg";
import {
  CustomTitle,
  CustomHeading,
  CustomDesc,
  ItemTitle,
  ItemDesc,
} from "../../../components/CustomTypo";
import { makeStyles } from "@mui/styles";
import Vector1 from "../media/Vector1.png";
import Vector2 from "../media/Vector2.png";
import Vector3 from "../media/Vector3.png";
const obj = [
  {
    img: Vector1,
    title: "Address",
    heading: "101 Baker Street, NY",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },
  {
    img: Vector2,
    title: "Phone",
    heading: "+896 120 5889",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },
  {
    img: Vector3,
    title: "Mail",
    heading: "mail@company.com",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },
];
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "112px",
    textAlign: "center",
  },
  heading: {
    paddingTop: "12px",
  },
  desc: {
    paddingTop: "24px",
  },
  grid: {
    paddingTop: "93px",
    paddingBottom: "112.34px",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      gap: "50px",
    },
  },

  itemWrap: {
    padding: "79px 37px 71px",
    "&:hover": {
      background: "#FFFFFF",
      boxShadow: "0px 25px 50px 25px #F7F7FF",
      borderRadius: "42px",
    },
    [theme.breakpoints.down("sm")]: {
      background: "#FFFFFF",
      boxShadow: "0px 25px 50px 25px #F7F7FF",
      borderRadius: "42px",
      padding: "79px 79px 79px",
    },
  },
  itemTitle: {
    paddingTop: "46px",
  },

  itemHeading: {
    paddingTop: "15px",
    fontWeight: "600!important",
    fontSize: "1.5rem!important",
    lineHeight: "30px",
    textAlign: "center!important",
    color: "#091156!important",
  },
  textDesc: {
    display: "flex",
    justifyContent: "center",
  },
  itemDesc: {
    paddingTop: "6px",
    maxWidth: "270px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
}));
const Info = () => {
  const classes = useStyles();

  return (
    <CustomContainer className={classes.container}>
      <CustomTitle className={classes.title}>Get in Touch</CustomTitle>
      <CustomHeading className={classes.heading}>
        Get direct handling by us
      </CustomHeading>
      <CustomDesc className={classes.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
      </CustomDesc>
      <Grid container className={classes.grid}>
        {obj.map((val, idx) => {
          return (
            <Grid item md={4} sm={6} xs={12} key={idx}>
              <Box className={classes.itemWrap}>
                <CustomImg src={val.img}></CustomImg>
                <ItemTitle className={classes.itemTitle}>{val.title}</ItemTitle>
                <Typography className={classes.itemHeading}>
                  {val.heading}
                </Typography>
                <Box className={classes.textDesc}>
                  {" "}
                  <ItemDesc className={classes.itemDesc}>{val.desc}</ItemDesc>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </CustomContainer>
  );
};

export default Info;
