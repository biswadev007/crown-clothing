import { takeLatest, all, call, put } from "redux-saga/effects";

import { userActionTypes } from "./user.type";
import { googleProvider, auth, createProfileData, getCurrentUser } from "../../firebase/firebase.utils";
import { signinSuccess, signoutSuccess, signinsignoutFailure, signUpSuccess, signUpFailure } from "./user.action";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createProfileData, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(
            signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        )
    } catch (error) {
        yield put(signinsignoutFailure(error));
    }
}

export function* signinWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signinsignoutFailure(error));
    }
}

export function* signinWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(
            signinsignoutFailure(error)
        )
    }
}

export function* signout() {
    try {
        yield auth.signOut();
        yield put(
            signoutSuccess()
        )
    } catch (error) {
        yield put(
            signinsignoutFailure(error)
        )
    }
}

export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        
        yield put(signUpSuccess({user, additionalData: { displayName }}));
    } catch (error) {
        yield put(
            signUpFailure(error)
        )
    }
}

export function* signUpToSignIn({ payload: { user, additionalData } }) {
    yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onGoogleSigninStart() {
    yield takeLatest(
        userActionTypes.GOOGLE_SIGNIN_START,
        signinWithGoogle
    );
}

export function* onEmailSigninStart() {
    yield takeLatest(
        userActionTypes.EMAIL_SIGNIN_START,
        signinWithEmail
    )
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(
            signinsignoutFailure(error)
        )
    }
}

export function* onCheckUserSession() {
    yield takeLatest(
        userActionTypes.CHECK_USER_SESSION,
        isUserAuthenticated
    )
}

export function* onSignout() {
    yield takeLatest(
        userActionTypes.SIGNOUT_START,
        signout
    )
}

export function* onSignUp() {
    yield takeLatest(
        userActionTypes.SIGN_UP_START,
        signUp
    )
}

export function* onSignupSuccess(){
    yield takeLatest(
        userActionTypes.SIGN_UP_SUCCESS,
        signUpToSignIn
    )
}

export function* userSagas() {
    yield all([
        call(onGoogleSigninStart),
        call(onEmailSigninStart),
        call(isUserAuthenticated),
        call(onSignout),
        call(onSignUp),
        call(onSignupSuccess)
    ])
}