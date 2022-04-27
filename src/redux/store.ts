import { createStore } from 'redux';
import { reducer1 } from './reducer1';

const store = createStore(reducer1);

export default store;