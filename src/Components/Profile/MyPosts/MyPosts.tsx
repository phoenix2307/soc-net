import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

export type MyPostsPropsType = {
    id: number
    message: string
    likesCount: string
}

function MyPosts() {

    const postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: '12'},
        {id: 2, message: 'Hi, how are you?', likesCount: '2'},
        {id: 3, message: 'Hi, how are you my friend?', likesCount: '55'},
    ]

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
                <Post id={postsData[0].id} message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post id={postsData[1].id} message={postsData[1].message} likesCount={postsData[1].likesCount}/>
                <Post id={postsData[2].id} message={postsData[2].message} likesCount={postsData[2].likesCount}/>
                <Post id={postsData[3].id} message={postsData[3].message} likesCount={postsData[3].likesCount}/>
            </div>
        </div>

    )
}

export default MyPosts;