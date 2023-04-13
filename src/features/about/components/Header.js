import React from "react";
import { Box, Card, CardMedia, styled } from "@mui/material";
import {
  CustomTitle,
  CustomHeading,
  CustomDesc,
} from "../../../components/CustomTypo";
import { makeStyles } from "@mui/styles";
import CustomContainer from "../../../components/CustomContainer";
import CustomImg from "../../../components/CustomImg";
import Clinic from "../media/unsplash_DE6rYp1nAho.png";
import Play from "../media/PlayButton.png";
const CustomBox = styled(Box)(({ theme }) => ({
  paddingTop: "125px",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

const useStyles = makeStyles((theme) => ({
  heading: {
    paddingTop: "12px",
    maxWidth: "732px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      textAlign: "center",
    },
  },
  desc: {
    paddingTop: "12px",
    maxWidth: "680px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      textAlign: "center",
    },
  },
  bg: {
    marginTop: "58px",
    position: "relative",
  },
  play: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <CustomContainer>
      <CustomBox>
        <CustomTitle>About</CustomTitle>
        <CustomHeading className={classes.heading}>
          We are a leading beauty clinic that has been around since 2002
        </CustomHeading>
        <CustomDesc className={classes.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </CustomDesc>
        <Box className={classes.bg}>
          <CardMedia
            component="img"
            image={Clinic}
            sx={{
              width: "100%",
              height: "auto",
            }}
          />
          <CustomImg src={Play} className={classes.play}></CustomImg>
        </Box>
      </CustomBox>
    </CustomContainer>
  );
};

export default Header;
