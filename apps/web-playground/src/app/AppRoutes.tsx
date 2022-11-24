import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Entry from '../pages/Entry';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Entry />} />
    </Routes>
  );
}
