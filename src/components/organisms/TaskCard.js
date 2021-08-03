import React from "react";

const TaskCard = (props) => {
  const { tasks } = props;
  return (
    <div className="taskArea">
      {tasks.map((task) => (
        <div className="taskCard">
          <h4>{task.title}</h4>
          <hr style={{ color: "grey" }} />
          <input type="text" placeholder="add your task" />
          <div className="card">
            <h3>{task.taskName}</h3>
            <div style={{ cursor: "pointer" }}>✔</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
