import ITodo from '../interfaces';

// crea constantes para el type de cada action
const constants = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  EDIT_TODO: 'EDIT_TODO',
};

// ACTIONS 
// son funciones que reciben un obj todo y tienen una prop type y otra data que es ese todo
const addTodo = (todo: ITodo) => ({ data: todo, type: constants.ADD_TODO });
const removeTodo = (todo: ITodo) => ({ data: todo, type: constants.REMOVE_TODO });
const editTodo = (todo: ITodo) => ({ data: todo, type: constants.EDIT_TODO });

// esta var engloba a todas las actions y es la que se exporta
const todoActions = { addTodo, removeTodo, editTodo, actions: constants };
export default todoActions;
