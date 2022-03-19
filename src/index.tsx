import React from 'react';
import './index.css';
import App from "./App";
import ReactDOM from "react-dom";
import {store} from "./redux/reduxStore";
import {Provider} from "react-redux";

//----------------------------------------//
// export const rerenderEntireTree = () => {
//
//     ReactDOM.render(
//         <Provider store={store}>
//             <App />
//         </Provider>,
//
//         document.getElementById('root')
//     );
// }
//
// rerenderEntireTree();
//----------------------------------------//

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root')
);