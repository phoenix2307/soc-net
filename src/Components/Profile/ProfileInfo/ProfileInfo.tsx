import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.image}
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpNOth8Kc6hxadZ1MvQWLGCLlAiQ2v8C8T8Q&usqp=CAU' alt={'city'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo