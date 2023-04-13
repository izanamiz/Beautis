import React from "react";
import Pro1 from "../../assets/img/pro1.png";
import Pro2 from "../../assets/img/pro2.png";
import Pro3 from "../../assets/img/pro3.png";
import Vector1 from "../../assets/img/Vector1.png";
import Vector2 from "../../assets/img/Vector2.png";
import Vector3 from "../../assets/img/Vector3.png";
import { Box, Grid } from "@mui/material";
import CustomImg from "../CustomImg";
import { ItemDesc, ItemHeading, ItemTitle } from "../CustomTypo";
import { makeStyles } from "@mui/styles";

const obj = [
  {
    img: Pro1,
    title: "Surgeon",
    heading: "Briyan Nevalli",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },
  {
    img: Pro2,
    title: "Dermatologist",
    heading: "Bella sebastian",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },
  {
    img: Pro3,
    title: "Stylist expert",
    heading: "Lilly Adams",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },
];
const useStyles = makeStyles((theme) => ({
  itemWrap: {
    textAlign: "center",
    paddingTop: "91px",
    paddingBottom: "96px",
    "&:hover": {
      background: "#ffffff",
      borderRadius: "42px",
      boxShadow: "0px 25px 50px 25px #f7f7ff",
    },
    [theme.breakpoints.up("md")]: {
      "&:hover": {
        marginLeft: "-56px",
        marginRight: "-56px",
      },
    },
    [theme.breakpoints.down("md")]: {
      background: "#ffffff",
      borderRadius: "42px",
      boxShadow: "0px 25px 50px 25px #f7f7ff",
    },
  },

  textWrap: {
    display: "flex",
    justifyContent: "center",
  },

  itemTitle: { paddingTop: "53px" },
  itemHeading: { paddingTop: "15px" },
  itemDesc: { paddingTop: "18px", maxWidth: "270px" },

  listIcon: {
    paddingTop: "50px",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    gap: "34px",
  },

  icon: {
    position: "relative",
    width: "49px",
    height: "49px",
    background: "#ffffff",
    borderRadius: "50%",
    "&:hover": {
      boxShadow: "-2px 6px 16px -1px #e6e9fd",
    },
  },
  iconImg: {
    position: "absolute",
    transform: "translate(-50%, 50%)",
  },
}));
const TeamList = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent={"center"} spacing={7}>
      {obj.map((val, idx) => {
        return (
          <Grid item md={4} sm={6} xs={12} key={idx}>
            <Box className={classes.itemWrap}>
              <CustomImg src={val.img}></CustomImg>
              <ItemTitle className={classes.itemTitle}>{val.title}</ItemTitle>
              <ItemHeading className={classes.itemHeading}>
                {val.heading}
              </ItemHeading>
              <Box className={classes.textWrap}>
                <ItemDesc className={classes.itemDesc}>{val.desc}</ItemDesc>
              </Box>
              <Box className={classes.listIcon}>
                <Box className={classes.icon}>
                  <CustomImg
                    src={Vector1}
                    className={classes.iconImg}
                  ></CustomImg>
                </Box>
                <Box className={classes.icon}>
                  <CustomImg
                    src={Vector2}
                    className={classes.iconImg}
                  ></CustomImg>
                </Box>
                <Box className={classes.icon}>
                  <CustomImg
                    src={Vector3}
                    className={classes.iconImg}
                  ></CustomImg>
                </Box>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TeamList;
