// src/router/AppRouter.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Home, Login } from "../components/pages";
import Layout from "../components/layout";
import NotFound from "../components/pages/NotFound";
import LoginOpt from "../components/pages/LoginOpt";
import DashboardOpt from "../components/pages/DashboardOpt";
import OrderTracking from "../components/pages/OrderTracking";
import SearchOrderTracking from "../components/pages/SearchOrderTracking";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-opt" element={<LoginOpt />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard-opt" element={<DashboardOpt />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/search-order-tracking" element={<SearchOrderTracking />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
