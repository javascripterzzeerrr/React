import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';

// const text = 'Hello world!';

// const elem = (
//   <div>
//     <h2 className="h2">Текст: {text}</h2>
//     <input type="text" />
//     <button />
//   </div>
// );

// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello world!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
