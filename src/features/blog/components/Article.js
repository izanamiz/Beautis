import React from "react";
import Article1 from "../media/article1.png";
import Article2 from "../media/article2.png";
import Article3 from "../media/article3.png";
import {
  Box,
  Button,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Folder from "../media/folder.png";
import CustomImg from "../../../components/CustomImg";

import Arrow from "../media/caret-right.png";
import {
  CustomHeading,
  CustomTitle,
  CustomDesc,
} from "../../../components/CustomTypo";

const str =
  "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…";
const obj = [
  {
    img: Article1,
    title: "Consultation",
    heading: "How much does a consultation cost at our clinic?",
    desc: str,
  },
  {
    img: Article2,
    title: "Beauty",
    heading: "Watch out! don't choose the wrong beauty product",
    desc: str,
  },
  {
    img: Article3,
    title: "TreatmentsConsultation",
    heading: "About skin care you need to know",
    desc: str,
  },
];

const useStyles = makeStyles((theme) => ({
  itemWrap: {
    background: "#FFFFFF",
    boxShadow: "10px 13px 80px 14px #F2F4FF",
    borderRadius: "50px",
  },
  contentWrap: {
    padding: "56px 42px 100px 76px",
    [theme.breakpoints.down("lg")]: {
      padding: "50px ",
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "24px ",
    },
  },
  titleWrap: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    [theme.breakpoints.down("lg")]: {
      justifyContent: "center",
    },
  },
  itemHeading: {
    paddingTop: "12px",
    maxWidth: "612px",
    [theme.breakpoints.down("lg")]: {
      maxWidth: "100%",
    },
  },
  itemDesc: {
    paddingTop: "20px",
    textAlign: "left!important",
    paddingBottom: "33px",
    maxWidth: "592px",
    [theme.breakpoints.down("lg")]: {
      textAlign: "center!important",
      maxWidth: "100%",
    },
  },
  btn: {
    padding: "16px 38px 15px 60px!important",
    fontWeight: "600!important",
    fontSize: "1rem!important",
    lineHeight: "24px!important",
    textAlign: "center",
    letterSpacing: "0.1em",
    color: "#FFFFFF!important",
    backgroundColor: "#FF64AE!important",
    borderRadius: "50px!important",
    boxShadow: "0px 17px 22px #FFEDF6!important",
    cursor: "pointer",
    textTransform: "none!important",
    "&:hover": {
      backgroundColor: "",
    },
  },
  btnImg: {
    marginLeft: "2px",
  },
}));
const Article = () => {
  const classes = useStyles();
  return (
    <Grid container rowSpacing={"133px"}>
      {obj.map((val, idx) => {
        return (
          <Grid item md={12} sm={12} xs={12} key={idx}>
            <Box className={classes.itemWrap}>
              <CardMedia
                component={"img"}
                image={val.img}
                width="100%"
                height="auto"
              ></CardMedia>
              <Box className={classes.contentWrap}>
                <Box className={classes.titleWrap}>
                  <CustomImg src={Folder}></CustomImg>
                  <CustomTitle>{val.title}</CustomTitle>
                </Box>
                <CustomHeading className={classes.itemHeading}>
                  {val.heading}
                </CustomHeading>
                <CustomDesc className={classes.itemDesc}>{val.desc}</CustomDesc>
                <Button className={classes.btn}>
                  Read More
                  <CustomImg src={Arrow} className={classes.btnImg} />
                </Button>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Article;
