import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: number
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
    message: string
    id: number
}
const Message = (props: MessagesPropsType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'}
]
const messageData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How your IT-Kamasutra'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo-Yo'},
    {id: 5, message: 'Yo-yoyo'}
]

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message} id={messageData[0].id}/>
                <Message message={messageData[1].message} id={messageData[1].id}/>
                <Message message={messageData[2].message} id={messageData[2].id}/>
                <Message message={messageData[3].message} id={messageData[3].id}/>
                <Message message={messageData[4].message} id={messageData[4].id}/>
            </div>
        </div>

    )
}

export default Dialogs