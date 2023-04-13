import { Box, CardMedia, Grid } from "@mui/material";
import React from "react";
import CustomImg from "../../../components/CustomImg";
import ContactForm from "../../../components/ContactForm";
import ContactAnimation from "../media/ContactAnimations.png";
import { makeStyles } from "@mui/styles";
import CustomContainer from "../../../components/CustomContainer";
import Bubble from "../media/BackgroundBubble.png";
import Map from "../media/map.png";
const useStyles = makeStyles((theme) => ({
  bg: {
    marginTop: "-52px",
    backgroundImage: `url(${Bubble})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 0",
  },
  container: {
    paddingTop: "96px",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  formWrap: {
    marginLeft: "50px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0",
    },
  },
}));

const ContactSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.bg}>
      <CustomContainer>
        <Grid container className={classes.container}>
          <Grid item md={6} sm={12} xs={12}>
            <CustomImg
              src={ContactAnimation}
              className={classes.img}
            ></CustomImg>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Box className={classes.formWrap}>
              <ContactForm></ContactForm>
            </Box>
          </Grid>
        </Grid>
      </CustomContainer>
      <CardMedia
        component={"img"}
        image={Map}
        sx={{ paddingTop: "112px" }}
      ></CardMedia>
    </Box>
  );
};

export default ContactSection;
