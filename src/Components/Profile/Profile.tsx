import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";


export type ProfilePropsType = {
    postsData: PostType[]
    newPostText: string
}

type PropsType = {
    posts: PostType[]
    updateNewPostText: (newText: string) => void
    newPostText: string
    addPost: (textPost: string) => void
}
const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}/>
        </div>
    )
}

export default Profile;