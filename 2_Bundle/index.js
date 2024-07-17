import React from 'react';
import ReactDOM from 'react-dom/client';

const headingElement = React.createElement("h1", { className: 'heading' }, "Hello world!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingElement);
