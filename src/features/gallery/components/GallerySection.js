import React from "react";
import CustomContainer from "../../../components/CustomContainer";
import {
  CustomDesc,
  CustomHeading,
  CustomTitle,
} from "../../../components/CustomTypo";
import { Grid } from "@mui/material";
import CustomImg from "../../../components/CustomImg";
import g1 from "../media/g1.png";
import g2 from "../media/g2.png";
import g3 from "../media/g3.png";
import g4 from "../media/g4.png";
import g5 from "../media/g5.png";
import g6 from "../media/g6.png";
import g7 from "../media/g7.png";
import g8 from "../media/g8.png";
import g9 from "../media/g9.png";
import { makeStyles } from "@mui/styles";

const obj = [g1, g2, g3, g4, g5, g6, g7, g8, g9];
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "125px",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  heading: {
    paddingTop: "12px",
  },
  desc: {
    float: "right",
    maxWidth: "407px",
    paddingTop: "12px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  grid: {
    paddingTop: "75px",
    justifyContent: "center!important",
    paddingBottom: "66px",
  },
  descSub: {
    maxWidth: "660px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      textAlign: "center",
    },
  },
  sub: {
    color: "#091156",
    fontWeight: "600!important",
    marginLeft: "0.1rem",
  },
}));
const GallerySection = () => {
  const classes = useStyles();
  return (
    <CustomContainer className={classes.container}>
      <CustomTitle>Our Gallery</CustomTitle>
      <Grid container>
        <Grid item md={7} sm={12} xs={12}>
          <CustomHeading className={classes.heading}>
            Check out the collection pictures from our clinic
          </CustomHeading>
        </Grid>
        <Grid item md={5} sm={12} xs={12}>
          <CustomDesc className={classes.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </CustomDesc>
        </Grid>
      </Grid>
      <Grid container spacing={"38px"} className={classes.grid}>
        {obj.map((val, idx) => {
          return (
            <Grid item md={4} xxs={6} xs={12} key={idx}>
              <CustomImg src={val} width={"100%"}></CustomImg>
            </Grid>
          );
        })}
      </Grid>
      <CustomDesc className={classes.descSub}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim,
        <span className={classes.sub}>our teams.</span>
      </CustomDesc>
    </CustomContainer>
  );
};

export default GallerySection;
