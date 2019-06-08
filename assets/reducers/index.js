import {combineReducers} from 'redux';
import changeModal from './changemodal';

const rootReducer = combineReducers({
	changemodal:changeModal
});

export default rootReducer;
