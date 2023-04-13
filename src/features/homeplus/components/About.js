import { Box, Grid, styled } from "@mui/material";
import CustomContainer from "../../../components/CustomContainer";
import { makeStyles } from "@mui/styles";
import CustomImg from "../../../components/CustomImg";
import Illustration from "../media/Illustration-1.png";
import {
  CustomDesc,
  CustomHeading,
  CustomTitle,
} from "../../../components/CustomTypo";
import CenterBox from "../../../components/CenterBox";
import CustomButton from "../../../components/CustomButton";
import { useNavigate } from "react-router-dom";

const CustomBox = styled(Box)(({ theme }) => ({
  marginTop: "158.77px",
  marginBottom: "157.64px",
}));
const CustomGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));
const useStyles = makeStyles((theme) => ({
  content: {
    float: "right",
    [theme.breakpoints.down("md")]: {
      marginTop: "50px",
    },
  },
  heading: {
    padding: "12px 0 6px",
    maxWidth: "460px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  desc: {
    padding: "6px 0 46px",
    maxWidth: "483px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  img: {
    maxWidth: "100%",
  },
}));
const About = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  return (
    <CustomBox>
      <CustomContainer>
        <CustomGrid container>
          <Grid item md={6} sm={12} xs={12}>
            <CustomImg
              src={Illustration}
              alt="Illustration"
              className={classes.img}
            ></CustomImg>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Box className={classes.content}>
              <CustomTitle>About Us</CustomTitle>
              <CustomHeading className={classes.heading}>
                We are the best beauty clinic
              </CustomHeading>
              <CustomDesc className={classes.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                quam suscipit purus donec amet. Egestas volutpat facilisi eu
                libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius
                tellus in suspendisse placerat.
              </CustomDesc>
              <CenterBox>
                <CustomButton
                  buttonText="Learn More"
                  padding="16.36px 47px"
                  onClick={() => {
                    navigate("/about");
                  }}
                ></CustomButton>
              </CenterBox>
            </Box>
          </Grid>
        </CustomGrid>
      </CustomContainer>
    </CustomBox>
  );
};

export default About;
