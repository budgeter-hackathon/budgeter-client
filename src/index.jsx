import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { ModalProvider } from "react-modal-hook";
import "bulma";

ReactDOM.render(
  <ModalProvider>
    <App />
  </ModalProvider>,
  document.getElementById("root")
);
