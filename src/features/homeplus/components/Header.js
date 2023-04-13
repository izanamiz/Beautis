import React from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BackgroundSlider from "../media/BackgroundSlider.png";
import PlayButton from "../media/PlayButton.png";
import CustomContainer from "../../../components/CustomContainer";
import CustomImg from "../../../components/CustomImg";

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  paddingBottom: "314px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "30px",
  },
}));

const CustomHeading = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  fontSize: "3rem",
  lineHeight: "60px",
  color: "#ffffff",
  maxWidth: "502px",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));
const CustomDesc = styled(Typography)(({ theme }) => ({
  marginTop: "12px",
  fontWeight: "500",
  fontSize: "1rem",
  lineHeight: "24px",
  color: "#D8DCFF",
  letterSpacing: "0.1em",
  maxWidth: "501px",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  color: "#ffffff",
  borderRadius: "15px",
  border: "1px solid #ffffff",
  fontWeight: "600",
  fontSize: "1rem",
  lineHeight: "24px",
  letterSpacing: "0.1rem",
  padding: "14px 31px 14px 29px ",
  cursor: "pointer",
  textTransform: "none",
  display: "block",
  "&:hover": {
    backgroundColor: "#FF64AE",
    borderColor: "#FF64AE",
  },
}));

const useStyles = makeStyles((theme) => ({
  mainSlider: {
    paddingTop: "307px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "163px",
    },
  },
  center: {
    marginTop: "40px",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  headerBg: {
    backgroundImage: `url(${BackgroundSlider})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    marginTop: "-110.4px",
    [theme.breakpoints.down("md")]: {
      backgroundSize: "auto 100%",
    },
  },
  img: {
    maxWidth: "100%",
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.down("md")]: {
      position: "static",
      top: "0",
      left: "0",
      transform: "translate(0, 0)",
    },
  },
}));
const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.headerBg}>
        <CustomContainer className={classes.mainSlider}>
          <CustomBox>
            <Box sx={{ flex: "1" }}>
              <CustomHeading>Your beauty center place</CustomHeading>
              <CustomDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Commodo, massa pellentesque arcu fusce et magna consequat neque
                vitae lobortis.
              </CustomDesc>
              <Box className={classes.center}>
                <CustomButton>More Details</CustomButton>
              </Box>
            </Box>

            <Box sx={{ flex: "1" }}>
              <CustomImg
                src={PlayButton}
                alt="play button"
                className={classes.img}
              />
            </Box>
          </CustomBox>
        </CustomContainer>
      </Box>
    </>
  );
};

export default Header;
