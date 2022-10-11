
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from './header'
import PlaneScene from './PlaneSecne'
import Globe from './globe'
import { BrowserRouter, Redirect, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <div>
    </div>
    <Header/>
     <BrowserRouter>
      <Routes>
        <Route>
       
          <Route path="/PlaneSphere" element={<PlaneScene/>} />
          <Route path="/Globe" element={<Globe/>} />
        </Route>
      </Routes>
    </BrowserRouter>
   
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);