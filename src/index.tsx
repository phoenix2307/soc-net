import React from 'react';
import './index.css';
import App from "./App";
import ReactDOM from "react-dom";
import {store} from "./redux/state";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()}
             dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree)

