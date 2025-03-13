import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import "./index.css";
import "./resets.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <FluentProvider theme={webLightTheme}>
            <App />
        </FluentProvider>
    </StrictMode>
);
