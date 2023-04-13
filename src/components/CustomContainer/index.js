import { Container, styled } from "@mui/material";
const CustomContainer = styled(Container)(({ theme }) => ({
  maxWidth: "1140px!important",
  [theme.breakpoints.up("lg")]: {
    paddingLeft: "0",
    paddingRight: "0",
  },
}));

export default CustomContainer;
