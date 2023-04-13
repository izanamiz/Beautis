import { Box, Button, Grid, styled } from "@mui/material";
import Bubble from "../media/BackgroundBubble.png";
import CustomContainer from "../../../components/CustomContainer";
import { makeStyles } from "@mui/styles";
import CustomImg from "../../../components/CustomImg";
import Clinic from "../media/unsplash_LRXYS0tSyGc.svg";
import Play from "../media/Play_button.png";
import {
  CustomDesc,
  CustomHeading,
  CustomTitle,
} from "../../../components/CustomTypo";
import CenterBox from "../../../components/CenterBox";
import CustomButton from "../../../components/CustomButton";
import { useNavigate } from "react-router-dom";
const CustomBox = styled(Box)(({ theme }) => ({
  marginTop: "-220px",
  backgroundImage: `url(${Bubble})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "100% 0",
}));
const CustomGrid = styled(Grid)(({ theme }) => ({
  marginTop: "134.44px",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));
const useStyles = makeStyles((theme) => ({
  heading: {
    padding: "12px 0 6px",
  },
  desc: {
    padding: "12px 0 12px",
    maxWidth: "483px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "848px",
    },
  },
  btnList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "44px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  watch: {
    color: "#8B8B8B!important",
    backgroundColor: "#transparent!important",
    padding: "0 13px 0 0!important",
    borderRadius: "50px!important",
    fontWeight: "600!important",
    fontSize: "1rem!important",
    lineHeight: "24px!important",
    letterSpacing: "0.1rem!important",
    textTransform: "none!important",
    "&:hover": {
      backgroundColor: "#8B8B8B!important",
      color: "#ffffff!important",
      borderColor: "#8B8B8B!important",
    },
  },
  playImg: {
    marginRight: "13px",
  },
}));
const About = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  return (
    <CustomBox>
      <CustomContainer sx={{ paddingTop: "220px" }}>
        <CustomGrid container>
          <Grid item md={6} sm={12} xs={12}>
            <CustomTitle>About Us</CustomTitle>
            <CustomHeading className={classes.heading}>
              We are the best beauty clinic
            </CustomHeading>
            <CenterBox>
              <CustomDesc className={classes.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                quam suscipit purus donec amet. Egestas volutpat facilisi eu
                libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius
                tellus in suspendisse placerat.
              </CustomDesc>
            </CenterBox>
            <CenterBox>
              <CustomDesc className={classes.desc}>
                Id dui erat sed quam tellus in purus. Pellentesque congue
                fringilla cras tellus enim.
              </CustomDesc>
            </CenterBox>
            <CenterBox sx={{ paddingTop: "41px" }}>
              <Box className={classes.btnList}>
                <CustomButton
                  buttonText="Learn More"
                  padding="16.36px 47px"
                  onClick={() => {
                    navigate("/about");
                  }}
                ></CustomButton>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button className={classes.watch} alt="play button">
                    <CustomImg
                      src={Play}
                      className={classes.playImg}
                    ></CustomImg>
                    Watch Video
                  </Button>
                </Box>
              </Box>
            </CenterBox>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <CustomImg
              src={Clinic}
              alt="clinic"
              sx={(theme) => ({
                float: "right",
                marginTop: "44.56px",
                [theme.breakpoints.down("lg")]: {
                  maxWidth: "100%",
                  float: "none",
                },
              })}
            ></CustomImg>
          </Grid>
        </CustomGrid>
      </CustomContainer>
    </CustomBox>
  );
};

export default About;
