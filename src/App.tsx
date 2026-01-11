import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, type Theme } from "@mui/material/styles";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { darkTheme, lightTheme } from "./themes";

import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { Code, Creative, HomePage, Interests, Thoughts } from "./pages";
import { Themes } from "./shared/types";

const App = () => {
  const [baseHeight, setBaseHeight] = useState<number>(window.innerHeight);
  const [currentTheme, setCurrentTheme] = useState<Theme>(darkTheme);

  useEffect(() => {
    window.onresize = () => {
      const vh = window.innerHeight * 0.01;
      setBaseHeight(vh * 100);
    };
  }, []);

  const fullHeightStyles = {
    height: window.innerHeight,
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Router>
        <Box className={styles.baseContainer} style={{ height: baseHeight }}>
          <Navbar
            onThemeChange={(theme: Themes) => {
              const currentTheme =
                theme === Themes.Dark ? darkTheme : lightTheme;
              setCurrentTheme(currentTheme);
            }}
          />
          <Routes>
            <Route
              path="/"
              element={<HomePage styles={fullHeightStyles} id="homePage" />}
            />
            <Route path="/code" element={<Code />} />
            <Route path="/creative" element={<Creative />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="/thoughts" element={<Thoughts />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
