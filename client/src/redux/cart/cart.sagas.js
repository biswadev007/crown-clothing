import { all, call, takeLatest, put } from "redux-saga/effects";

import { userActionTypes } from "../user/user.type";
import { clearCart } from "./cart.action";

export function* clearcartOnSignOut(){
    yield put(clearCart());
}

export function* onSignOutSuccess(){
    yield takeLatest(userActionTypes.SIGNOUT_SUCCESS, clearcartOnSignOut)
} 

export function* cartSagas() {
    yield (all([
        call(onSignOutSuccess)
    ]))
}