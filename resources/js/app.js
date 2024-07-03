import './bootstrap.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Example from './components/example.js';

const root = ReactDOM.createRoot(document.getElementById('example'));  // Create a root for rendering
root.render(<Example />);  // Render the Example component