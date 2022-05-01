import { createStore, combineReducers } from 'redux';
import { reducer1 } from './1/redux/reducer1';
import { reducer2 } from './2/redux/reducer2';
import reducer3 from './3/redux/reducer3';

const rootReducer = combineReducers({
	task1 : reducer1,
	task2 : reducer2,
	task3 : reducer3,
});

const store = createStore(rootReducer);
export default store;