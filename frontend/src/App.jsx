import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import {TodoItemsProvider} from "./store/TodoItemsContext";
import LoadItems from "./components/LoadItems";



function App() {

 

  return (
    <>
        <TodoItemsProvider>
        <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          <AppName />
          <AddTodo />
          <LoadItems />
          <TodoItems />
          </div>
        </div>
        </TodoItemsProvider>
        
    
    
    </>

  )
  
}

export default App
