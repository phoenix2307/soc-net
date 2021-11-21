import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

export type MyPostsPropsType = {
    message: string
    likesCount: string
}

function MyPosts() {
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount='0'/>
                <Post message="It's my first post" likesCount='10'/>
                <Post message="It's my first post" likesCount='10'/>
                <Post message="It's my first post" likesCount='10'/>
            </div>
        </div>

    )
}

export default MyPosts;