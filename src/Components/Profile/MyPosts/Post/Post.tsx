import React from "react";
import s from './Post.module.css';
import {MyPostsPropsType} from "../MyPosts";

function Post(props: MyPostsPropsType) {
    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr6XeUdyMlaChLrWeRifu9pg2iL3HUEUZsLg&usqp=CAU'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;