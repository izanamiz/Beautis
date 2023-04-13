import { Box, Grid, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CustomContainer from "../../../components/CustomContainer";
import {
  CustomDesc,
  CustomHeading,
  CustomTitle,
} from "../../../components/CustomTypo";

import TeamList from "../../../components/TeamList";

const CustomBox = styled(Box)(({ theme }) => ({
  paddingTop: "147px",
  textAlign: "center",
}));

const ProTeams = () => {
  return (
    <CustomBox>
      <CustomContainer>
        <CustomTitle>Professional Teams</CustomTitle>
        <CustomHeading sx={{ paddingTop: "12px" }}>
          The Professional expert
        </CustomHeading>
        <CustomDesc sx={{ paddingTop: "12px", paddingBottom: "120px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </CustomDesc>

        <TeamList></TeamList>
      </CustomContainer>
    </CustomBox>
  );
};

export default ProTeams;
