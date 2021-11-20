import React from 'react';
import ProductsProvider from "contexts/ProductsProvider";
import CartProvider from 'contexts/CartProvider';
import AppContent from 'components/AppContent';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Router basename="/react-demo">
          <AppContent />
        </Router>
      </CartProvider> 
    </ProductsProvider>
  )
}

export default App;