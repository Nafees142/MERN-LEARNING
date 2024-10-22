import {useState} from 'react';
import AddTodo from "./components/Addtodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import initialTodoItems from './data/initialTojoitems';

function App() {

  
  const [todoItems, setTodoItems] = useState(initialTodoItems)
  console.log(todoItems)

  const addTodoItem = (todoText, todoDate) => {
      setTodoItems(currentItems =>{
        return [...currentItems, {id:todoText,  todoText ,todoDate}]
      })
  }
 
  const deleteItems = (todoId) =>{
    setTodoItems(currentItems =>{
      return currentItems.filter(item => item.id !== todoId)
    })
  }


  return (
    <>
      <center>
        <AppName />
        <AddTodo addTodoItem = {addTodoItem} />
        <TodoItems todoItems={todoItems} deleteItems={deleteItems}/>
        
       
      </center>
    </>
  );
}

export default App;
