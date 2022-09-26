import React from "react";
import TopBar from "./components/TopBar";
import "./App.scss";
import Home from "./components/Home";
import HomesRent from "./components/HomesRent";
import Sell from "./components/Sell/Sell";
import HomesSale from "./components/HomesSale";
import LoginPage from "./components/LoginPage";
import { Route, Routes } from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage";
import Dashboard from "./components/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import ForgotPassword from "./components/ForgotPassword";
import FindAgent from "./components/Sell/FindAgent";

function App(props) {
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/homes_rent" element={<HomesRent />} />
        <Route path="/homes_sale" element={<HomesSale />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/find-an-agent" element={<FindAgent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
