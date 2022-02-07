import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogPagePropsType = {
    dialogsData: Array<DialogPropsType>
    messageData: Array<MessagesPropsType>
}

export type DialogPropsType = {
    id: number
    name: string
}

const DialogItem = (props: DialogPropsType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}
                     className={(dialActive) => dialActive.isActive ? s.activeLink : ""}>
                {props.name}
            </NavLink>
        </div>
    )
}

export type MessagesPropsType = {
    id: number
    message: string
}

const Message = (props: MessagesPropsType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props: DialogPagePropsType) => {

    const dialogElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

    const messageElements = props.messageData.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>

    )
}

export default Dialogs