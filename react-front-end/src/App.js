import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import TopBar from "./components/TopBar";
import Home from "./components/Home/Home";
import HomesRent from "./components/Listings/HomesRent";
import Sell from "./components/Sell/Sell";
import HomesSale from "./components/Listings/HomesSale";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
import FindAgent from "./components/Sell/FindAgent";
import NotFound from "./components/NotFound";
import AgentProfile from "./components/AgentProfile/AgentProfile";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <TopBar />

      {/* Routes that ANY user can access */}
      <Routes>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/homes_rent" element={<HomesRent />} />
        <Route path="/homes_sale" element={<HomesSale />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<NotFound />} />

        {/* Routes that the user needs to be logged in to access */}
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/find-an-agent" element={<FindAgent />} />
          <Route path="profile">
            <Route path=":userId" element={<AgentProfile />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
