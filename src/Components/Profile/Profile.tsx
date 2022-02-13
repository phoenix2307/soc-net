import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";
import {GlobalActionType} from "../../redux/store";


export type ProfilePropsType = {
    postsData: PostType[]
    newPostText: string
}

type PropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: GlobalActionType) => void
}
const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;