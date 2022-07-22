import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
let RenderEntireTree = (state) => {


  root.render(
    <React.StrictMode>
      <App state={store.getState()}
        addPost={store.addPost.bind(store)}
         updateNewPostText={store.updateNewPostText.bind(store)} />
    </React.StrictMode>
  );
}
RenderEntireTree(store.getState());

store.subscribe(RenderEntireTree);
export default RenderEntireTree

