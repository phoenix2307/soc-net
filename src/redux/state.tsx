import {StatePropsType} from "../App";

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
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: '12'},
                {id: 2, message: 'Hi, how are you?', likesCount: '2'},
                {id: 3, message: 'Hi, how are you my friend?', likesCount: '55'}
            ],
            newPostText: ''
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
    dispatch(action: any) { // need fixed
        switch (action.type) {
            case 'ADD-POST':
                const newPost = {id: 4, message: action.textPost, likesCount: '0'}
                this._state.profilePage.postsData.push(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber()
                break;
            case 'UPDATE-NEW-POST-TEXT':
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber()
                break;
            case 'NEW-MESSAGE-TEXT':
                this._state.dialogPage.newMessageText = action.newMessageBody
                this._callSubscriber()
                break;
            case 'SEND-MESSAGE-TEXT':
                const sentMessage = this._state.dialogPage.newMessageText
                this._state.dialogPage.newMessageText = ''
                this._state.dialogPage.messageData.push({id: 6, message: sentMessage})
                this._callSubscriber()
                break;
        }
    }
}

// Action Creators

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







