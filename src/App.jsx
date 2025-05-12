import React from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from './theme/theme.js'
import Landing from "./Landing/Landing.jsx";

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Landing/>
    </ThemeProvider>
  );
};

export default App;
