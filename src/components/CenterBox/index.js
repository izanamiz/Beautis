import { styled, Box } from "@mui/material";

const CenterBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
  },
}));
export default CenterBox;
