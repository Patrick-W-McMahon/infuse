import { combineReducers } from 'redux';
import Home from './containers/Home/reducer';
import RockPaperScissors from './containers/RockPaperScissors/reducer';

const rootReducer = combineReducers({
    Home,
    RockPaperScissors
});
export default rootReducer;