import { toast } from 'react-toastify';
export const FETCH_GAME_MOVE = 'FETCH_GAME_MOVE';
export const FETCH_GAME_MOVE_BEGIN = 'FETCH_GAME_MOVE_BEGIN';
export const FETCH_GAME_MOVE_SUCCESS = 'FETCH_GAME_MOVE_SUCCESS';
export const FETCH_GAME_MOVE_FAILURE = 'FETCH_GAME_MOVE_FAILURE';
export const RESET_GAME = 'RESET_GAME';

export const fetchGameMoveBegin = () => ({
    type: FETCH_GAME_MOVE_BEGIN
});

export const fetchGameMoveSuccess = ({ playerChoice, computerChoice, face, result }) => ({
    type: FETCH_GAME_MOVE_SUCCESS,
    playerChoice,
    computerChoice,
    face,
    result
});

export const fetchGameMoveFailure = ({ error }) => ({
    type: FETCH_GAME_MOVE_FAILURE,
    error 
});

export function fetchGameMove(choice) {
    return dispatch => {
        dispatch(fetchGameMoveBegin());
        fetch("/api/match",{
            method: 'POST',
            body: JSON.stringify({choice}),
            headers: {'Content-Type': 'application/json'}
        }).then(responce => {
            if(responce.ok){
                return responce.json();
            } else {
                throw new Error('Something went wrong');
            }
        }).then(responseJson => {
            toast(`You ${responseJson.result}`, { position: toast.POSITION.BOTTOM_RIGHT });
            dispatch(fetchGameMoveSuccess(responseJson));
            return responseJson;
        }).catch(error => dispatch(fetchGameMoveFailure(error)));
    };
}

export const resetGame = () => ({
    type: RESET_GAME
});