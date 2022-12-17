import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
let RenderEntireTree = (state) => {


  root.render(
    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>
  );
}
RenderEntireTree(store.getState());

store.subscribe(RenderEntireTree);
export default RenderEntireTree

