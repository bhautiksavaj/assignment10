import { FaTimes } from "react-icons/fa";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <div
          className={`task ${task.reminder && "reminder"}`}
          onDoubleClick={() => onToggle(task.id)}
          key={index}
        >
          <h3>
            {task.text}
            <FaTimes
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => onDelete(task.id)}
            />
          </h3>
          <p>{task.day}</p>
        </div>
      ))}
    </>
  );
};

export default Tasks;
