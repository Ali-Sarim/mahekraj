import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="about" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-display">About Page - Coming Soon</h1></div>} />
          <Route path="contact" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-display">Contact Page - Coming Soon</h1></div>} />
          <Route path="*" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-display">Page Not Found</h1></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;