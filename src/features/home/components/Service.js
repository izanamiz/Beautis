import React from "react";
import { Box, Grid } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import Animation1 from "../media/Animation1.png";
import Animation2 from "../media/Animation2.png";
import Animation3 from "../media/Animation3.png";
import CustomContainer from "../../../components/CustomContainer";

import {
  CustomTitle,
  CustomHeading,
  CustomDesc,
  ItemHeading,
  ItemDesc,
} from "../../../components/CustomTypo";
import CustomImg from "../../../components/CustomImg";

const obj = [
  {
    img: Animation1,
    heading: "Beauty consultation",
    desc: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
  },
  {
    img: Animation2,
    heading: "Skin treatments",
    desc: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
  },
  {
    img: Animation3,
    heading: "Beauty product",
    desc: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
  },
];
const useStyles = makeStyles((theme) => ({
  textWrap: {
    display: "flex",
    justifyContent: "center",
  },
  heading: {
    maxWidth: "450px",
    paddingTop: "12px",
    textAlign: "center",
  },
  desc: {
    maxWidth: "848px",
    paddingTop: "12px",
    paddingBottom: "82px",
    textAlign: "center",
  },
  itemWrap: {
    background: "#ffffff",
    borderRadius: "42px",
    boxShadow: "0px 25px 50px 25px #f7f7ff",
    textAlign: "center",
    padding: "59px 35px 69px",
  },
  itemHeading: {
    paddingTop: "58px",
  },
  itemDesc: {
    paddingTop: "21px",
    maxWidth: "274px",
  },
}));
const Service = () => {
  const classes = useStyles();
  return (
    <CustomContainer>
      <CustomTitle sx={{ textAlign: "center" }}>Main Service </CustomTitle>
      <Box className={classes.textWrap}>
        <CustomHeading className={classes.heading}>
          Learn services to focus on your beauty{" "}
        </CustomHeading>
      </Box>
      <Box className={classes.textWrap}>
        <CustomDesc className={classes.desc}>
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.
        </CustomDesc>
      </Box>
      <Grid container justifyContent={"center"} spacing={7}>
        {obj.map((val, idx) => {
          return (
            <Grid item md={4} sm={6} xs={12} key={idx}>
              <Box className={classes.itemWrap}>
                <CustomImg src={val.img}></CustomImg>
                <ItemHeading className={classes.itemHeading}>
                  {val.heading}
                </ItemHeading>
                <Box className={classes.textWrap}>
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

export default Service;
