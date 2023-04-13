import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./features/home/pages/Home";
import HomePlus from "./features/homeplus/pages/HomePlus";
import About from "./features/about/pages/About";
import Service from "./features/service/pages/Service";
import Gallery from "./features/gallery/pages/Gallery";
import Team from "./features/team/pages/Team";
import Blog from "./features/blog/pages/Blog";
import Contact from "./features/contact/pages/Contact";

function App() {
  let theme = createTheme({
    typography: {
      fontFamily: "Poppins",
    },
    breakpoints: {
      values: {
        xs: 0,
        xxs: 360,
        sm: 768,
        bg: 960,
        md: 1024,
        lg: 1200,
        xl: 1400,
      },
    },
  });
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<HomePlus />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
