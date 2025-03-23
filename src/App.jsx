import Hero from './Todo/Hero'
import TodoItems from './Todo/TodoItems'
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer />
      <Hero />
      <TodoItems />
    </div>
  )
}

export default App
