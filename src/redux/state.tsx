import {StatePropsType} from "../App";

export type StoreType = {
    _state: StatePropsType
    getState: () => StatePropsType
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
    dispatch: (action: GlobalActionType) => void
}

export type GlobalActionType = AddPostActionType | UpdateNewPostActionType

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostActionType = ReturnType<typeof updateNewPostAC>

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
            newPostText: 'Write your thoughts here'
        },
        sidebar: {}
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(callback) {
        this._callSubscriber = callback
    },

    // addPost(textPost: string) {
    //     const newPost = {id: 4, message: textPost, likesCount: '0'}
    //     this._state.profilePage.postsData.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber()
    // },
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber()
    // },

    dispatch(action: any) { // need fixed
        if (action.type === 'ADD-POST') {
            const newPost = {id: 4, message: action.textPost, likesCount: '0'}
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
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








