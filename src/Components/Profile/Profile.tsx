import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";


export type ProfilePropsType = {
    postsData: PostType[]
}

type PropsType = {
    posts: PostType[]
    addPost: (textPost: string) => void
}
const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
            addPost={props.addPost}/>
        </div>
    )
}

export default Profile;