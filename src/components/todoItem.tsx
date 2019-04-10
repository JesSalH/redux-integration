import React from 'react';
import ITodo from '../interfaces';


// interface que dice lo que tiene que devolver un todo
interface IProps {
  todo: ITodo;
  chooseAction: (todo: ITodo) => void;
}


// ----- componente TodoItem -------- 
// devuelve un objeto todo y una funcion chooseAction??
// creo que recibe un objeto todo y una funcion chooseAction
const TodoItem = ({ todo, chooseAction }: IProps) => (

  // no lleva return, renderiza esto a saco

  <p 
    // creo que al hacer click llama a la funcion chooseAction que le hemos pasado como parametro
    onClick={() => chooseAction(todo)}>
    {/* saca por pantalla la id y el name del todo que ha recibido como param */}
    {todo.id} - {todo.name}
  </p>

);

export default TodoItem;
