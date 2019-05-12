import { toast } from 'react-toastify';
export const MAKE_MOVE_TTT = 'MAKE_MOVE_TTT';
export const MAKE_MOVE_TTT_BEGIN = 'MAKE_MOVE_TTT_BEGIN';
export const MAKE_MOVE_TTT_SUCCESS = 'MAKE_MOVE_TTT_SUCCESS';
export const MAKE_MOVE_TTT_FAILURE = 'MAKE_MOVE_TTT_FAILURE';
export const RESET_GAME_TTT = 'RESET_GAME_TTT';

export const makeMoveBegin = choice => ({
    type: MAKE_MOVE_TTT_BEGIN,
    choice
});

export const makeMoveSuccess = ({ face, board }) => ({
    type: MAKE_MOVE_TTT_SUCCESS,
    face,
    board
});

export const makeMoveFailure = error => ({
    type: MAKE_MOVE_TTT_FAILURE,
    error 
});

export function makeMove(choice) {
    return (dispatch, getState) => {
        const { board } = getState().TicTacToe;
        dispatch(makeMoveBegin());
        fetch("/api/tic-tac-toe/move",{
            method: 'POST',
            body: JSON.stringify({ choice, board }),
            headers: {'Content-Type': 'application/json'}
        }).then(responce => {
            if(responce.ok){
                return responce.json();
            } else {
                throw new Error('Something went wrong');
            }
        }).then(responseJson => {
            console.log('responce', responseJson);
            //toast(`You ${responseJson.result}`, { position: toast.POSITION.BOTTOM_RIGHT });
            dispatch(makeMoveSuccess(responseJson));
            return responseJson;
        }).catch(error => dispatch(makeMoveFailure(error)));
    };
}

export const resetGame = () => ({
    type: RESET_GAME_TTT
});