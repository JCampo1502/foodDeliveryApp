import 'module-alias/register';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import App from "./App.tsx";
import "./index.css";

const theme = createTheme({
  palette: {
    background: {
      default:
        "linear-gradient(90deg, rgba(255,254,250,1) 0%, rgba(252,252,252,1) 100%)",
      paper:
        "linear-gradient(90deg, rgba(255,254,250,1) 0%, rgba(252,252,252,1) 100%)",
    },
    primary: {
      main: "#FFE031",
    },
    secondary: {
      main: "#414141",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
