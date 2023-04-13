import React from "react";
import { Box, Grid, styled, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomContainer from "../../../components/CustomContainer";
import Blog1 from "../media/blog1.png";
import Blog2 from "../media/blog2.png";
import Blog3 from "../media/blog3.png";
import {
  CustomDesc,
  CustomHeading,
  CustomTitle,
  ItemDesc,
  ItemHeading,
} from "../../../components/CustomTypo";
import CustomImg from "../../../components/CustomImg";
import Arrow from "../media/arrow.png";
import { useNavigate } from "react-router-dom";

const obj = [
  {
    img: Blog1,
    heading: "How much does a consultation cost at our clinic?",
    desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...",
  },
  {
    img: Blog2,
    heading: "Watch out! don't choose the wrong beauty product",
    desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...",
  },
  {
    img: Blog3,
    heading: "About skin care you need to know",
    desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...",
  },
];
const ItemBox = styled(Box)(({ theme }) => ({
  background: "#FFFFFF",
  boxShadow: "0px 25px 50px 5px #F6F7FF",
  borderRadius: "25px",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));
const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: "15px",
  marginLeft: "-8px",
  fontWeight: "600",
  fontSize: "0.875rem",
  lineHeight: "17px",
  color: "#FF64AE",
  textTransform: "none",
  borderRadius: "50px",
  "&:hover": {
    borderColor: "#FF64AE",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "0",
  },
}));

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
  },
  heading: {
    paddingTop: "12px",
    textAlign: "center",
  },
  desc: {
    paddingTop: "12px",
    textAlign: "center",
  },
  img: {
    width: "100%",
  },
  textBox: {
    padding: "56px 38px 72px",
  },
  itemHeading: {
    textAlign: "left!important",
    display: "-webkit-box",
    "-webkit-line-clamp": "2",
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    [theme.breakpoints.down("md")]: {
      textAlign: "center!important",
    },
  },
  itemDesc: {
    paddingTop: "18px",
    maxWidth: "274px",
    textAlign: "left!important",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      textAlign: "center!important",
    },
  },
  icon: {
    marginLeft: "12px",
  },
}));

const Blog = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  return (
    <CustomContainer sx={{ paddingTop: "110.5px" }}>
      <CustomTitle className={classes.title}>The Blog</CustomTitle>
      <CustomHeading className={classes.heading}>Our latest news</CustomHeading>
      <CustomDesc className={classes.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </CustomDesc>

      <Grid
        container
        justifyContent={"center"}
        columnSpacing={"49px"}
        rowSpacing={"49px"}
        sx={{ paddingTop: "79px" }}
      >
        {obj.map((val, idx) => {
          return (
            <Grid item md={4} sm={6} xs={12} key={idx}>
              <ItemBox>
                <CustomImg src={val.img} className={classes.img}></CustomImg>
                <Box className={classes.textBox}>
                  <ItemHeading className={classes.itemHeading}>
                    {val.heading}
                  </ItemHeading>
                  <ItemDesc className={classes.itemDesc}>{val.desc}</ItemDesc>
                  <CustomButton
                    onClick={() => {
                      navigate("/blog");
                    }}
                  >
                    Learn more
                    <CustomImg src={Arrow} className={classes.icon}></CustomImg>
                  </CustomButton>
                </Box>
              </ItemBox>
            </Grid>
          );
        })}
      </Grid>
    </CustomContainer>
  );
};

export default Blog;
