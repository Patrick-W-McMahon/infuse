import { toast } from 'react-toastify';
export const FETCH_NAME_BEGIN = 'FETCH_NAME_BEGIN';
export const FETCH_NAME_SUCCESS = 'FETCH_NAME_SUCCESS';
export const FETCH_NAME_FAILURE = 'FETCH_NAME_FAILURE';

export const fetchNameBegin = () => ({
    type: FETCH_NAME_BEGIN
});

export const fetchNameSuccess = data => ({
    type: FETCH_NAME_SUCCESS,
    name: data.username
});

export const fetchNameFailure = error => ({
    type: FETCH_NAME_FAILURE,
    error: { error }
});

export function fetchName() {
    return dispatch => {
        dispatch(fetchNameBegin());
        fetch("/api/username",{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).then(responce => {
            if(responce.ok){
                return responce.json();
            } else {
                throw new Error('Something went wrong');
            }
        }).then(responseJson => {
            dispatch(fetchNameSuccess(responseJson));
            return responseJson;
        }).catch(error => {
            toast(`failed to get name: ${error.error}`, { position: toast.POSITION.BOTTOM_RIGHT });
            return dispatch(fetchNameFailure(error));
        });
    };
}

export const resetGame = () => ({
    type: RESET_GAME
});