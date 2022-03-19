import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";
import {GlobalActionType} from "../../redux/reduxStore";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export type ProfilePropsType = {
    postsData: PostType[]
    newPostText: string
}

type PropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: GlobalActionType) => void
}
export const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}