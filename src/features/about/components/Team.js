import { Box, styled } from "@mui/material";
import React from "react";
import CustomContainer from "../../../components/CustomContainer";
import {
  CustomDesc,
  CustomHeading,
  CustomTitle,
} from "../../../components/CustomTypo";
import Bubble from "../media/BubbleBG.png";
import TeamList from "../../../components/TeamList";

const CustomBox = styled(Box)(({ theme }) => ({
  marginTop: "-387px",
  paddingTop: "523px",
  backgroundImage: `url(${Bubble})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "100% 0",
  textAlign: "center",
}));

const Team = () => {
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

export default Team;
