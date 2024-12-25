import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProductContext } from "./components/Context/ProductContext.jsx"; // Adjust based on export
import { FilterContextProvider } from "./components/Context/filterContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductContext>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </ProductContext>
  </StrictMode>
);
