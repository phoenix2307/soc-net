import React from "react";
import s from './Post.module.css';

export type PostType = {
    id: number
    message: string
    likesCount: string
}

function Post(props: PostType) {
    return (
        <div className={s.item}>
            <img
                src='https://previews.123rf.com/images/rikkyal/rikkyal1712/rikkyal171200010/90908344-gesicht-des-b%C3%A4rtigen-mannes-hippie-charakter-mode-silhouette-avata.jpg' alt={'bearded man'}/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;