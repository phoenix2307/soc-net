import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem, DialogItemPropsType} from "./DialogItem/DialogItem";
import {Message, MessagesPropsType} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";

export type DialogPagePropsType = {
    dialogsData: Array<DialogItemPropsType>
    messageData: Array<MessagesPropsType>
    newMessageText: string

}
// export type DialogsPropsType = DialogPagePropsType & {
//     onSendMessageClick: () => void
//     changeTextArea: (newMessageBody: string) => void
// }

export const Dialogs = (props: DialogsPropsType) => {
    let newMessageText = props.newMessageText

    const dialogElements = props.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    const messageElements = props.messageData.map(m => <Message message={m.message} key={m.id} id={m.id}/>)

    const onSendMessageClickCB = () => {
        props.onSendMessageClick()
    }
    const changeTextAreaCB = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessageBody = e.currentTarget.value
        if (newMessageBody) {
            props.changeTextArea(newMessageBody)
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
                                   onChange={changeTextAreaCB}
                    >
                    </textarea></div>
                    <div>
                        <button onClick={onSendMessageClickCB}>Send</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
