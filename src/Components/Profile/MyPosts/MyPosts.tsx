import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";

// export type MyPostsType = {
//     addPost: (textPost: string) => void
//     changeText: (newText: string) => void
//     posts: PostType[]
//     newPostText: string
// }

export const MyPosts = (props: MyPostsPropsType) => {

    const postElements = props.posts.map(p => <Post
        key={p.id}
        id={p.id}
        message={p.message}
        likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostCallback = () => {
        let textPost = newPostElement.current?.value
        if (textPost) {
            props.addPost(textPost)
        }
    }

    const onChangeHandler = () => {
        let newText =  newPostElement.current?.value
        if(newText){
            props.changeText(newText)
        }
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea placeholder={'Write your thoughts here'}
                          onChange={onChangeHandler}
                          ref={newPostElement}
                          value={props.newPostText}
                >
                </textarea>
            </div>
            <div>
                <button onClick={addPostCallback}>Add post</button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>

    )
}
