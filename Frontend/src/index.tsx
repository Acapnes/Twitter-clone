import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

/// İmports View
import App from "./views/App";
import Auth from "./views/Auth";
import Login from "./views/Auth/Login";
import LastLogin from "./views/Auth/LastLogin";
import Register from "./views/Auth/Register";
import RegisterDialog from "./components/AuthComps/RegisterDialog";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={window.sessionStorage.getItem("pathId") ? <App /> : <Auth /> } />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lastLogin" element={<LastLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dialog" element={<RegisterDialog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
