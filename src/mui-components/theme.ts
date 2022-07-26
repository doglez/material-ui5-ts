import { createTheme, PaletteColorOptions } from "@mui/material";
import { brown, green, purple } from "@mui/material/colors";

declare module "@mui/material/styles" {
    interface PaletteOptions {
        otherColor?: PaletteColorOptions;
    }
}

export const theme = createTheme({
    palette: {
        primary: {
            main: purple["500"],
            light: purple["200"],
        },
        secondary: {
            main: green["A400"],
        },
        otherColor: {
            main: brown["100"],
        },
    },
});
