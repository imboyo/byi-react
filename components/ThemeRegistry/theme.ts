import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Palette {
    primaryRed: Palette['primary'];
  }
  interface PaletteOptions {
    primaryRed: PaletteOptions['primary'];
  }
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primaryRed: {
      main: "#a20404",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {},
});

export default theme;
