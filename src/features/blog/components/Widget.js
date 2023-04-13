import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CustomImg from "../../../components/CustomImg";
import SearchIcon from "../media/Vector.png";
import Post1 from "../media/post1.png";
import Post2 from "../media/post2.png";
import Post3 from "../media/post3.png";
import Fb from "../media/facebook-f.png";
import Twt from "../media/twitter.png";
import Ins from "../media/instagram.png";
import Lkn from "../media/linkedin-in.png";

const postTitle = "01 jan 2021";
const postDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing.";
const posts = [
  {
    img: Post1,
    title: postTitle,
    desc: postDesc,
  },
  {
    img: Post2,
    title: postTitle,
    desc: postDesc,
  },
  {
    img: Post3,
    title: postTitle,
    desc: postDesc,
  },
];
const ctgs = ["Consultation", "Beauty", "Treatments", "News"];
const tags = [
  "beauty",
  "cute",
  "skin",
  "glow",
  "style",
  "clinic",
  "style",
  "great",
  "cute",
];
const connects = [Fb, Twt, Ins, Lkn];
const useStyles = makeStyles((theme) => ({
  wrapper: {},
  searchBar: {
    display: "flex",
    marginBottom: "76px",
    "& .input": {
      width: "100%",
      "& .MuiInputBase-root": {},
      "& input": {
        backgroundColor: "#ffffff",
        paddingLeft: "27px!important",
      },

      "& label": {
        fontFamily: "Poppins",
        fontSize: "1rem!important",
        lineHeight: "24px!important",
        letterSpacing: "0.1em!important",
        color: "#8B8B8B!important",
        paddingLeft: "27px!important",
        paddingTop: "5px",
      },
      "& fieldset": {
        border: "none!important",
        borderRadius: "50px 0 0 50px!important",
        boxShadow: "-2px 4px 31px 9px #F2F4FF!important",
      },
    },
  },
  btn: {
    fontWeight: "600!important",
    fontSize: "1rem!important",
    lineHeight: "24px!important",
    textAlign: "center",
    letterSpacing: "0.1em",
    color: "",
    backgroundColor: " #172176!important",
    borderRadius: "0px 50px 50px 0px!important",
    cursor: "pointer",
    textTransform: "none!important",
    "&:hover": {
      backgroundColor: "",
    },
  },

  itemWrap: {
    marginBottom: "83px",
    padding: "58px 0 0 49px",
    background: "#FFFFFF",
    boxShadow: "-2px 4px 31px 9px #F2F4FF",
    borderRadius: "25px",
    [theme.breakpoints.down("lg")]: {
      padding: "50px",
    },
    [theme.breakpoints.down("bg")]: {
      padding: "24px",
    },
  },
  postGrid: {
    paddingTop: "30px",
    paddingBottom: "60px",
    paddingRight: "28px",
    [theme.breakpoints.down("lg")]: {
      paddingRight: "0",
      paddingBottom: "0",
    },
  },
  heading: {
    fontWeight: "600!important",
    fontSize: "1rem!important",
    lineHeight: "20px!important",
    color: "#091156!important",
    [theme.breakpoints.down("lg")]: {
      textAlign: "center",
    },
  },
  itemTitle: {
    fontWeight: "600!important",
    fontSize: "0.875rem!important",
    lineHeight: "21px!important",
    color: "#FF64AE!important",
    letterSpacing: "0.1em",
  },
  itemDesc: {
    fontWeight: "400!important",
    fontSize: "0.75rem!important",
    lineHeight: "18px!important",
    color: "#8B8B8B!important",
    letterSpacing: "0.1em",
  },
  ctgDescWrap: {
    paddingTop: "22px",
    paddingBottom: "49px",
    [theme.breakpoints.down("lg")]: {
      paddingBottom: "0",
    },
  },
  ctgDesc: {
    fontWeight: "400!important",
    fontSize: "0.875rem!important",
    lineHeight: "21px!important",
    color: "#8B8B8B!important",
    letterSpacing: "0.1em",
    [theme.breakpoints.down("lg")]: {
      textAlign: "center",
    },
  },
  cloudGrid: {
    paddingTop: "23px",
    paddingBottom: "57px",
    paddingRight: "44px",
    [theme.breakpoints.down("lg")]: {
      paddingRight: "0",
      paddingBottom: "0",
    },
  },
  tagWrap: {
    background: "#FFFFFF",
    boxShadow: "0px 4px 17px #EEF0FF",
    borderRadius: "50px",
    textAlign: "center",
    padding: "2px",
  },
  iconList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "21px",
    paddingTop: "30px",
    paddingBottom: "62px",
    [theme.breakpoints.down("lg")]: {
      justifyContent: "center",
      paddingBottom: "0",
    },
  },
  iconWrap: {
    background: "#FFFFFF",
    boxShadow: "0px 4px 19px 11px #F6F7FF",
    borderRadius: "50%",
  },
}));
const Widget = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      {/* Search bar  */}
      <Box className={classes.searchBar}>
        <TextField
          id="outlined-basic"
          label="Search here ..."
          variant="outlined"
          className="input"
        />
        <Button className={classes.btn}>
          <CustomImg src={SearchIcon}></CustomImg>
        </Button>
      </Box>
      <Grid container columnSpacing={{ sm: "50px" }}>
        <Grid item lg={12} sm={6} xs={12}>
          {/* Recent Posts  */}
          <Box className={classes.itemWrap}>
            <Typography className={classes.heading}>Recent Posts</Typography>
            <Grid
              container
              rowSpacing={"21px"}
              columnSpacing={"26px"}
              className={classes.postGrid}
            >
              {posts.map((val, idx) => {
                return (
                  <React.Fragment key={idx}>
                    <Grid item md={4} sm={4} xs={4}>
                      <CustomImg src={val.img}></CustomImg>
                    </Grid>
                    <Grid item md={8} sm={8} xs={8} sx={{ float: "right" }}>
                      <Typography className={classes.itemTitle}>
                        {val.title}
                      </Typography>
                      <Typography className={classes.itemDesc} paddingTop="5px">
                        {val.desc}
                      </Typography>
                    </Grid>
                  </React.Fragment>
                );
              })}
            </Grid>
          </Box>
        </Grid>
        <Grid item lg={12} sm={6} xs={12}>
          {/* Categories */}
          <Box className={classes.itemWrap}>
            <Typography className={classes.heading}>Categories</Typography>
            <Box className={classes.ctgDescWrap}>
              {ctgs.map((val, idx) => {
                return (
                  <Typography
                    className={classes.ctgDesc}
                    key={idx}
                    sx={{ paddingBottom: "3px" }}
                  >
                    {val}
                  </Typography>
                );
              })}
            </Box>
          </Box>
          {/* Cloud Tags */}
          <Box className={classes.itemWrap}>
            <Typography className={classes.heading}>Cloud Tags</Typography>
            <Grid
              container
              rowSpacing={"21px"}
              columnSpacing={"14px"}
              className={classes.cloudGrid}
            >
              {tags.map((val, idx) => {
                return (
                  <React.Fragment key={idx}>
                    <Grid item md={4} sm={4} xs={4}>
                      <Box className={classes.tagWrap}>
                        <Typography className={classes.ctgDesc}>
                          {val}
                        </Typography>
                      </Box>
                    </Grid>
                  </React.Fragment>
                );
              })}
            </Grid>
          </Box>
          {/* Social Connect */}
          <Box className={classes.itemWrap}>
            <Typography className={classes.heading}>Social Connect</Typography>
            <Box className={classes.iconList}>
              {connects.map((val, idx) => {
                return (
                  <Box className={classes.iconWrap} key={idx}>
                    <IconButton>
                      <CustomImg
                        className={classes.socialIcon}
                        src={val}
                      ></CustomImg>
                    </IconButton>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Widget;
