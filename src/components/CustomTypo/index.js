import { Typography, styled } from "@mui/material";
const CustomTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  fontSize: "1rem",
  lineHeight: "20px",
  color: "#FF64AE",
}));

const CustomHeading = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  fontSize: "2.25rem",
  lineHeight: "45px",
  color: "#091156",
}));

const CustomDesc = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "1rem",
  lineHeight: "24px",
  letterSpacing: "0.1em",
  color: "#8B8B8B",
}));
const ItemTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  fontSize: "1rem",
  lineHeight: "20px",
  color: "#FF64AE",
  textAlign: "center",
}));

const ItemHeading = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  fontSize: "1.125rem",
  lineHeight: "22px",
  color: "#091156",
  textAlign: "center",
}));
const ItemDesc = styled(Typography)(({ theme }) => ({
  fontWeight: "400",
  fontSize: "0.875rem",
  lineHeight: "21px",
  letterSpacing: "0.1em",
  color: "#8B8B8B",
  textAlign: "center",
}));

export {
  CustomTitle,
  CustomHeading,
  CustomDesc,
  ItemTitle,
  ItemHeading,
  ItemDesc,
};
