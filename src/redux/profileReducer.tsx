import {GlobalActionType} from "./state";
import {ProfilePropsType} from "../Components/Profile/Profile";

export const profileReducer = (state: ProfilePropsType, action: GlobalActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {id: 4, message: action.textPost, likesCount: '0'}
            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}