import { 
    FETCH_GAME_MOVE_TTT_BEGIN,
    FETCH_GAME_MOVE_TTT_SUCCESS,
    FETCH_GAME_MOVE_TTT_FAILURE,
    RESET_GAME_TTT
} from './action';

const initialState = {
    loading: false,
    error: false,
    board: ['','','','','','','','',''],
    winner: false,
    face: 'meh'
};

export default function TicTacToe(state = initialState, action) {
    switch (action.type) {
        case FETCH_GAME_MOVE_TTT_BEGIN:
            let b = [...state.board];
            b[action.choice] = 'X';
            return {
                ...state,
                loading: true,
                error: false,
                face: 'meh',
                board: b
            };
        case FETCH_GAME_MOVE_TTT_SUCCESS:
            const { board, face } = action;
            return {
                ...state,
                loading: false,
                error: false,
                board,
                face
            };
        case FETCH_GAME_MOVE_TTT_FAILURE:
            console.log('failed', action);
            const { error } = action;
            return {
                ...state,
                loading: false,
                error: error || 'unknown error',
                face: 'meh'
            };
        case RESET_GAME_TTT:
            return {
                ...state,
                ...initialState
            };
        default:
            return state;
    } 
}