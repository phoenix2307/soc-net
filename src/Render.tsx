import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {StatePropsType} from './App';
import {addPost} from "./redux/state";

export const rerenderEntireTree = (state: StatePropsType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}

