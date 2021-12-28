import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogPropsType = {
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

type MessagesPropsType = {
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

const Dialogs = () => {

    const dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ]

    const dialogElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id}/> )
    const messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How your IT-Kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo-Yo'},
        {id: 5, message: 'Yo-yoyo'}
    ]
    const messageElements = messageData.map( m => <Message message={m.message} id={m.id}/> )

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