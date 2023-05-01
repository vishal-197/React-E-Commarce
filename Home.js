import React from 'react';
import Header from './Header';
import About from './About';
import Products from './Products';
import './ecommerce.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Cart';



function Home() {

  return (
    <>
    <BrowserRouter>

    
      <Header/>
      <Routes>
       
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>

       
      </Routes>
      </BrowserRouter>
      <About/>
      <Products/>



  
   
   
    </>
  )
}

export default Home