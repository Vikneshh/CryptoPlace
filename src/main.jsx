import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CoinContextProvider from "./context/CoinContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Note that we kept the context inside the browser router */}
      <CoinContextProvider>
        <App />
      </CoinContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
