import { 
    FETCH_GAME_MOVE_BEGIN,
    FETCH_GAME_MOVE_SUCCESS,
    FETCH_GAME_MOVE_FAILURE,
    RESET_GAME
} from './action';

const initialState = {
    loading: false,
    error: false,
    playerChoice: false,
    computerChoice: false,
    face: 'meh',
    result: false
};

export default function RockPaperScissors(state = initialState, action) {
    switch (action.type) {
        case FETCH_GAME_MOVE_BEGIN:
            return {
                ...state,
                loading: true,
                error: false,
                playerChoice: false,
                computerChoice: false,
                face: 'meh',
                result: false,
            };
        case FETCH_GAME_MOVE_SUCCESS:
            const { playerChoice, computerChoice, face, result } = action;
            return {
                ...state,
                loading: false,
                error: false,
                playerChoice,
                computerChoice,
                face,
                result
            };
        case FETCH_GAME_MOVE_FAILURE:
            console.log('failed', action);
            const { error } = action;
            return {
                ...state,
                loading: false,
                error: error || 'unknown error',
                playerChoice: false,
                computerChoice: false,
                face: 'meh',
                result: false,
            };
        case RESET_GAME:
            return {
                ...state,
                ...initialState
            };
        default:
            return state;
    } 
}