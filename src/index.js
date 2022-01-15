import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BreweryDetails from './BreweryDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/details/:id" element={<BreweryDetails/>} />
    </Routes>
  </BrowserRouter>
  ,document.getElementById('root'));


reportWebVitals();
