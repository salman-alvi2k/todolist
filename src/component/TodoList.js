import React,{useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, settodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo, ...todos];

        settodos(newTodos);
        // console.log(...todos);
    }; 

    const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    settodos(removeArr)
    }

    const completeTodo = id =>{
        let updatedTodos = todos.map(todo =>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            } 
            return todo
        })
        settodos(updatedTodos);
    };

    return (
    <div>
        <h1>What's the plan for Today?</h1>
        <TodoForm onSubmit ={addTodo}/>
        <Todo todos = {todos} completeTodo = {completeTodo} removeTodo = {removeTodo}/>
    </div>
  )
}

export default TodoList