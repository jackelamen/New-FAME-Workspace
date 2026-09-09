import './index.css';
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';

const init = () => {
  const container = document.getElementById('root');
  if (!container) return;

  try {
    const tree = (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    // The build prerenders into #root, so hydrate that markup rather than
    // throwing it away and re-rendering from scratch.
    if (container.hasChildNodes()) {
      hydrateRoot(container, tree);
    } else {
      createRoot(container).render(tree);
    }
  } catch (error) {
    console.error("React Render Error:", error);
  }
};

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  init();
} else {
  document.addEventListener('DOMContentLoaded', init);
}