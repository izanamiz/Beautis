import React, { useEffect, useState } from "react";
import { Box, Container, IconButton, Typography, styled } from "@mui/material";
import MainLogo from "../../assets/img/MainLogo.png";
import PlusIcon from "../../assets/img/PlusIcon.png";
import HomePlusIcon from "../../assets/img/HomePlusIcon.png";
import HomePlusMainLogo from "../../assets/img/HomePlusMainLogo.png";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CustomImg from "../CustomImg";
import CustomButton from "../CustomButton";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Menu from "../Menu";

const links = [
  { route: "/about", name: "About", id: 0 },
  { route: "/service", name: "Service", id: 1 },
  { route: "/gallery", name: "Gallery", id: 2 },
  { route: "/blog", name: "Blog", id: 3 },
];

const NavbarContainer = styled(Container)(({ theme }) => ({
  paddingTop: "35px",
  paddingBottom: "6px",
  maxWidth: "1166px!important",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.up("lg")]: {
    paddingLeft: "0",
    paddingRight: "0",
  },
}));

const NavbarLinksBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing("46.03px"),
  [theme.breakpoints.down("lg")]: {
    gap: "30px",
  },
  [theme.breakpoints.down("md")]: {
    gap: "20px",
  },
  "& a": {
    textDecoration: "none",
  },
}));

const NavLink = styled(Typography)(({ theme, color, activecolor }) => ({
  fontWeight: "500",
  fontSize: "1rem",
  lineHeight: "24px",
  letterSpacing: "0.1em",
  color: color,
  cursor: "pointer",
  "&:hover": {
    fontWeight: "600",
    color: activecolor,
  },
}));

const NavListBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "53.19px",
  [theme.breakpoints.down("lg")]: {
    gap: "30px",
  },
  [theme.breakpoints.down("md")]: {
    gap: "20px",
  },
  [theme.breakpoints.down("bg")]: {
    display: "none",
  },
}));

const NavbarLogoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddinLeft: "-8px",
  [theme.breakpoints.down("bg")]: {
    gap: "20px",
    paddinLeft: "0",
  },
}));

const useStyles = makeStyles((theme) => ({
  navbar: {
    position: "sticky",
    top: "0",
    zIndex: "100",
  },
  menu: {
    display: "none!important",
    fontSize: "3rem!important",
    color: "#091156!important",
    [theme.breakpoints.down("bg")]: {
      display: "inline-block!important",
    },
  },
  mainLogo: {
    display: "inline-block!important",
    [theme.breakpoints.down("xxs")]: {
      display: "none!important",
    },
  },
  homeWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "5.11px",
  },
  overlay: {
    position: "fixed",
    top: "0",
    bottom: "0",
    right: "0",
    left: "0",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  txtNotActive: {},
  textActive: {
    fontWeight: "600",
    color: "#414880",
  },
}));

const Navbar = ({
  backgroundColor = "rgb(228, 231, 255)",
  color = "#8B8B8B",
  activecolor = "#414880",
}) => {
  const classes = useStyles();

  const navigate = useNavigate();
  const location = useLocation();

  const [toggle, setToggle] = useState(false);
  const [bg, setBg] = useState(false);
  const [active, setActive] = useState(1);

  const handleScroll = () => {
    const scrollY = document.documentElement.scrollTop;
    if (scrollY >= 42) {
      setBg(true);
    } else {
      setBg(false);
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    toggle && (document.body.style.overflow = "hidden");
    !toggle && (document.body.style.overflow = "unset");
  }, [toggle]);

  useEffect(() => {
    switch (location.pathname) {
      case "/about":
        setActive(0);
        break;
      case "/service":
        setActive(1);
        break;
      case "/gallery":
        setActive(2);
        break;
      case "/blog":
        setActive(3);
        break;
      default:
        setActive(4);
    }
  }, [location]);

  return (
    <>
      <Box
        className={classes.navbar}
        sx={
          bg || toggle
            ? {
                backgroundColor: backgroundColor,
              }
            : { backgroundColor: "transparent" }
        }
      >
        <NavbarContainer>
          <NavbarLogoBox>
            {!toggle ? (
              <IconButton onClick={handleToggle}>
                <MenuIcon className={classes.menu} />
              </IconButton>
            ) : (
              <IconButton onClick={handleToggle}>
                <CloseIcon className={classes.menu} />
              </IconButton>
            )}
            <Box className={classes.mainLogo}>
              <Link to="/">
                <CustomImg
                  src={
                    location.pathname === "/home" ? HomePlusMainLogo : MainLogo
                  }
                  alt="logo"
                />
              </Link>
            </Box>
          </NavbarLogoBox>
          <NavListBox>
            <NavbarLinksBox>
              <Link to="/home">
                <Box className={classes.homeWrap}>
                  <NavLink
                    color={color}
                    activecolor={activecolor}
                    sx={
                      active === 4 && {
                        fontWeight: "600",
                        color: activecolor,
                      }
                    }
                  >
                    Home
                  </NavLink>
                  <CustomImg
                    src={
                      location.pathname === "/home" ? HomePlusIcon : PlusIcon
                    }
                    alt="plus icon"
                  ></CustomImg>
                </Box>
              </Link>

              {links.map((val, idx) => {
                return (
                  <Link to={{ pathname: val.route }} key={idx}>
                    <NavLink
                      color={color}
                      activecolor={activecolor}
                      sx={
                        active === idx && {
                          fontWeight: "600",
                          color: activecolor,
                        }
                      }
                    >
                      {val.name}
                    </NavLink>
                  </Link>
                );
              })}
            </NavbarLinksBox>
            <CustomButton
              buttonText="Contact"
              padding="14px 41.94px"
              onClick={() => {
                navigate("/contact");
              }}
            ></CustomButton>
          </NavListBox>
        </NavbarContainer>
      </Box>
      {toggle && (
        <>
          <Menu backgroundColor={backgroundColor} toggle={toggle}></Menu>
          <Box onClick={handleToggle} className={classes.overlay}></Box>
        </>
      )}
    </>
  );
};

export default Navbar;
