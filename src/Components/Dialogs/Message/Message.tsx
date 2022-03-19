import s from "../Dialogs.module.css";
import React from "react";


export type MessagesPropsType = {
    id: number
    message: string
}

export const Message = (props: MessagesPropsType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}