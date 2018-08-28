import {combineReducers} from 'redux';
import {reducer as fetchReducer} from 'react-redux-fetch';

const rootReducer = combineReducers({
    repository: fetchReducer
});

export default rootReducer;
