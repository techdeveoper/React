import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*  runs the app for twice in dev mode for safety purpose like debugging
    ,etc... , in production remove this thing */}
    <App />
  </StrictMode>,
);
