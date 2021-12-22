import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect
} from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { Login } from "./components/Login";
import { useSelector } from "react-redux";

const App = () => {
  const tasks = useSelector((state) => state.tasks);
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const [showAddTask, setShowAddTask] = useState(false);
  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Routes>
          <Route path="/" element={<Login />} />
          {/* {isLoggedIn && <Redirect to="/task" />} */}
          <Route
            path="/task"
            element={
              <>
                {showAddTask && <AddTask />}
                {tasks.length > 0 ? <Tasks /> : "No Tasks To Show"}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
