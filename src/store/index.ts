// en el store van los reducers... los ha llamado rootReducer

import { createStore } from 'redux';
import rootReducer from '../reducers';

const initialState = {};

const store = createStore(rootReducer, initialState);

export default store;
