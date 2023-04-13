import { Box, Button, Grid, Typography, styled } from "@mui/material";
import React from "react";
import BgFooter from "../../assets/img/FooterBG.png";
import BottomFooter from "../../assets/img/BottomBG.png";
import { makeStyles } from "@mui/styles";
import CustomContainer from "../CustomContainer";
import FooterLogo from "../../assets/img/FooterLogo.png";
import CustomImg from "../CustomImg";
import LinkTo from "../../assets/img/link-to.svg";
import fb from "../../assets/img/facebook-f.png";
import lnkin from "../../assets/img/linkedin-in.png";
import twitter from "../../assets/img/twitter.png";
import ytb from "../../assets/img/youtube.png";
import insta from "../../assets/img/instagram.png";
import { Link } from "react-router-dom";
const CustomBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${BgFooter})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  paddingTop: "253px",
  paddingBottom: "91.16px",
  [theme.breakpoints.down("lg")]: {
    backgroundSize: "auto 100%",
  },
  [theme.breakpoints.down("md")]: {
    paddingTop: "100px",
  },
}));
const BottomBgBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${BottomFooter})`,
  marginTop: "-300px",
  height: "300px",
  backgroundSize: "100% 100%",
  position: "relative",
  zIndex: "-1",
}));
const CustomGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    justifyContent: "center",
  },
}));
const Span = styled("span")(({ theme }) => ({
  fontWeight: 700,
}));
const ContactBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "28px",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
  [theme.breakpoints.down("xxs")]: {
    gap: "10px",
    paddingTop: "10px",
  },
}));
const ListIconBox = styled(Box)(({ theme }) => ({
  paddingTop: "131px",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    paddingTop: "24px",
    textAlign: "center",
    display: "block",
  },
}));
const IconBtnWrap = styled(Button)(({ theme }) => ({
  minWidth: "49px",
  height: "49px",
  padding: "0",
  borderRadius: "50%",
  "&:hover": {
    background: "#0D165C",
    boxShadow: "-2px 6px 16px -1px #0D165C",
  },
}));
const useStyles = makeStyles((theme) => ({
  textBg: {
    padding: "33px 0 26px 26px",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "24px",
    letterSpacing: "0.1em",
    color: "#d7dbff",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0",
    },
  },
  textSm: {
    paddingLeft: "26px",
    fontWeight: "500!important",
    fontSize: "0.875rem!important",
    lineHeight: "21px!important",
    letterSpacing: "0.1em",
    color: "#d7dbff",
    fontStyle: "italic",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0",
    },
  },
  link: {
    display: "flex",
    alignItems: "center",
    gap: "12.66px",
    paddingBottom: "11px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  title: {
    fontWeight: "600!important",
    fontSize: "1.125rem!important",
    lineHeight: "27px!important",
    letterSpacing: "0.1em",
    color: "#FFFFFF",
    paddingBottom: "24px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "24px",
      paddingBottom: "11px",
    },
  },
  heading: {
    fontWeight: "400!important",
    fontSize: "1rem!important",
    lineHeight: "24px!important",
    letterSpacing: "0.1em",
    color: "#D7DBFF",
  },
  iconList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  item: {
    "& a": {
      textDecoration: "none",
    },
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <CustomBox>
        <CustomContainer>
          <CustomGrid container>
            <Grid item md={6} sm={12} xs={12}>
              <CustomImg src={FooterLogo}></CustomImg>
              <Typography className={classes.textBg}>
                <Span>Beautice </Span>is a Beauty Clinic WordPress Theme.
              </Typography>
              <Typography className={classes.textSm}>
                Baker Steet 101, NY, United States.
              </Typography>
              <ContactBox>
                <Typography className={classes.textSm}>
                  +521 569 8966.
                </Typography>
                <Typography className={classes.textSm}>
                  mail@company.com.
                </Typography>
              </ContactBox>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Grid container>
                <Grid item md={6} sm={12} xs={12} className={classes.item}>
                  <Typography className={classes.title}>Pages</Typography>
                  <Link to="/home">
                    <Box className={classes.link}>
                      <CustomImg src={LinkTo}></CustomImg>
                      <Typography className={classes.heading}>Home</Typography>
                    </Box>
                  </Link>
                  <Link to="/about">
                    <Box className={classes.link}>
                      <CustomImg src={LinkTo}></CustomImg>
                      <Typography className={classes.heading}>About</Typography>
                    </Box>
                  </Link>

                  <Link to="/service">
                    <Box className={classes.link}>
                      <CustomImg src={LinkTo}></CustomImg>
                      <Typography className={classes.heading}>
                        Services
                      </Typography>
                    </Box>
                  </Link>

                  <Link to="/gallery">
                    <Box className={classes.link}>
                      <CustomImg src={LinkTo}></CustomImg>
                      <Typography className={classes.heading}>
                        Gallery
                      </Typography>
                    </Box>
                  </Link>

                  <Link to="/team">
                    <Box className={classes.link}>
                      <CustomImg src={LinkTo}></CustomImg>
                      <Typography className={classes.heading}>Team</Typography>
                    </Box>
                  </Link>
                </Grid>
                <Grid item md={6} sm={12} xs={12} className={classes.item}>
                  <Typography className={classes.title}>
                    Informations
                  </Typography>
                  <Box className={classes.link}>
                    <CustomImg src={LinkTo}></CustomImg>
                    <Typography className={classes.heading}>
                      Terms & conditions
                    </Typography>
                  </Box>
                  <Box className={classes.link}>
                    <CustomImg src={LinkTo}></CustomImg>
                    <Typography className={classes.heading}>
                      Privacy policy
                    </Typography>
                  </Box>
                  <Link to="/blog">
                    <Box className={classes.link}>
                      <CustomImg src={LinkTo}></CustomImg>
                      <Typography className={classes.heading}>Blog</Typography>
                    </Box>
                  </Link>

                  <Link to="/contact">
                    <Box className={classes.link}>
                      <CustomImg src={LinkTo}></CustomImg>
                      <Typography className={classes.heading}>
                        Contact
                      </Typography>
                    </Box>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </CustomGrid>
          <ListIconBox>
            <Box className={classes.iconList}>
              <IconBtnWrap>
                <CustomImg src={fb}></CustomImg>
              </IconBtnWrap>
              <IconBtnWrap>
                <CustomImg src={twitter}></CustomImg>
              </IconBtnWrap>
              <IconBtnWrap>
                <CustomImg src={lnkin}></CustomImg>
              </IconBtnWrap>
              <IconBtnWrap>
                <CustomImg src={ytb}></CustomImg>
              </IconBtnWrap>
              <IconBtnWrap>
                <CustomImg src={insta}></CustomImg>
              </IconBtnWrap>
            </Box>
            <Typography className={classes.heading}>
              © AltDesain Studio 2021 - All right reserved.
            </Typography>
          </ListIconBox>
        </CustomContainer>
      </CustomBox>
      <BottomBgBox></BottomBgBox>
    </div>
  );
};

export default Footer;
