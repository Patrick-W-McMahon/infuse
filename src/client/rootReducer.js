import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import Home from './containers/Home/reducer';
import Contacts from './containers/Contacts/reducer';
import RockPaperScissors from './containers/RockPaperScissors/reducer';
import TicTacToe from './containers/TicTacToe/reducer';

const rootReducer = combineReducers({
    Home,
    Contacts,
    RockPaperScissors,
    TicTacToe,
    form: formReducer
});
export default rootReducer;