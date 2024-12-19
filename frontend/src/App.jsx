import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import {TodoItemsProvider} from "./store/TodoItemsContext";
import LoadItems from "./components/LoadItems";



function App() {

 

  return (
    <>
        <TodoItemsProvider>
        <center>
            <AppName />
            <AddTodo  />
            <LoadItems />
            <TodoItems  />
            




        </center>
        </TodoItemsProvider>
        
    
    
    </>

  )
  
}

export default App
