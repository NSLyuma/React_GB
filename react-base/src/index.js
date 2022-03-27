import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material";
import App from "./App";

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
