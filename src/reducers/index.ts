import { combineReducers } from 'redux';
import todos from './todos';

// combino los reducers aunque en este caso solo hay 1
const reducers = combineReducers({
  todos,
});

export default reducers;
