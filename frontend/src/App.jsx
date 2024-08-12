import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Default from './page/Default';
import CategoryPage from './page/CategoryPage';
import ProductDetailPage from './page/ProductDetailPage';
import Homepage from './page/Homepage';
import Cart from './page/Cart';
import MobileResponsive from './page/MobileResponsive';
import './App.css';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/productDetailPage" element={<ProductDetailPage />} />
        <Route path='/categoryPage' element={<CategoryPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/mobileResponsive' element={<MobileResponsive />} />

      </Routes>
    </div>
  );
}

export default App;
