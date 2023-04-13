import { Avatar, Box, Collapse, IconButton, Slide } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import BG from "../media/ElementBackground.png";
import {
  CustomDesc,
  CustomHeading,
  CustomTitle,
  ItemDesc,
} from "../../../components/CustomTypo";
import CustomImg from "../../../components/CustomImg";
import ArrowLeft from "../media/arrow-left.png";
import ArrowRight from "../media/arrow-right.png";
import Star from "../media/star.png";
import Avt1 from "../media/testimonials1.png";
import Avt2 from "../media/testimonials2.png";
import Avt3 from "../media/testimonials3.png";
import { TransitionGroup } from "react-transition-group";
import CustomContainer from "../../../components/CustomContainer";
const str =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.";
const obj = [
  {
    img: Avt1,
  },
  {
    img: Avt2,
  },
  {
    img: Avt3,
  },
];

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundImage: `url(${BG})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 0",
    backgroundSize: "100% 100%",
    height: "100vh",
    textAlign: "center",
  },
  title: {
    paddingTop: "118px",
  },
  heading: {
    paddingTop: "12px",
  },
  desc: {
    paddingTop: "24px",
    paddingBottom: "61px",
  },
  itemDesc: {
    paddingTop: "44px",
    maxWidth: "544px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "5",
    WebkitBoxOrient: "vertical",
  },
  slider: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "90px",
    [theme.breakpoints.down("md")]: {
      gap: "24px",
    },
  },

  listIcon: {
    paddingTop: "33px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "11.89px",
  },

  avt: {
    width: "100%",
    height: "auto",
  },
}));

const Testimonial = () => {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [checked, setChecked] = useState(true);

  return (
    <Box className={classes.bg}>
      <CustomContainer>
        <CustomTitle className={classes.title}>Our Testimonials</CustomTitle>
        <CustomHeading className={classes.heading}>
          What our customer says
        </CustomHeading>
        <CustomDesc className={classes.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </CustomDesc>
        <Box className={classes.slider}>
          <IconButton
            onClick={() => {
              setPage(page - 1);
              setChecked(false);
            }}
          >
            <Avatar src={ArrowLeft} />
          </IconButton>
          <Box className={classes.content}>
            <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
              <CustomImg src={obj[Math.abs(page) % 3].img}></CustomImg>
            </Slide>
            <Slide direction="left" in={!checked} mountOnEnter unmountOnExit>
              <CustomImg src={obj[Math.abs(page) % 3].img}></CustomImg>
            </Slide>
            <ItemDesc className={classes.itemDesc}>{str}</ItemDesc>
            <Box className={classes.listIcon}>
              {[...Array(5)].map((x, i) => {
                return <CustomImg src={Star} key={i}></CustomImg>;
              })}
            </Box>
          </Box>

          <IconButton
            onClick={() => {
              setPage(page + 1);
              setChecked(true);
            }}
          >
            <Avatar src={ArrowRight} className={classes.avt} />
          </IconButton>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Testimonial;
