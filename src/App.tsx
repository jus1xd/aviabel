import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import ProtectedRoute from "./components/protectedRoute";
import Billing from "./pages/billing";
import Booking from "./pages/booking";
import Find from "./pages/find";
import Login from "./pages/login";
import Product from "./pages/product/[id]";
import Profile from "./pages/profile";
import Promo from "./pages/promo";
import Register from "./pages/register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Find />} />
      <Route path="/find" element={<Find />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/promo" element={<Promo />} />
      <Route path="/booking" element={<Booking />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/billing"
        element={
          <ProtectedRoute>
            <Billing />
          </ProtectedRoute>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
