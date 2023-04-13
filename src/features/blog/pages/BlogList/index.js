import { Box, Grid } from "@mui/material";
import React from "react";
import Article from "../../components/Article";
import Widget from "../../components/Widget";
import CustomContrainer from "../../../../components/CustomContainer";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "108px",
    paddingBottom: "175.34px",
  },
  grid: {},
}));
const BlogList = () => {
  const classes = useStyles();

  return (
    <CustomContrainer className={classes.container}>
      <Grid container className={classes.grid} columnSpacing={"60px"}>
        <Grid item lg={8} sm={12} xs={12}>
          <Article></Article>
        </Grid>
        <Grid item lg={4} sm={12} xs={12}>
          <Widget></Widget>
        </Grid>
      </Grid>
    </CustomContrainer>
  );
};

export default BlogList;
