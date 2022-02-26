import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  spacing: 10,
  palette: {
    mode: "dark",
    type: "dark",
    primary: {
      main: "#4cfccb",
    },
    secondary: {
      main: "#fc4c7e",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
