import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile, {ProfilePropsType} from "./Components/Profile/Profile";
import Dialogs, {DialogPagePropsType} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

export type StatePropsType = {
    dialogPage: DialogPagePropsType
    profilePage: ProfilePropsType
    sidebar: {}
}

type AppStatePropsType = {
    state: StatePropsType
    updateNewPostText: (newText: string) => void
    addPost: (textPost: string) => void
}
const App = (props: AppStatePropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/*' element={<Profile
                            posts={props.state.profilePage.postsData}
                            updateNewPostText={props.updateNewPostText}
                            newPostText={props.state.profilePage.newPostText}
                            addPost={props.addPost}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs
                            dialogsData={props.state.dialogPage.dialogsData}
                            messageData={props.state.dialogPage.messageData}/>}/>
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
