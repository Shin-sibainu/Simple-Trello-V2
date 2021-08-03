import React, { useState } from "react";
import AddButton from "../atoms/button/AddButton";
import TaskCard from "../organisms/TaskCard";

const Home = () => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      title: "task1",
      taskName: "プログラミング",
    },
    {
      id: 2,
      title: "task2",
      taskName: "読書",
    },
  ]);

  const [taskText, setTaskText] = useState("");

  const onChangeTaskText = (event) => {
    setTaskText(event.target.value);
  };

  //「＋」の方のボタン
  const onClickAddTask = () => {
    console.log("clicked");
  };

  const onSubmitAddTask = (e) => {
    e.preventDefault();
    //挿入するものはオブジェクトにする必要がある。
    const newTask = [...tasks, taskText];
    setTask(newTask);
  };

  return (
    <div className="home">
      <div className="addButton">
        <button className="btn" onClick={onClickAddTask}>
          ＋
        </button>
      </div>

      <div className="taskArea">
        {tasks.map((task) => (
          <div className="taskCard" key={task.id}>
            <h4>{task.title}</h4>
            <hr style={{ color: "grey" }} />
            <form onSubmit={(e) => onSubmitAddTask(e)} className="form1">
              <input
                type="text"
                placeholder="add your task"
                value={taskText}
                onChange={onChangeTaskText}
              />
            </form>
            <div className="card">
              <h3>{task.taskName}</h3>
              <div style={{ cursor: "pointer" }}>✔</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
