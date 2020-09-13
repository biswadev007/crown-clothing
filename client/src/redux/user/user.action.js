import { userActionTypes } from './user.type';

export const googleSigninStart = () => ({
    type: userActionTypes.GOOGLE_SIGNIN_START
});

export const emailSigninStart = emailAndPassword => ({
    type: userActionTypes.EMAIL_SIGNIN_START,
    payload: emailAndPassword
});

export const signinSuccess = user => ({
    type: userActionTypes.SIGNIN_SUCCESS,
    payload: user
});

export const signinsignoutFailure = error => ({
    type: userActionTypes.SIGNIN_SIGNOUT_FAILURE,
    payload: error
});

export const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION
});

export const signoutStart = () => ({
    type: userActionTypes.SIGNOUT_START
});

export const signoutSuccess = () => ({
    type: userActionTypes.SIGNOUT_SUCCESS
});

export const signUpStart = userCredentials => ({
    type: userActionTypes.SIGN_UP_START,
    payload: userCredentials
});

export const signUpSuccess = ({ user, additionalData }) => ({
    type: userActionTypes.SIGN_UP_SUCCESS,
    payload: {user, additionalData}
});

export const signUpFailure = error => ({
    type: userActionTypes.SIGN_UP_FAILURE,
    payload: error
});