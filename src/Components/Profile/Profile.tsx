import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div>
            <div>
                <img className={s.image}
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpNOth8Kc6hxadZ1MvQWLGCLlAiQ2v8C8T8Q&usqp=CAU'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>)
}

export default Profile;