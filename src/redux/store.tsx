import {StatePropsType} from "../App";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

export type StoreType = {
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

export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: '12'},
                {id: 2, message: 'Hi, how are you?', likesCount: '2'},
                {id: 3, message: 'Hi, how are you my friend?', likesCount: '55'}
            ],
            newPostText: ''
        },
        dialogPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
    },
    subscribe(callback) {
        this._callSubscriber = callback
    },
    getState() {
        return this._state
    },
    dispatch(action: GlobalActionType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()
    }
}

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







