import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app/app';
import AppWrapper from './app/AppWrapper';
import reportWebVitals from './reportWebVitals';

if (import.meta.env.DEV) {
  const showErrOverlay = (err: any) => {
    const ErrorOverlay = customElements.get('vite-error-overlay');
    if (!ErrorOverlay) {
      return;
    }
    console.error(err);
    const overlay = new ErrorOverlay(err);
    document.body.appendChild(overlay);
  };
  window.addEventListener('error', (e) => showErrOverlay(e.error));
  window.addEventListener('unhandledrejection', (e) => showErrOverlay(e.reason));
}

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </StrictMode>
);
