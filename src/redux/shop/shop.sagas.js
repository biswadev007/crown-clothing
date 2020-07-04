import { takeLatest, call, put, all } from "redux-saga/effects";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.action";
import actionType from "./shop.type";

function* fetchCollectionAsync (){
    try {
        const collectionRef = firestore.collection('collection');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        
        yield put(fetchCollectionSuccess(collectionMap));
    } catch (error) {
        yield put(fetchCollectionFailure(error.message));   
    }
}

export function* fetchCollectionStart() {
    yield takeLatest(
        actionType.FETCH_COLLECTION_START,
        fetchCollectionAsync
    );
}

export function* shopSagas(){
    yield all([call(fetchCollectionStart)])
}