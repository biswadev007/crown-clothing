import actionType from "./shop.type";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
    type: actionType.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = collectionMap => ({
    type: actionType.FETCH_COLLECTION_SUCCESS,
    payload: collectionMap
});

export const fetchCollectionFailure = errorMessage => ({
    type: actionType.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
})

export const fetchCollectionStartAsync = () =>{
    return dispatch => {
        const collectionRef = firestore.collection('collection');
        dispatch(fetchCollectionStart());

        collectionRef.get()
        .then(snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionSuccess(collectionMap));
        })
        .catch(error => dispatch(fetchCollectionFailure(error.message)));
    }
}