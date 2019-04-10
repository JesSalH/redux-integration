// pagina principal

import React from 'react';
import { connect } from 'react-redux';
import ITodo from '../interfaces';
import { todoActions } from '../actions';
import TodoItem from '../components/todoItem';
import { any } from 'prop-types';


//interface con todos los elementos que podra tener el componente
interface IProps {
  //array todos todo con formato array de ITodos
  todos: ITodo[];
  //funcion -> reciben un objeto todo (formato Itodo) y devuelven void
  addTodo: (todo: ITodo) => void;
  removeTodo: (todo: ITodo) => void;
  editTodo: (todo: ITodo) => void;
}

class App extends React.Component<IProps, any> {

  public render() {

    //parece que en las props le esta llegando el array de todos
    const { todos } = this.props;

    return (
      <div>
        <h1> Numero de todos: {todos.length}</h1>
        <h3>Click to edit/remove</h3>
        <ul>
          {/* mapeamos el array de todos con el componente TodoItem */}
          {todos.map(t => (
            <TodoItem 
                key={t.id} 
                todo={t}
                // la prop chooseAction llama a una funcion de aqui que se llama igual 
                chooseAction={todo => this.chooseAction(todo)} />
          ))}
        </ul>

        <button onClick={() => this.addTodo()}>Add todo</button>
      </div>
    );
  }


  // chooseAction recibe un todo
  private chooseAction(todo: ITodo) {
    if (confirm('Edit or delete? (Yes = Edit, No = Delete)')) {
      // si le damos a yes llama a editTodo
      this.editTodo(todo);
    } else {
      // no llama a removeTodo
      this.removeTodo(todo);
    }
  }


  // funcion que crea un nuevo Todo
  private addTodo() {

    //carga un array de todos desde las props
    const { todos } = this.props;

    // coge el lastTodo del array para luego sacar su id
    // creo que en caso de que no crea directamente un objeto con la prop id = 0
    const lastTodo = todos.length > 0 ? todos[todos.length - 1] : { id: 0 };

    // crea un nuevo todo
    const todo: ITodo = {

      id: lastTodo.id + 1,
      name: `Random name: ${Math.round(Math.random() * 100)}`,
    };

    // llama desde las props a la action que anyade este nuevo todo
    this.props.addTodo(todo);

  }


  //funcion removeTodo -> llama desde las props a la action removeTodo
  private removeTodo(todo: ITodo) {
    this.props.removeTodo(todo);
  }


  // funcion editTodo -> recibe un todo..
  private editTodo(todo: ITodo) {
    
    // pide un nombre y lo guarda en newName
    const newName = prompt('New name', '');
    // si le han pasado un nombre llama a la action editTodo. 
    //ojo que le pasa como parametro el objeto todo descompuesto en variables y luego la varible name que creo que sobreescribe la que habia
    if (newName) this.props.editTodo({ ...todo, name: newName });
  }
}



// coge el array de todos del store
const mapStateToProps = (state:any) => ({
  todos: state.todos.todos,
});


// coge todas las actions: 
    // van dentro de todoActions
    // le dice a cada una que parametro tienen
const mapDispatchToProps = (dispatch:any) => ({

  addTodo: (todo: ITodo) => dispatch(todoActions.addTodo(todo)),
  removeTodo: (todo: ITodo) => dispatch(todoActions.removeTodo(todo)),
  editTodo: (todo: ITodo) => dispatch(todoActions.editTodo(todo)),

});


// el connect del store, actions y el componente (ahora todo esta dentro de App en props.)
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
