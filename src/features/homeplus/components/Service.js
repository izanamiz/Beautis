import React from "react";
import { Box, Button, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomContainer from "../../../components/CustomContainer";
import Icon1 from "../media/icon-1.png";
import Icon2 from "../media/icon-2.png";
import Icon3 from "../media/icon-3.png";
import Wave from "../media/WaveLine.png";
import {
  CustomTitle,
  CustomHeading,
  CustomDesc,
  ItemHeading,
  ItemDesc,
} from "../../../components/CustomTypo";
import CustomImg from "../../../components/CustomImg";
import Arrow from "../media/arrow.png";
import { useNavigate } from "react-router-dom";

const obj = [
  {
    img: Icon1,
    heading: "Beauty consultation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
  {
    img: Icon2,
    heading: "Skin treatments",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
  {
    img: Icon3,
    heading: "Beauty product",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
];
const CustomBox = styled(Box)(({ theme }) => ({
  paddingBottom: "184.34px",
  backgroundImage: `url(${Wave})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "0 100%",
}));
const ListItemBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "66px",
  flexWrap: "wrap",
}));

const ItemBox = styled(Box)(({ theme }) => ({
  maxWidth: "261px",
  background: "#ffffff",
  border: "1px solid #9BA2E0",
  borderRadius: "25px",
  textAlign: "left!important",
  [theme.breakpoints.down("md")]: {
    width: "50%",
    textAlign: "center!important",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "center!important",
  },
}));
const ContentBox = styled(Box)(({ theme }) => ({
  padding: "31px 36px 47px",
  [theme.breakpoints.down("md")]: {
    textAlign: "center!important",
  },
}));
const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: "12px",
  marginLeft: "-8px",
  fontWeight: "600",
  fontSize: "0.875rem",
  lineHeight: "17px",
  color: "#FF64AE",
  textTransform: "none",
  borderRadius: "50px",
  "&:hover": {
    borderColor: "#FF64AE",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "0",
  },
}));

const useStyles = makeStyles((theme) => ({
  heading: {
    paddingTop: "12px",
    textAlign: "center",
  },
  desc: {
    paddingTop: "20px",
    paddingBottom: "82px",
    textAlign: "center",
  },

  itemHeading: {
    paddingTop: "12px",
    textAlign: "left!important",
    [theme.breakpoints.down("md")]: {
      textAlign: "center!important",
    },
  },
  itemDesc: {
    paddingTop: "18px",
    maxWidth: "274px",
    textAlign: "left!important",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      textAlign: "center!important",
    },
  },
  icon: {
    marginLeft: "12px",
  },
}));
const Service = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  return (
    <CustomBox>
      <CustomContainer>
        <CustomTitle sx={{ textAlign: "center" }}>Main Services </CustomTitle>
        <CustomHeading className={classes.heading}>
          Our focus services
        </CustomHeading>
        <CustomDesc className={classes.desc}>
          Lorem ipsum dolor sit amet.
        </CustomDesc>
        <ListItemBox>
          {obj.map((val, idx) => {
            return (
              <ItemBox key={idx}>
                <ContentBox>
                  <CustomImg src={val.img}></CustomImg>
                  <ItemHeading className={classes.itemHeading}>
                    {val.heading}
                  </ItemHeading>
                  <ItemDesc className={classes.itemDesc}>{val.desc}</ItemDesc>
                  <CustomButton
                    onClick={() => {
                      navigate("/service");
                    }}
                  >
                    Learn more
                    <CustomImg src={Arrow} className={classes.icon}></CustomImg>
                  </CustomButton>
                </ContentBox>
              </ItemBox>
            );
          })}
        </ListItemBox>
      </CustomContainer>
    </CustomBox>
  );
};

export default Service;
