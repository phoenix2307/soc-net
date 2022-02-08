import React from 'react';
import './index.css';
import {state} from "./redux/state";
import {rerenderEntireTree} from "./Render";


rerenderEntireTree(state);
// ReactDOM.render(
//     <App state={state} addPost={addPost}/>,
//     document.getElementById('root')
// );
// reportWebVitals();
