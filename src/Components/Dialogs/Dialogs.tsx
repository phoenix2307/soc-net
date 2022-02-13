import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {GlobalActionType, newMessageTextAC, sendMessageTextAC} from "../../redux/store";

// for STATE
export type DialogPagePropsType = {
    dialogsData: Array<DialogItemPropsType>
    newMessageText: string
    messageData: Array<MessagesPropsType>
}

// for Dialogs props
export type DialogsPropsType = DialogPagePropsType & {
    dispatch: (action: GlobalActionType) => void
}
export const Dialogs = (props: DialogsPropsType) => {
    let newMessageText = props.newMessageText

    const dialogElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messageElements = props.messageData.map(m => <Message message={m.message} id={m.id}/>)

    const onSendMessageClick = () => {
            props.dispatch(sendMessageTextAC())
    }
    const changeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessageBody = e.currentTarget.value
        if(newMessageBody){
            props.dispatch(newMessageTextAC(newMessageBody))
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageText}
                                   placeholder={'Enter your message'}
                                   onChange={changeTextAreaHandler}
                    >

                    </textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>

    )
}

export type DialogItemPropsType = {
    id: number
    name: string
}

const DialogItem = (props: DialogItemPropsType) => {
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