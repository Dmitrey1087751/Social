import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogsData = [
  { id: 1, Name: "Ivan" },
  { id: 2, Name: "Viktoria" },
  { id: 3, Name: "Papendus" },
  { id: 4, Name: "Chubaka" }
]

let messagesData = [
  { id: 1, text: "a;lsmlsmlkmscmck  sdsdsd  scscm" },
  { id: 2, text: "a;lsmlsmlkmscmck   dcsdc   m" },
  { id: 3, text: "a;lsmlsmlkmscmckm  sdcsdcsd" },
  { id: 4, text: "a;lsmlsmlkmscmckmsdcsdsdsdsd" },
  { id: 5, text: "a;lsmlsmlkmscmckm" }
]

let postsData = [
  { id: 1, maessage: "sadjnjaiijikcnjjxxjiij", likesCounter: 5 },
  { id: 2, maessage: "sadjnjaiiji k cnjj   xxjiij", likesCounter: 4 },
  { id: 3, maessage: "вс высфывс sadjnjaiijikcnjjxxjiij", likesCounter: 2 }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>
);


reportWebVitals();
