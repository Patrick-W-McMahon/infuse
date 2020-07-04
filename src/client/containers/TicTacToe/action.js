import { toast } from 'react-toastify';
export const MAKE_MOVE_TTT = 'MAKE_MOVE_TTT';
export const MAKE_MOVE_TTT_BEGIN = 'MAKE_MOVE_TTT_BEGIN';
export const MAKE_MOVE_TTT_SUCCESS = 'MAKE_MOVE_TTT_SUCCESS';
export const MAKE_MOVE_TTT_FAILURE = 'MAKE_MOVE_TTT_FAILURE';
export const RESET_GAME_TTT = 'RESET_GAME_TTT';
export const NO_MOVE_MADE = 'NO_MOVE_MADE';

export const makeMoveBegin = choice => ({
    type: MAKE_MOVE_TTT_BEGIN,
    choice
});

export const noMoveMade = () => ({
    type:NO_MOVE_MADE
});

export const makeMoveSuccess = ({ face, board, winner }) => ({
    type: MAKE_MOVE_TTT_SUCCESS,
    face,
    board,
    winner: winner === false ? false : winner === 'tie' ? winner : { ...winner, winningSet: winner.winningSet.split(',').map(v => parseInt(v))}
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
                if(responce.status === 403) {
                    dispatch(noMoveMade());
                    return 'invalid move';
                } else {
                    throw new Error('Something went wrong');
                }
            }
        }).then(responseJson => {
            if(responseJson === 'invalid move'){
                toast(`Invalid Move`, { position: toast.POSITION.BOTTOM_RIGHT });
                return responseJson;
            }
            const { winner } = responseJson;
            if(winner !== false){
                if(winner === 'tie') {
                    toast(`It's a tie!`, { position: toast.POSITION.BOTTOM_RIGHT }); 
                } else {
                    toast(`You ${winner.player === 'X' ? 'win' : 'lose'}!`, { position: toast.POSITION.BOTTOM_RIGHT }); 
                }
            }
            dispatch(makeMoveSuccess(responseJson));
            return responseJson;
        }).catch(error => dispatch(makeMoveFailure(error)));
    };
}

export const resetGame = () => ({
    type: RESET_GAME_TTT
});