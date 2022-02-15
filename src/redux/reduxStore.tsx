import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {StatePropsType} from "../App";

export type StoreType = { // где мы используем этот тип? закинул из старого store
    _state: StatePropsType
    _callSubscriber: () => void
    getState: () => StatePropsType
    subscribe: (callback: () => void) => void
    dispatch: (action: GlobalActionType) => void
}

export type GlobalActionType = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof newMessageTextAC>
    | ReturnType<typeof sendMessageTextAC>
/*----------Action Creators--------------*/
// profileReducer
export const addPostAC = (textPost: string) => {
    return {
        type: 'ADD-POST',
        textPost
    } as const
}
export const updateNewPostAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText
    } as const
}
//dialogsReducer
export const newMessageTextAC = (newMessageBody: string) => {
    return {
        type: 'NEW-MESSAGE-TEXT',
        newMessageBody
    } as const
}
export const sendMessageTextAC = () => {
    return {
        type: 'SEND-MESSAGE-TEXT'
    } as const
}

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer
})
export const store = createStore(reducers)