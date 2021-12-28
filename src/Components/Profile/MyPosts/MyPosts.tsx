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

    const postElements = postsData.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/> )

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
                {postElements}
            </div>
        </div>

    )
}

export default MyPosts;