import React from "react";
import {newMessageTextAC, sendMessageTextAC} from "../../redux/reduxStore";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StatePropsType} from "../../App";
import {Dispatch} from "redux";
import {DialogItemPropsType} from "./DialogItem/DialogItem";
import {MessagesPropsType} from "./Message/Message";

// for Dialogs props

// export const DialogsContainer = (props: DialogsContainerPropsType) => {
//
//     const onSendMessageClick = () => {
//         props.dispatch(sendMessageTextAC())
//     }
//     const changeTextArea = (newMessageBody: string) => {
//         props.dispatch(newMessageTextAC(newMessageBody))
//     }
//
//     return (
//         <Dialogs onSendMessageClick={onSendMessageClick}
//                  changeTextArea={changeTextArea}
//                  dialogsData={props.dialogsData}
//                  messageData={props.messageData}
//                  newMessageText={props.newMessageText}
//         />
//     )
// }

//-----------------------//
type MapStateToPropsType = {
    dialogsData: Array<DialogItemPropsType>
    messageData: Array<MessagesPropsType>
    newMessageText: string
}
type MapDispatchToPropsType = {
    onSendMessageClick: () => void
    changeTextArea: (newMessageBody: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: StatePropsType): MapStateToPropsType => {

    return {
        dialogsData: state.dialogPage.dialogsData,
        messageData: state.dialogPage.messageData,
        newMessageText: state.dialogPage.newMessageText
    }

}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {

    return {
        onSendMessageClick: () => {
            dispatch(sendMessageTextAC())
        },
        changeTextArea: (newMessageBody: string) => {
            dispatch(newMessageTextAC(newMessageBody))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
