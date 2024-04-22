import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1D1F26",
    },
    primary: { main: "#BEA4FF" },
    action: { active: "#BEA4FF" },
  },
});

export default theme;
