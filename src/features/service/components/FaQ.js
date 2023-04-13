import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import CustomContainer from "../../../components/CustomContainer";
import CustomImg from "../../../components/CustomImg";
import { CustomHeading } from "../../../components/CustomTypo";
import { makeStyles, styled } from "@mui/styles";
import { Box } from "@mui/material";
import ArrowDown from "../media/angle-down.png";
const obj = [
  {
    summary: "Is beauty consultation handled thoroughly?",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    sub: "porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
  },
  {
    summary: "Can I be beautiful in an instant time?",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    sub: "porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
  },
  {
    summary:
      "Are there any side effects to the treatment methods or treatments at this clinic?",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    sub: "porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
  },
  {
    summary: "Do professionals have accreditation in their respective fields?",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
    sub: "porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "972px!important",
    paddingTop: "116px",
    paddingBottom: "116px",
  },
  heading: {
    textAlign: "center",
  },
  line: {
    marginTop: "21px",
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "40px",
    height: "0px",
    border: "3px solid #FF64AE",
    borderRadius: "2px",
    marginBottom: "68px",
  },
  accordionContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "972px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  accordion: {
    boxShadow: "none!important",
    "&::before": {
      backgroundColor: "#ffffff!important",
    },
  },
  summaryTxt: {
    paddingLeft:"20px",
    fontWeight: "600!important",
    fontSize: "1rem!important",
    lineHeight: "24px!important",
    letterSpacing: "0.1em!important",
    color: "#091156",
  },
  details: {
    borderTop: "1px solid #091156!important",
    background: "#F7F7FF!important",
    borderRadius: "0px 0px 20px 20px!important",
    padding: "52px 63px 52px 76px!important",
    [theme.breakpoints.down("md")]: {
      padding: "50px",
    },
  },
  detailsTxt: {
    fontWeight: "400!important",
    fontSize: "0.875rem!important",
    lineHeight: "21px!important",
    letterSpacing: "0.1em!important",
    color: " #8B8B8B!important",
    fontStyle: "italic",
    maxWidth: "833px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
}));
const FaQ = () => {
  const classes = useStyles();
  return (
    <CustomContainer
      className={classes.container}
      sx={{ maxWidth: "972px!important" }}
    >
      <CustomHeading className={classes.heading}>Services FAQ’s</CustomHeading>
      <Box className={classes.line}></Box>
      {/* <Box className={classes.accordionContainer}> */}
        {obj.map((val, idx) => {
          return (
            <Accordion key={idx} className={classes.accordion}>
              <AccordionSummary
                expandIcon={<CustomImg src={ArrowDown} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.summaryTxt}>
                  {val.summary}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.details}>
                <Typography className={classes.detailsTxt}>
                  {val.details}
                </Typography>
                <Typography
                  className={classes.detailsTxt}
                  sx={{ paddingTop: "21px" }}
                >
                  {val.sub}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      {/* </Box> */}
    </CustomContainer>
  );
};

export default FaQ;
