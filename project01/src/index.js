import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header'
import PlaneScene from './PlaneSecne'
function App() {
  return (
    <>
     <Header/>
     <PlaneScene/>
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);