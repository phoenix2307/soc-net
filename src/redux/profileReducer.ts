import {GlobalActionType} from "./reduxStore";
import {ProfilePropsType} from "../Components/Profile/Profile";

const initialState: ProfilePropsType= {

    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: '12'},
        {id: 2, message: 'Hi, how are you?', likesCount: '2'},
        {id: 3, message: 'Hi, how are you my friend?', likesCount: '55'}
    ],

    newPostText: ''
}

export const profileReducer = (state = initialState, action: GlobalActionType) => {

    switch (action.type) {

        case 'ADD-POST':
            const newPost = {id: 4, message: action.textPost, likesCount: '0'}
            return {
                ...state,
                postsData: [newPost, ...state.postsData],
                newPostText: ''
            }

        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            }

        default:
            return state
    }
}