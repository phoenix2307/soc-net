import React from "react";
import s from './MyPosts.module.css';
import Post, {PostType} from "./Post/Post";


export type MyPostsType = {
    posts: PostType[]
    addPost: (textPost: string) => void
}

function MyPosts(props: MyPostsType) {

    const postElements = props.posts.map( p => <Post
        id={p.id}
        message={p.message}
        likesCount={p.likesCount}/> )

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        let textPost = newPostElement.current?.value
        if (textPost) {
            props.addPost(textPost)
        }
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}>
                </textarea>
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