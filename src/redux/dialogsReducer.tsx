import {GlobalActionType} from "./state";
import {DialogPagePropsType} from "../Components/Dialogs/Dialogs";

export const dialogsReducer = (state: DialogPagePropsType, action: GlobalActionType) => {
    switch (action.type) {
        case 'NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessageBody
            return state
        case 'SEND-MESSAGE-TEXT':
            const sentMessage = state.newMessageText
            state.newMessageText = ''
            state.messageData.push({id: 6, message: sentMessage})
            return state
        default:
            return state
    }
}