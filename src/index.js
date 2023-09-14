import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"




const rootElement = document.getElementById('root');

// Using createRoot to create a root-level component
const root = ReactDOM.createRoot(rootElement);

// Render the App component into the root
root.render(
<React.StrictMode>
<App />
</React.StrictMode>);