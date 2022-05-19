import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

/// İmports View
import App from "./views/App";
import Merhaba from "./views/Merhaba";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/merhaba" element={<Merhaba />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
