import React from 'react';
import './index.css';
import {addPost, state, subscribe, updateNewPostText} from "./redux/state";
import App, {StatePropsType} from "./App";
import ReactDOM from "react-dom";

export const rerenderEntireTree = (state: StatePropsType) => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree)

