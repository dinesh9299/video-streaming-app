import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Use "react-router-dom" instead of "react-router"
import Home from "./pages/Home.jsx";
import Extra from "./components/extra.jsx";
import Single from "./components/Single.jsx";
import Multiple from "./components/Multiple.jsx";
import Dashboard from "./components/Dashboard.jsx";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // PrimeReact theme
import "primereact/resources/primereact.min.css"; // PrimeReact core styles
import "primeicons/primeicons.css"; // PrimeIcons for icons

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route path="single" element={<Single />}></Route>
          </Route>
        </Route>
        <Route path="extra" element={<Extra />} />
        <Route path="multiple" element={<Multiple />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
