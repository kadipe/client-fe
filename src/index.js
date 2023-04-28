import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";

import './i18n';
import confStore from './store/conf-store';
import HomePage from './page/HomePage';
import ErrorPage from './page/ErrorPage';

const store = confStore()

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)