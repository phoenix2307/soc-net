import {StatePropsType} from "../App";


export let state: StatePropsType = {
    dialogPage:{
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
        ]
    }
}

export const addPost = (textPost: string) => {
    let newPost = {
        id: 4, message: textPost, likesCount: '0'
    }
    state.profilePage.postsData.push(newPost)
}