import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

/// İmports View
import App from "./views/App";
import Auth from "./views/Auth";
import Login from "./views/Auth/Login";
import LastLogin from "./views/Auth/LastLogin";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lastLogin" element={<LastLogin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
