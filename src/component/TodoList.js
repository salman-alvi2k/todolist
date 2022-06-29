import React,{useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, settodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todos.text)){
            return;
        }

        const newTodos = [todo, ...todos];

        settodos(newTodos);
        console.log(...todos);
    };

    return (
    <div>
        <h1>What's the plan for Today?</h1>
        <TodoForm/>
    </div>
  )
}

export default TodoList