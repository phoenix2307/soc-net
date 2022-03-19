import React from "react";
import s from './MyPosts.module.css';
import {PostType} from "./Post/Post";
import {addPostAC, updateNewPostAC} from "../../../redux/reduxStore";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StatePropsType} from "../../../App";

//----------------------copy is work ---------------------//

// export type MyPostsContainerType = {
//     posts: PostType[]
//     newPostText: string
//     dispatch: (action: GlobalActionType) => void
// }
//
// export const MyPostsContainer = (props: MyPostsContainerType) => {
//
//
//     const addPost = (textPost: string) => {
//             props.dispatch(addPostAC(textPost))
//     }
//
//     const changeText = (newText: string) => {
//             props.dispatch(updateNewPostAC(newText))
//     }
//
//     return (
//         <MyPosts addPost={addPost}
//                  changeText={changeText}
//                  posts={props.posts}
//                  newPostText={props.newPostText}/>
//     )
// }

//---------------------- end copy ------------------------//

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

// export const MyPostsContainer = (props: MyPostsContainerType) => {
//
//
//     const addPost = (textPost: string) => {
//             props.dispatch(addPostAC(textPost))
//     }
//
//     const changeText = (newText: string) => {
//             props.dispatch(updateNewPostAC(newText))
//     }
//
//     return (
//         <MyPosts addPost={addPost}
//                  changeText={changeText}
//                  posts={props.posts}
//                  newPostText={props.newPostText}/>
//     )
// }

type MapStateToPropsType = {
    posts: PostType[]
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: (textPost: string) => void
    changeText: (newText: string) => void
}

const mapStateToProps = (state: StatePropsType): MapStateToPropsType => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (textPost: string) => {
            dispatch(addPostAC(textPost))
        },
        changeText: (newText: string) => {
            dispatch(updateNewPostAC(newText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)