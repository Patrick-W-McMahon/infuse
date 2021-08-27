import { toast } from 'react-toastify';
export const FETCH_NAME_BEGIN = 'FETCH_NAME_BEGIN';
export const FETCH_NAME_SUCCESS = 'FETCH_NAME_SUCCESS';
export const FETCH_NAME_FAILURE = 'FETCH_NAME_FAILURE';
export const FETCH_ENV_BEGIN = 'FETCH_ENV_BEGIN';
export const FETCH_ENV_SUCCESS = 'FETCH_ENV_SUCCESS';
export const FETCH_ENV_FAILURE = 'FETCH_ENV_FAILURE';

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

export const fetchEnvBegin = () => ({
    type: FETCH_ENV_BEGIN
});

export const fetchEnvSuccess = data => ({
    type: FETCH_ENV_SUCCESS,
    env: data.env
});

export const fetchEnvFailure = error => ({
    type: FETCH_ENV_FAILURE,
    error: { error }
});

export function fetchName() {
    return dispatch => {
        dispatch(fetchNameBegin());
        fetch("/api/username", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(responce => {
            if (responce.ok) {
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

export function fetchEnv() {
    return dispatch => {
        dispatch(fetchEnvBegin());
        fetch("/api/env", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(responce => {
            if (responce.ok) {
                return responce.json();
            } else {
                throw new Error('Something went wrong');
            }
        }).then(responseJson => {
            dispatch(fetchEnvSuccess(responseJson));
            return responseJson;
        }).catch(error => {
            toast(`failed to get env: ${error.error}`, { position: toast.POSITION.BOTTOM_RIGHT });
            return dispatch(fetchEnvFailure(error));
        });
    };
}

export const resetGame = () => ({
    type: RESET_GAME
});