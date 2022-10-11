
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import PlaneScene from './PlaneSecne'
import Globe from './globe'

import { BrowserRouter, Redirect, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <div class="container">
     
  </div>
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  
  </React.StrictMode>
);



const root2 = ReactDOM.createRoot(document.getElementById('moon-con'));
root2.render(
  <React.StrictMode>
    <Globe />
  
  </React.StrictMode>
);