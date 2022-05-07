import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dialog from './components/Messager/Dialog/Dialog';
import Message from './components/Messager/Message/Message';


let dialogsData = [
  { id: 1, Name: "Ivan" },
  { id: 2, Name: "Viktoria" },
  { id: 3, Name: "Papendus" },
  { id: 4, Name: "Chubaka" }
]

let dialogs = dialogsData.map(dialog => 
<Dialog id={dialog.id} name={dialog.Name} />
  )

let messagesData = [
  { id: 1, text: "a;lsmlsmlkmscmck  sdsdsd  scscm" },
  { id: 2, text: "a;lsmlsmlkmscmck   dcsdc   m" },
  { id: 3, text: "a;lsmlsmlkmscmckm  sdcsdcsd" },
  { id: 4, text: "a;lsmlsmlkmscmckmsdcsdsdsdsd" },
  { id: 5, text: "a;lsmlsmlkmscmckm" }
]

let messages = messagesData.map( message => <Message id={message.id} text={message.text} />)

let postsData = [
  {id: 1, maessage: "sadjnjaiijikcnjjxxjiij", likesCounter: 5},
  {id: 2, maessage: "sadjnjaiiji k cnjj   xxjiij", likesCounter: 4},
  {id: 3, maessage: "вс высфывс sadjnjaiijikcnjjxxjiij", likesCounter: 2}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogs={dialogs} messages={messages}  />
  </React.StrictMode>
);


reportWebVitals();
