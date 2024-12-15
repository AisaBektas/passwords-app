import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AllColumnsProvider } from "./modules/home/providers/AllColumnsProvider.tsx";
import { AllPasswordsProvider } from "./modules/home/providers/AllPasswordsProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AllColumnsProvider>
      <AllPasswordsProvider>
        <App />
      </AllPasswordsProvider>
    </AllColumnsProvider>
  </StrictMode>
);
