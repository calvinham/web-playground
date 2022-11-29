import NavBar from '../components/NavBar';
import AppContainer from './AppContainer';
import Routes from './Routes';

export function App() {
  return (
    <AppContainer>
      <NavBar />
      <Routes />
    </AppContainer>
  );
}

export default App;
