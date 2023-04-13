import { Box, Grid, styled } from "@mui/material";
import CustomContainer from "../../../components/CustomContainer";
import { makeStyles } from "@mui/styles";
import CustomImg from "../../../components/CustomImg";
import Illustration1 from "../media/Illustration-1.png";
import Illustration2 from "../media/Illustration-2.png";
import {
  CustomDesc,
  CustomHeading,
  CustomTitle,
} from "../../../components/CustomTypo";
import Bubble from "../media/BubbleBGFooter.png";
import Logo1 from "../media/LOGO1.png";
import Logo2 from "../media/LOGO2.png";
import Logo3 from "../media/LOGO3.png";
import Logo4 from "../media/LOGO4.png";
import Logo5 from "../media/LOGO5.png";
import React from "react";
const obj = [
  {
    img: Illustration1,
    title: "Our Vision",
    heading: "Be the best and go international",
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.",
    desc2:
      "Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.",
  },
  {
    img: Illustration2,
    title: "Our Mission",
    heading: "Special & premium service to any clients",
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.",
    desc2:
      "Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.",
  },
];
const CustomBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${Bubble})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom left",
  backgroundSize: "auto 100%",
  paddingBottom: "111.34px",
}));
const CustomGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    textAlign: "center!important",
  },
}));
const ListLogo = styled(Box)(({ theme }) => ({
  paddingTop: "100px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "58px",
}));
const useStyles = makeStyles((theme) => ({
  heading: {
    paddingTop: "12px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%!important",
    },
  },
  desc: {
    paddingTop: "12px",
    maxWidth: "475px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%!important",
    },
  },
  desc2: {
    paddingTop: "24px",
  },

  img: {
    maxWidth: "100%",
    [theme.breakpoints.down("md")]: {
      float: "none!important",
    },
  },
}));
const Vision = () => {
  const classes = useStyles();
  return (
    <CustomBox>
      <CustomContainer>
        {obj.map((val,idx) => {
          return (
            <React.Fragment key={idx}>
              <CustomGrid container sx={{ paddingBottom: "103px" }}>
                <Grid
                  item
                  md={6}
                  sm={12}
                  xs={12}
                  order={idx % 2 ? { md: 2 } : { md: 1 }}
                >
                  <CustomImg
                    src={val.img}
                    alt="Illustration"
                    className={classes.img}
                    sx={!(idx % 2) ? { float: "left" } : { float: "right" }}
                  ></CustomImg>
                </Grid>
                <Grid
                  item
                  md={6}
                  sm={12}
                  xs={12}
                  order={!(idx % 2) ? { md: 2 } : { md: 1 }}
                >
                  <Box
                    className={classes.itemWrap}
                    sx={idx % 2 ? { float: "left" } : { float: "right" }}
                  >
                    <CustomTitle>{val.title}</CustomTitle>
                    <CustomHeading
                      className={classes.heading}
                      sx={
                        idx % 2 ? { maxWidth: "530px" } : { maxWidth: "411px" }
                      }
                    >
                      {val.heading}
                    </CustomHeading>
                    <CustomDesc className={classes.desc}>
                      {val.desc1}
                    </CustomDesc>
                    <CustomDesc className={`${classes.desc} ${classes.desc2}`}>
                      {val.desc2}
                    </CustomDesc>
                  </Box>
                </Grid>
              </CustomGrid>
            </React.Fragment>
          );
        })}
      </CustomContainer>
      <CustomContainer sx={{ textAlign: "center" }}>
        <CustomTitle paddingTop={"12px"}>Our Clients</CustomTitle>
        <CustomHeading paddingTop={"12px"}>Well-known agencies</CustomHeading>
        <CustomDesc paddingTop={"20px"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </CustomDesc>
        <ListLogo>
          {[Logo1, Logo2, Logo3, Logo4, Logo5].map((val,idx) => {
            return <CustomImg src={val} key={idx}></CustomImg>;
          })}
        </ListLogo>
      </CustomContainer>
    </CustomBox>
  );
};

export default Vision;
