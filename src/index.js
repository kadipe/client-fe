import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";

import './i18n';
import confStore from './store/conf-store';
import HomePage from './page/home-page';
import ErrorPage from './page/error-page';
import LoginPage from './page/login-page';
import LoginOAuthPage from './page/login-oauth-page';
import CheckinPage from './page/checkin-page';

const store = confStore()

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login.oauth" element={<LoginOAuthPage />} />
        <Route path="/checkin" element={<CheckinPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)