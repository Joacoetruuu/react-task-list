import React from 'react'
import ReactDOM from 'react-dom/client'
import { TaskContextProvider, TaskContext } from './context/TaskContext'
import { App } from './modules/App'
import "./index.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App/>
    </TaskContextProvider>
  </React.StrictMode>,
)
