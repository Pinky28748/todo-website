import {useContext,useEffect,useState} from "react";
import {TodoItemsContext} from "../store/TodoItemsContext";
import { todoItemToClientModel } from "../utils/ModelUtil";
import Button from "./Button";
const LoadItems = () => {

    const {todoItems,addAllTodoItems} = useContext(TodoItemsContext);
    const [isLoading,setIsLoading ] =  useState(false);

   

  useEffect(()=> {
      setIsLoading(true);
      fetch('http://localhost:3000/todos')
      .then(res => res.json())
      .then(items => {
          const newItems = items.map(todoItemToClientModel);
          addAllTodoItems(newItems);
      })
      .finally(() => {
          setIsLoading(false);
      })
    },[]);

  
      

  return (
      <>
       {isLoading && (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!isLoading && todoItems.length === 0 && <p>Enjoy your day</p>}

         
      </>
     
  );

}

export default LoadItems