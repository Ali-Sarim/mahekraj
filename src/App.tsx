import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="wishlist" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-display">Wishlist Page - Coming Soon</h1></div>} />
          <Route path="cart" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-display">Cart Page - Coming Soon</h1></div>} />
          <Route path="checkout" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-display">Checkout Page - Coming Soon</h1></div>} />
          <Route path="*" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-display">Page Not Found</h1></div>} />
        </Route>
        
        {/* Auth pages without layout */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;