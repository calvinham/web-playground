import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import AppContainer from './app/AppContainer';
import AppWrapper from './app/AppWrapper';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <AppWrapper>
      <AppContainer>
        <App />
      </AppContainer>
    </AppWrapper>
  </StrictMode>
);
