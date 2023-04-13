import React from "react";
import { Box, Grid, TextField, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomContainer from "../../../components/CustomContainer";
import { CustomDesc, CustomHeading } from "../../../components/CustomTypo";
import Wave from "../media/Wave2.png";
import Phone from "../media/phone-volume.png";
import CustomImg from "../../../components/CustomImg";
import CustomTextField from "../../../components/CustomTextField";

const CustomBox = styled(Box)(({ theme }) => ({
  marginTop: "38px",
  backgroundImage: `url(${Wave})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "0 0",
}));

const CustomButton = styled(Box)(({ theme }) => ({
  backgroundColor: "#FF64AE",
  borderRadius: "0px 25px 25px 0px",
  padding: "0px 34px",
  marginLeft: "-7px",
  borderColor: "#FF64AE",
  cursor: "pointer",
  textTransform: "none",
  border: "none",
}));

const useStyles = makeStyles((theme) => ({
  heading: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  desc: {
    paddingTop: "12px",
    maxWidth: "391px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      textAlign: "center",
    },
  },
  descSub: {
    color: "#091156!important",
    fontWeight: "600!important",
  },
  text: {
    paddingTop: "8px",
    fontWeight: "400",
    fontStyle: "italic",
    fontSize: "12px",
    lineHeight: "18px",
    textAlign: "right",
    letterSpacing: "0.1em",
    color: "#8B8B8B",
  },
  textField: {
    "& fieldset": {
      borderRadius: "15px 0 0 15px!important",
    },
  },
  img: {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
}));
const Request = () => {
  const classes = useStyles();
  return (
    <CustomBox>
      <CustomContainer>
        <Grid container sx={{ padding: "131px 0 131px" }}>
          <Grid item md={5} sm={12} xs={12}>
            <CustomHeading className={classes.heading}>
              Request call services
            </CustomHeading>
            <CustomDesc className={classes.desc}>
              Lorem ipsum dolor sit amet, consect adipiscing elit{" "}
              <span className={classes.descSub}>Contact Us.</span>
            </CustomDesc>
          </Grid>

          <Grid item md={7} sm={12} xs={12}>
            <Box sx={{ display: "flex" }}>
              <CustomTextField
                label="Insert your phone number here"
                className={classes.textField}
              />
              <CustomButton>
                <CustomImg src={Phone} className={classes.img}></CustomImg>
              </CustomButton>
            </Box>

            <Box className={classes.text}>
              Toll free for our coverage areas.
            </Box>
          </Grid>
        </Grid>
      </CustomContainer>
    </CustomBox>
  );
};

export default Request;
