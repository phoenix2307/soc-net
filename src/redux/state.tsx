import {StatePropsType} from "../App";

type StoreType = {
    _state: StatePropsType
    getState: () => StatePropsType
    _callSubscriber: () => void
    addPost: (textPost: string) => void
    updateNewPostText: (newText: string) => void
    subscribe: (callback: () => void) => void
}
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
        ]
    },
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi, how are you?', likesCount: '12'},
            {id: 2, message: 'Hi, how are you?', likesCount: '2'},
            {id: 3, message: 'Hi, how are you my friend?', likesCount: '55'}
        ],
        newPostText: 'IT-Kamasutra.com'
    },
    sidebar: {}
},
    getState() {
        return this._state
    },
    _callSubscriber() {},
    addPost (textPost: string) {
        const newPost = {id: 4, message: textPost, likesCount: '0'}
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    updateNewPostText (newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    subscribe (callback) {
        this._callSubscriber = callback
    }
}








