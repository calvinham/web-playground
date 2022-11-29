import { Route, Routes as RouterRoutes } from 'react-router-dom';

import Bean from '../pages/Bean';
import Entry from '../pages/Entry';

export default function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Entry />} />
      <Route path="/bean" element={<Bean />} />
    </RouterRoutes>
  );
}
