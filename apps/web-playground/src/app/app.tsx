import AppContainer from './AppContainer';
import Routes from './Routes';
import NavBar from '../components/NavBar';

export function App() {
  return (
    <AppContainer>
      <NavBar />
      <Routes />
    </AppContainer>
  );
}

export default App;
