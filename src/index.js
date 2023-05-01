import { StrictMode } from "react";
import { ThemeProvider } from "styled-components";
import { createRoot } from "react-dom/client";

import { defaultTheme } from "/src/themes/defaultTheme";

import App from "/src/components/app/app.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
