import React from 'react';
import './index.css';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Promo from './components/Promo/Promo';
import Subscribe from './components/subscribe/Subscribe';
import ProductWomen from './components/products/women/Women';


function App() {
  return (
    <div>     
      <Header />
      <Main /> 
      <ProductWomen />
      <Promo />
      <Subscribe />
      <Footer />
    </div>

  );
}

export default App;
