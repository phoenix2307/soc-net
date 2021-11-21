import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: string
}
const DialogItem = (props: DialogPropsType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} className={(dialActive) => dialActive.isActive ? s.activeLink : ""}>{props.name}</NavLink>
        </div>
    )
}
type MessagesPropsType = {
    message: string
}
const Message = (props: MessagesPropsType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Sveta' id='3'/>
                <DialogItem name='Sasha' id='4'/>
                <DialogItem name='Victor' id='5'/>
                <DialogItem name='Valera' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How is your IT-Kamasutra'/>
                <Message message='Yo'/>
                <Message message='Yo'/>
                <Message message='Yo'/>
            </div>
        </div>

    )
}

export default Dialogs