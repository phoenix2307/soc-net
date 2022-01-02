import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogPagePropsType, DialogPropsType, MessagesPropsType} from "../../redux/state";

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