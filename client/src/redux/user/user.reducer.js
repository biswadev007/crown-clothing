import { userActionTypes } from './user.type';

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SIGNIN_SUCCESS :
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case userActionTypes.SIGNOUT_SUCCESS :
            return {
                ...state,
                currentUser: null,
                error: null
            }
        case userActionTypes.SIGNIN_SIGNOUT_FAILURE :
        case userActionTypes.SIGN_UP_FAILURE :
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
