import {GlobalActionType} from "./reduxStore";
import {DialogPagePropsType} from "../Components/Dialogs/Dialogs";

const initialState: DialogPagePropsType = {
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ],
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How your IT-Kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo-Yo'},
        {id: 5, message: 'Yo-yoyo'}
    ],
    newMessageText: ''
}

export const dialogsReducer = (state = initialState, action: GlobalActionType) => {
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