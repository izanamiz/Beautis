import { TextField, styled } from "@mui/material";
import React from "react";

const CustomTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& label": {
    fontSize: "1rem",
    lineHeight: "24px",
    letterSpacing: "0.1em",
    color: "#C5C5C5",
    paddingLeft: "16px",
  },
  "& input": {
    padding: "17px 24px",
  },
  "& fieldset": {
    border: "1px solid #d9ddfe!important",
    borderRadius: "15px",
    padding: "0 24px",
    background: "#ffffff",

  },
  "&:hover": {
    borderRadius: "15px",
    outline: "1px solid #d9ddfe!important",
  },
  "&$focused": {
    borderRadius: "15px",
    outline: "1px solid #d9ddfe!important",
  },
}));

export default CustomTextField;
