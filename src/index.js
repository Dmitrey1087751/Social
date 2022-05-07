import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let postsData = [
  {id: 1, maessage: "sadjnjaiijikcnjjxxjiij", likesCounter: 5},
  {id: 2, maessage: "sadjnjaiiji k cnjj   xxjiij", likesCounter: 4},
  {id: 3, maessage: "вс высфывс sadjnjaiijikcnjjxxjiij", likesCounter: 2}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} />
  </React.StrictMode>
);


reportWebVitals();
