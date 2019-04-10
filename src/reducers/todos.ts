import { AnyAction, Reducer } from 'redux';
// importamos actions
import { todoActions } from '../actions';
import ITodo from '../interfaces';

// IState es un array de todos
export interface IState {
  readonly todos: ITodo[];
}


// este es el array de todos inicial
const initialState = {
  todos: [
    { id: 1, name: `Random name: ${Math.round(Math.random() * 100)}` },
    { id: 2, name: `Random name: ${Math.round(Math.random() * 100)}` },
  ],
};


// ----------- REDUCER ---------------
//el primer parametro del reducer son los datos (los llama state y lo inicializa con initialState)
// el segundo parametro que recibe es una action (el tipo AnyAction parece que estaba en la libreria redux)
const reducer: Reducer<IState> = (state: IState = initialState, action: AnyAction): IState => {

  switch (action.type) {

    // action: add
    case todoActions.actions.ADD_TODO:
      // devuelve un objeto con 2 props> state y todos
      // el primer parametro (state) no se que hace...
      // el segund parametro es un objeto todos que contiene un array de todos con el nuevo todo devuelto por action.data
      return { ...state, todos: [...state.todos, action.data] };


    // action: remove 
    case todoActions.actions.REMOVE_TODO:

      const todo = action.data;
      // filtra el array de todos y elimina el que tiene la id del que nos han pasado
      const newTodos = state.todos.filter(t => t.id !== todo.id);
      return { ...state, todos: newTodos };


    // action: edit 
    case todoActions.actions.EDIT_TODO:

      const newTodo = action.data;
      const afterUpdate = state.todos.map(t => 
        {
          // si encuentra un elemento todo con esa id en el array de todos lo transforma de esta manera:
          if (t.id === newTodo.id) {
            // devuelve un objeto con 2 variables:
              //la primera es ese todo descompuesto en variables
              //y la segunda es el nuevo todo tambien descompuesto en variables
              //!!!! pero como algunas se llaman igual las varibales del newTodo sobre escriben a las viejas.....
            // y finalmente devuelve este t (todo) transformado
            return { ...t, ...newTodo };
        }
        // el resto de todos los devuelve como estaban
        return t;
      });

      // devuelve un objeto con el estate descompuesto en variables y un nuevo arra de todos actualizado.
      return { ...state, todos: afterUpdate };


    // default devuelve el state con valor por defecto initial state (creo) 
    default:
      return state || initialState;
  }
};

// exporta el reducer
export default reducer;
