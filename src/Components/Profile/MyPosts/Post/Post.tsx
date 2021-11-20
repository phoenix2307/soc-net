import React from "react";
import s from './Post.module.css';

function Post() {
    return (
        <div>
            <div className={s.item}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr6XeUdyMlaChLrWeRifu9pg2iL3HUEUZsLg&usqp=CAU'/>
                Post 1
                <div>
                    <span>like</span>
                </div>


            </div>

        </div>

    )
}

export default Post;