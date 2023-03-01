import React from 'react';
import {Routes, Route} from 'react-router-dom';
import SimpleLayout from '../components/Layouts/SimpleLayout';
import LoginPage from '../Pages/LoginPage';

export const WebRoutes = () => (
  <SimpleLayout>
    <Routes>
      <Route path="/login/*" element={<LoginPage />} />
    </Routes>
  </SimpleLayout>
);
