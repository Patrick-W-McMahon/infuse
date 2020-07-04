import { 
    MAKE_MOVE_TTT_BEGIN,
    MAKE_MOVE_TTT_SUCCESS,
    MAKE_MOVE_TTT_FAILURE,
    RESET_GAME_TTT,
    NO_MOVE_MADE
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
        case MAKE_MOVE_TTT_BEGIN:
            return {
                ...state,
                loading: true,
                error: false,
                face: 'meh'
            };
        case MAKE_MOVE_TTT_SUCCESS:
            const { board, face, winner } = action;
            return {
                ...state,
                loading: false,
                error: false,
                board,
                winner,
                face
            };
        case NO_MOVE_MADE:
            return {
                ...state,
                loading: false,
                error: false
            };
        case MAKE_MOVE_TTT_FAILURE:
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