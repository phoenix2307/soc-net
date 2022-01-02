import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsDataType} from "../../../redux/state";


function MyPosts(props: PostsDataType) {

    const postElements = props.postsData.map( p => <Post
        id={p.id}
        message={p.message}
        likesCount={p.likesCount}/> )

    const newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {
        let textPost = newPostElement.current?.value;
        alert(textPost)
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>

    )
}

export default MyPosts;