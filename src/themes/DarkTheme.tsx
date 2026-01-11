import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#E7B079", // warm amber glow
      light: "#F3C89A",
      dark: "#C96A24",
      contrastText: "#1A1715",
    },

    secondary: {
      main: "#31406A", // twilight blue
      light: "#55638B",
      dark: "#1A2247",
      contrastText: "#EFE6D8",
    },

    // 🌑 Tinted Blacks (smoky, vintage noir)
    background: {
      default: "#1A1715", // espresso black w/ warmth
      paper: "#2B2622", // charcoal umber
    },

    text: {
      primary: "#EFE6D8", // cream white
      secondary: "#D9A464", // sepia highlight
      disabled: "#8A807A",
    },

    divider: "#3C342F",
  },
});

export default darkTheme;
