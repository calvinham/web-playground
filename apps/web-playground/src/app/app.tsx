import AppContainer from './AppContainer';
import { Routes, Route } from 'react-router-dom';
import Entry from '../pages/Entry';
import NavBar from '../components/NavBar';
import Bean from '../pages/Bean';

export function App() {
  return (
    <AppContainer>
      <NavBar />
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/bean" element={<Bean />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
