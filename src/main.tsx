import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ThemeProvider from "./context/ThemeContext.tsx";
import ProductProvider from "./context/ProductContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </ThemeProvider>
  </StrictMode>,
);
