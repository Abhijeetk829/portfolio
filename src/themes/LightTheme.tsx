import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#C96A24", // Burnt orange glow
      light: "#E7B079",
      dark: "#A8541C",
      contrastText: "#2B2622", // warm charcoal
    },

    secondary: {
      main: "#2E3A7F", // Moody indigo
      light: "#5060A1",
      dark: "#1A2247",
      contrastText: "#EFE6D8",
    },

    // 🌼 Tinted Whites (film vibe)
    background: {
      default: "#EFE6D8", // cream w/ sepia tint
      paper: "#F2EDE5", // soft beige highlight
    },

    text: {
      primary: "#2B2622", // warm charcoal, not pure black
      secondary: "#4A4038",
      disabled: "#9A8E84",
    },

    divider: "#D0C2AF", // warm paper divider
  },
});

export default lightTheme;
