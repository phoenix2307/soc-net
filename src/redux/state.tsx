export type MyPostsPropsType = {
    id: number
    message: string
    likesCount: string
}
export type PostsDataType = {
    postsData: Array<MyPostsPropsType>
}
/*const postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: '12'},
    {id: 2, message: 'Hi, how are you?', likesCount: '2'},
    {id: 3, message: 'Hi, how are you my friend?', likesCount: '55'},
]*/

export type DialogPropsType = {
    id: number
    name: string
}
/*const dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'}
]*/

export type MessagesPropsType = {
    id: number
    message: string

}
/*const messageData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How your IT-Kamasutra'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo-Yo'},
    {id: 5, message: 'Yo-yoyo'}
]*/

export type DialogPagePropsType = {
    dialogsData: Array<DialogPropsType>
    messageData: Array<MessagesPropsType>
}

export type StatePropsType ={
    dialogPage:  DialogPagePropsType
    profilePage: PostsDataType
}
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
            {id: 3, message: 'Hi, how are you my friend?', likesCount: '55'},
        ]
    }
}