import { createStore, combineReducers } from 'redux';
import { reducer1 } from './reducer1';
import { reducer2 } from './reducer2';

const rootReducer = combineReducers({
	task1 : reducer1,
	task2 : reducer2,
});

const store = createStore(rootReducer);
export default store;