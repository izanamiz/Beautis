import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import React from "react";
import CustomTextField from "../CustomTextField";
import CenterBox from "../CenterBox";
import CustomButton from "../CustomButton";
const CustomGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    justifyContent: "center",
  },
}));

const ContactForm = () => {
  return (
    <Box>
      <CustomGrid
        container
        rowSpacing={"38.32px"}
        columnSpacing={"35.58px"}
        sx={{ paddingBottom: "54.84px" }}
      >
        <Grid item md={6} sm={6} xs={12}>
          <CustomTextField label="First name" />
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <CustomTextField label="Last name" />
        </Grid>
        <Grid item xs={12}>
          <CustomTextField label="Email address" />
        </Grid>
        <Grid item xs={12}>
          <CustomTextField label="Subject message" />
        </Grid>
        <Grid item xs={12}>
          <CustomTextField label="Your inquiry here" multiline rows={9} />
        </Grid>
      </CustomGrid>
      <CenterBox>
        <CustomButton
          buttonText="Send Message"
          padding="15px 52px"
        ></CustomButton>
      </CenterBox>
    </Box>
  );
};

export default ContactForm;
