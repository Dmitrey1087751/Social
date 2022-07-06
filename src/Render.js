import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost} from './redux/state';
import {updateNewPostText} from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let RenderEntireTree = (state) => {


root.render(
  <React.StrictMode>
    <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
  </React.StrictMode>
);
}
export default RenderEntireTree