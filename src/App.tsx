import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {Profile, ProfilePropsType} from "./Components/Profile/Profile";
import {DialogPagePropsType} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {store} from "./redux/reduxStore";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";

export type StatePropsType = {
    dialogPage: DialogPagePropsType
    profilePage: ProfilePropsType
    sidebar: {}
}

// type AppStatePropsType = {
//     state: StatePropsType
//     dispatch: (action: GlobalActionType) => void
// }

//-------------------------------------------//
// const App = (props: AppStatePropsType) => {
//     return (
//         <BrowserRouter>
//             <div className="app-wrapper">
//                 <Header/>
//                 <Navbar/>
//                 <div className='app-wrapper-content'>
//                     <Routes>
//                         <Route path='/profile/*' element={
//                             <Profile
//                                 posts={props.state.profilePage.postsData}
//                                 newPostText={props.state.profilePage.newPostText}
//                                 dispatch={props.dispatch.bind(props.state)} // needed bind(props.state)???
//                             />}
//                         />
//                         <Route path='/dialogs/*' element={<DialogsContainer
//                             dialogsData={props.state.dialogPage.dialogsData}
//                             newMessageText={props.state.dialogPage.newMessageText}
//                             messageData={props.state.dialogPage.messageData}
//                             dispatch={props.dispatch.bind(props.state)}
//                         />}
//                         />
//                         <Route path='/news/*' element={<News/>}/>
//                         <Route path='/music/*' element={<Music/>}/>
//                         <Route path='/settings/*' element={<Settings/>}/>
//                     </Routes>
//                 </div>
//             </div>
//         </BrowserRouter>
//     );
// }
//-------------------------------------------//

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/*' element={
                            <Profile
                                posts={store.getState().profilePage.postsData}
                                newPostText={store.getState().profilePage.newPostText}
                                dispatch={store.dispatch.bind(store)}
                            />}
                        />
                        <Route path='/dialogs/*' element={
                            <DialogsContainer/>}
                        />
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/music/*' element={<Music/>}/>
                        <Route path='/settings/*' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
