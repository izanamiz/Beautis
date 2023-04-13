import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CustomContainer from "../../../components/CustomContainer";
import {
  CustomDesc,
  CustomHeading,
  CustomTitle,
  ItemHeading,
} from "../../../components/CustomTypo";

import TeamList from "../../../components/TeamList";
import Bubble from "../media/BubbleBG.png";
import Pro1 from "../media/pro1.png";
import Pro2 from "../media/pro2.png";
import Pro3 from "../media/pro3.png";
import CustomImg from "../../../components/CustomImg";
const obj = [
  {
    img: Pro1,
    heading: "Lina Gustav / ",
    subHeading: "Pharmacist",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.",
  },
  {
    img: Pro2,
    heading: "Adam White / ",
    subHeading: "Finance",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.",
  },
  {
    img: Pro3,
    heading: "Jane Doe / ",
    subHeading: "Marketer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.",
  },
];
const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: "125px",
    backgroundImage: `url(${Bubble})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 0",
  },
  title: { textAlign: "center" },

  heading: {
    textAlign: "center",
    paddingTop: "12px",
  },
  desc: {
    textAlign: "center",
    paddingTop: "24px",
  },
  itemWrap: {
    paddingBottom: "79px",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  itemHeading: {
    textAlign: "unset!important",
    paddingBottom: "20px",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },

  subHeading: {
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: "0.875rem!important",
    lineHeight: "22px",
    color: "#8B8B8B",
  },
  img: {
    [theme.breakpoints.down("md")]: {
      paddingBottom: "24px",
    },
  },
}));
const TeamSection = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <CustomContainer>
        <CustomTitle className={classes.title}>Our Team</CustomTitle>
        <CustomHeading className={classes.heading}>
          We are Professional
        </CustomHeading>
        <CustomDesc className={classes.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.{" "}
        </CustomDesc>
        <Box sx={{ paddingTop: "93px" }}>
          <TeamList></TeamList>
        </Box>
      </CustomContainer>

      <CustomContainer sx={{ paddingTop: "153px" }}>
        <CustomTitle className={classes.title}>Assistance Team</CustomTitle>
        <CustomHeading className={classes.heading}>
          Meet the pro assistance
        </CustomHeading>
        <CustomDesc className={classes.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.{" "}
        </CustomDesc>
        <Box sx={{ paddingTop: "110px" }}>
          {obj.map((val, idx) => {
            return (
              <Grid container key={idx} className={classes.itemWrap}>
                <Grid item md={6} sm={12} xs={12}>
                  <CustomImg src={val.img} className={classes.img}></CustomImg>
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                  <ItemHeading className={classes.itemHeading}>
                    {val.heading}
                    <span className={classes.subHeading}>{val.subHeading}</span>
                  </ItemHeading>
                  <CustomDesc>{val.desc}</CustomDesc>
                </Grid>
              </Grid>
            );
          })}
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default TeamSection;
