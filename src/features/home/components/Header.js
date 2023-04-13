import React from "react";
import { Box, Stack, Typography, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SlideBackground from "../media/SlideBackground.png";
import SlideImg from "../media/Frame1.png";
import CustomContainer from "../../../components/CustomContainer";
import CustomButton from "../../../components/CustomButton";
import CustomImg from "../../../components/CustomImg";
import { useNavigate } from "react-router-dom";

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  paddingBottom: "131px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "30px",
  },
}));

const CustomHeading = styled(Typography)(({ theme }) => ({
  marginTop: "59px",
  fontWeight: "600",
  fontSize: "3rem",
  lineHeight: "60px",
  color: "#091156",
}));
const CustomDesc = styled(Typography)(({ theme }) => ({
  marginTop: "6px",
  fontWeight: "500",
  fontSize: "1rem",
  lineHeight: "24px",
  color: "#091156",
  letterSpacing: "0.1em",
  maxWidth: "474px",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));
const CustomStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "8.03px",
}));
const useStyles = makeStyles((theme) => ({
  mainSlider: {
    paddingTop: "263px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "163px",
    },
  },
  center: {
    marginTop: "33px",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  headerBg: {
    backgroundImage: `url(${SlideBackground})`,
    backgroundRepeat: "no-repeat",
    marginTop: "-110.4px",
    paddingBottom: "131px",
  },

  slideBtnItem: {
    width: "14.82px",
    height: "3.09px",
    background: "#eeeeee",
    borderRadius: "50px",
    cursor: "pointer",
    transform: "matrix(1, 0, 0, -1, 0, 0)",
    marginRight: "7px",
  },
  slideBtnItemActive: {
    width: "25.31px",
    height: "8.15px",
    background: "#414880",
    transform: "matrix(1, 0, 0, -1, 0, 0)",
  },
}));
const Header = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  return (
    <>
      <Box className={classes.headerBg}>
        <CustomContainer className={classes.mainSlider}>
          <CustomBox>
            <Box sx={{ flex: "1" }}>
              <CustomHeading>Clinic & beauty consultant</CustomHeading>
              <CustomDesc>
                It is a long established fact that a reader will be by the
                readable content of a page.
              </CustomDesc>
              <Box className={classes.center}>
                <CustomButton
                  buttonText="More Details"
                  padding="16.36px 40px 15.06px 41px "
                  onClick={() => {
                    navigate("/home");
                  }}
                />
              </Box>
            </Box>

            <Box sx={{ flex: "1.25" }}>
              <CustomImg
                src={SlideImg}
                alt="clinic img"
                style={{ maxWidth: "100%" }}
              />
            </Box>
          </CustomBox>
          <CustomStack>
            {[0, 1, 2].map((index) => (
              <Box
                key={index}
                className={
                  index === 1
                    ? `${classes.slideBtnItem} + ${classes.slideBtnItemActive}`
                    : classes.slideBtnItem
                }
              ></Box>
            ))}
          </CustomStack>
        </CustomContainer>
      </Box>
    </>
  );
};

export default Header;
