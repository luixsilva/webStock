import "../src/css/index.css";
import "../src/css/Toast.css"
import { Login } from "./pages/public/login/login";
import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes/routes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from "./pages/private/Home";

function App() {
  return (
    <>
      <Home />
      <ToastContainer />
    </>
  );
}

export default App;
