import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from '../components/Layouts/Layout';
import Home from '../Pages/Home';

export const UserRoutes = () => (
  <Layout>
    <Routes onUpdate={() => window.location.reload()}>
      <Route exact path="/" element={<Home />} />
    </Routes>
  </Layout>
);
