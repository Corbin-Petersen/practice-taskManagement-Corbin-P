import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";

function App() {

  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/:id" element={<TaskDetail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
