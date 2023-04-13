import React from "react";
import { Box, CardMedia, Typography, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomContainer from "../../../components/CustomContainer";
import SloganImg from "../media/unsplash_Pe9IXUuC6QU.png";
import Mask from "../media/BackgroundMask.png";
const CustomBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${Mask})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  position: "absolute",
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
}));
const TextWrap = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  paddingLeft: "24px",
  paddingRight: "24px",
  [theme.breakpoints.down("md")]: {
    top: "-25%",
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    top: "-60%",
    width: "90%",
  },
  [theme.breakpoints.down("xxs")]: {
    top: "-100%",
    width: "80%",
  },
}));
const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  fontSize: "1rem",
  lineHeight: "20px",
  textAlign: "center",
  color: "#ABB4FF",
  [theme.breakpoints.down("md")]: {
    color: "#FF64AE",
  },
}));
const Heading = styled(Typography)(({ theme }) => ({
  paddingTop: "12px",
  fontWeight: "600",
  fontSize: "2.25rem",
  lineHeight: "45px",
  textAlign: "center",
  color: "#ffffff",
  [theme.breakpoints.down("md")]: {
    color: "#091156",
    paddingTop: "6px",
    fontSize: "1.125rem",
    lineHeight: "22px",
  },
}));
const Desc = styled(Typography)(({ theme }) => ({
  paddingTop: "12px",
  fontWeight: "400",
  fontSize: "1rem",
  lineHeight: "24px",
  textAlign: "center",
  letterSpacing: "0.1em",
  color: "#CACACA",
  [theme.breakpoints.down("md")]: {
    color: "#8B8B8B",
    paddingTop: "6px",
    fontSize: "0.875rem",
    lineHeight: "21px",
  },
}));
const useStyles = makeStyles((theme) => ({
  bg: {
    marginTop: "150px",
    position: "relative",
    marginBottom: "103px",
    [theme.breakpoints.down("md")]: {
      marginTop: "300px",
    },
  },
}));
const Slogan = () => {
  const classes = useStyles();
  return (
    <Box className={classes.bg}>
      <CardMedia
        component="img"
        image={SloganImg}
        sx={{
          width: "100%",
          height: "auto",
        }}
      />
      <CustomBox>
        <CustomContainer>
          <TextWrap>
            <Title>Business Slogan</Title>
            <Heading>Best responsibility and service for our customers</Heading>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </Desc>
          </TextWrap>
        </CustomContainer>
      </CustomBox>
    </Box>
  );
};

export default Slogan;
