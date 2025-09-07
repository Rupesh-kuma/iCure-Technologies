import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./assets/css/style.css";
import "./assets/css/all-fontawesome.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/flaticon.css";
import "./assets/css/magnific-popup.min.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/js/counter-up.js";
import "./assets/js/contact-form.js";
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
