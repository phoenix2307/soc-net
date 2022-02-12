import React from "react";
import s from './MyPosts.module.css';
import Post, {PostType} from "./Post/Post";
import {addPostAC, GlobalActionType, updateNewPostAC} from "../../../redux/state";


export type MyPostsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: GlobalActionType) => void
}

function MyPosts(props: MyPostsType) {

    const postElements = props.posts.map(p => <Post
        id={p.id}
        message={p.message}
        likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onClickHandler = () => {
        let textPost = newPostElement.current?.value
        if (textPost) {
            const action = addPostAC(textPost)
            props.dispatch(action)
        }
    }

    const onChangeHandler = () => {
        let newText =  newPostElement.current?.value
        if(newText){
            const action = updateNewPostAC(newText)
            props.dispatch(action)
        }
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onChangeHandler}
                          ref={newPostElement}
                          value={props.newPostText}
                >
                </textarea>
            </div>
            <div>
                <button onClick={onClickHandler}>Add post</button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>

    )
}

export default MyPosts;