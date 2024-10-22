import TodoItem from "./TodoItem";


const TodoItems = ({todoItems , deleteItems}) => {

  
  return (
    <>
    {todoItems.map(item => <TodoItem key={item.id} id={item.id} todoText={item.todoText}  todoDate ={item.todoDate} deleteItems={deleteItems}/>)}
    </>
  );
  
 
};

export default TodoItems;
