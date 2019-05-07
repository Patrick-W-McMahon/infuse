const initialState = {
    win: 0,
    lose: 0,
    tie: 0
};
  
function ticTacToeReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_WIN': {
            return Object.assign({}, state, { win: state.win++ });
        }
        case 'ADD_LOSE': {
            return Object.assign({}, state, { lose: state.lose++ });
        }
        case 'ADD_TIE': {
            return Object.assign({}, state, { tie: state.tie++ });
        }
        default:
            return state;
    } 
}
export default ticTacToeReducer; 