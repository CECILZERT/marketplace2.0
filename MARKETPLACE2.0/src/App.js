import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import VendorSignup from './pages/VendorSignup';
import AddProduct from './pages/AddProduct';
import VendorDashboard from './pages/VendorDashboard';
import AdminDashboard from './pages/AdminDashboard';

export default function App(){
  return (
    <BrowserRouter>
      <nav className="p-4 bg-gray-100">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/vendor-signup" className="mr-4">Vendor Signup</Link>
      </nav>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/vendor-signup" element={<VendorSignup/>} />
          <Route path="/add-product" element={<AddProduct/>} />
          <Route path="/vendor-dashboard" element={<VendorDashboard/>} />
          <Route path="/admin-dashboard" element={<AdminDashboard/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
