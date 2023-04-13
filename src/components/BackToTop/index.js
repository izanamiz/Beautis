import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Button, styled } from "@mui/material";

const CustomButton = styled(Button)(({ theme }) => ({
  minWidth: "36px",
  height: "36px",
  background: "#ff64ae",
  color: "#ffffff",
  borderRadius: "5px",
  position: "fixed",
  bottom: "170px",
  right: "65px",
  "&:hover": {
    backgroundColor: "#ffffff",
    color: "#ff64ae",
    borderColor: "#ffffff",
  },
  zIndex: "1000",
}));

const styles = {
  toTop: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

const BackToTop = () => {
  const [goToTop, setGoToTop] = useState(false);

  const handleScroll = () => {
    const scrollY = document.documentElement.scrollTop;
    if (scrollY >= 200) {
      setGoToTop(true);
    } else {
      setGoToTop(false);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {goToTop && (
        <CustomButton
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <ArrowUpwardIcon sx={{ ...styles.toTop }}></ArrowUpwardIcon>
        </CustomButton>
      )}
    </div>
  );
};

export default BackToTop;
