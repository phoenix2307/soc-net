import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsDataType} from "../../../redux/state";


function MyPosts(props: PostsDataType) {

    const postElements = props.postsData.map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/> )

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