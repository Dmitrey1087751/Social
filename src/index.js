import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
let RenderEntireTree = (state) => {


  root.render(
    <React.StrictMode>
      <App state={store.getState()}
        dispatch={store.dispatch.bind(store)} 
        store={store}/>
    </React.StrictMode>
  );
}
RenderEntireTree(store.getState());

store.subscribe(RenderEntireTree);
export default RenderEntireTree

