import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./mui-components/theme";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
