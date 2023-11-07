import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import './custom.css'
import { ThemeProvider } from "@material-tailwind/react";
import { AuthProvider } from "./context/AuthContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import PropProvider from "./context/propContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <AuthProvider>
          <PropProvider>
            <App />
          </PropProvider>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
