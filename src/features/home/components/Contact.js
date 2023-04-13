import { Box, Grid, TextField, styled } from "@mui/material";
import React from "react";
import Bubble2 from "../media/BackgroundBubble2.png";
import CustomContainer from "../../../components/CustomContainer";
import { makeStyles } from "@mui/styles";
import ContactAnimation from "../media/ContactAnimations.png";
import CustomImg from "../../../components/CustomImg";
import CustomButton from "../../../components/CustomButton";
import {
  CustomDesc,
  CustomHeading,
  CustomTitle,
} from "../../../components/CustomTypo";
import CenterBox from "../../../components/CenterBox";
import CustomTextField from "../../../components/CustomTextField";
import ContactForm from "../../../components/ContactForm";

const CustomBox = styled(Box)(({ theme }) => ({
  marginTop: "-63px",
  paddingTop: "207px",
  backgroundImage: `url(${Bubble2})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "0 0",
  paddingBottom: "80px",
}));
const CustomGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    justifyContent: "center",
  },
}));

const useStyles = makeStyles((theme) => ({
  img: {
    marginTop: "159px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  heading: {
    paddingTop: "12px",
    maxWidth: "404px",
  },
  desc: {
    paddingTop: "12px",
  },
}));
const Contact = () => {
  const classes = useStyles();
  return (
    <CustomBox>
      <CustomContainer>
        <CustomGrid container spacing={"100px"}>
          <Grid item md={6} sm={12} xs={12}>
            <CustomImg
              src={ContactAnimation}
              className={classes.img}
            ></CustomImg>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <CustomTitle>Contact Us</CustomTitle>
            <CenterBox>
              <CustomHeading className={classes.heading}>
                Send your inquiry to our expert team
              </CustomHeading>
            </CenterBox>
            <CustomDesc className={classes.desc}>
              Lorem ipsum dolor sit amet nulla turapis tellus.
            </CustomDesc>
            <Box sx={{ paddingTop: "44px" }}>
              <ContactForm></ContactForm>
            </Box>
          </Grid>
        </CustomGrid>
      </CustomContainer>
    </CustomBox>
  );
};

export default Contact;
