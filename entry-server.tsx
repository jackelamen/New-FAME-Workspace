import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.tsx';

export const render = (): string =>
  renderToString(
    React.createElement(React.StrictMode, null, React.createElement(App))
  );
