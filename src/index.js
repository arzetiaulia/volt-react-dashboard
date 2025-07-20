// =========================================================
// * Volt React Dashboard
// =========================================================

// * Product Page: https://themesberg.com/product/dashboard/volt-react
// * Copyright 2021 Themesberg
// * Official Repository: https://github.com/themesberg/volt-react-dashboard
// * License: MIT License

// * Designed and coded by https://themesberg.com
// =========================================================

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

// core styles
import './scss/volt.scss';

// vendor styles
import 'react-datetime/css/react-datetime.css';

import HomePage from './pages/HomePage';
import ScrollToTop from './components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <ScrollToTop />
    <HomePage />
  </HashRouter>
);
