import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Product from './components/pages/Product';
import SignUp from './components/pages/SignUp';


const router = createBrowserRouter ([
  {
    path : '/',
    element : <Home></Home>
  },

  {
    path : '/service',
    element : <Services></Services>
  },

  {
    path : '/products',
    element : <Product></Product>
  },

  {
    path : '/sign-up',
    element : <SignUp></SignUp>
  },
])

function App() {
  return (
    <>
      <RouterProvider router ={router}/>
    </>
  );
}

export default App;
