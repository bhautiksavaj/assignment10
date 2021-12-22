import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask } from "../actions";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  return (
    <>
      {tasks?.map((task, index) => (
        <div
          className={`task ${task.reminder && "reminder"}`}
          onDoubleClick={() => dispatch(toggleTask(task.id))}
          key={index}
        >
          <h3>
            {task.text}
            <FaTimes
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => dispatch(deleteTask(task.id))}
            />
          </h3>
          <p>{task.day}</p>
        </div>
      ))}
    </>
  );
};

export default Tasks;
