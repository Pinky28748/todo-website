import TodoItem from "./TodoItem";
import {useContext} from "react";
import {TodoItemsContext} from "../store/TodoItemsContext";

const TodoItems = () => {

  const {todoItems} = useContext(TodoItemsContext);

  
 

  return (
    <>
      {todoItems.map((item) => (
        <TodoItem key={item.id} id={item.id} todoText={item.todoText} todoDate={item.todoDate} completed={item.completed} />
      ))}
    </>
  );
};

export default TodoItems;