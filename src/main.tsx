import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './routes/index.tsx';
import './index.css';

// Import Redux Provider and store
import { Provider } from 'react-redux';
import store from './redux/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>  {/* Wrap the app with Redux Provider */}
      <Router />
    </Provider>
  </StrictMode>
);