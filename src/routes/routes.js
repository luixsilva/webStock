import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Login } from "../pages/public/login/login";
import { Register } from "../../src/pages/public/Register/index";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem("authToken"); // Exemplo de autenticação simples
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} /> */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default PublicRoutes;
