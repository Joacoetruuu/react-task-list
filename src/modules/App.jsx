import TaskForm from "./TaskForm"
import TaskList from "./TaskList"

export function App() {
    
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="cointainer mx-auto p-10">
        <TaskForm/>
        <TaskList/>
      </div>
    </main>
  )
}

