import { Button, styled } from "@mui/material";
import React from "react";

const CustomButton = ({
  backgroundColor = "#FF64AE",
  color = "#ffffff",
  buttonText,
  padding,
  onClick,
}) => {
  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    color: color,
    borderRadius: "50px",
    // boxShadow: "0px 17px 22px #FFEDF6",
    fontWeight: "600",
    fontSize: "1rem",
    lineHeight: "24px",
    letterSpacing: "0.1rem",
    padding: padding,
    cursor: "pointer",
    textTransform: "none",
    display: "block",
    "&:hover": {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
  }));

  return <CustomButton onClick={onClick}>{buttonText}</CustomButton>;
};

export default CustomButton;
