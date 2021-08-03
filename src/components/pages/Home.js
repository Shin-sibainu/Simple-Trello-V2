import React, { useState } from "react";
//import AddButton from "../atoms/button/AddButton";
//import TaskCard from "../organisms/TaskCard";

const Home = () => {
  const [taskText, setTaskText] = useState("");
  const [taskCards, setTaskCard] = useState([]);
  const [tasks, setTask] = useState([]);

  const onChangeTaskText = (event) => {
    setTaskText(event.target.value);
  };

  //「＋」の方のボタン
  const onClickAddTask = () => {
    //挿入するものはオブジェクトにする必要がある。
    const newDate = {
      id: taskCards.length, //タスクの数＝番号にする
      title: `タスク ${taskCards.length + 1}`, //ここも本来は自分で決める
    };
    const newTask = [...taskCards, newDate];
    setTaskCard(newTask);
    console.log(taskCards);
    console.log(tasks);
  };

  const onSubmitAddTask = (e) => {
    e.preventDefault();
    //追加されるたびにタスクを増やす。
    const newTaskTitleDate = {
      taskTitle: taskText,
    };
    console.log(taskText);
    const newTaskTitle = [...tasks, newTaskTitleDate];
    setTask(newTaskTitle);
    console.log("タスクが更新されました");
    /*console.log(tasks);*/
  };

  return (
    <div className="home">
      <div className="addButton">
        <button className="btn" onClick={onClickAddTask}>
          ＋
        </button>
      </div>

      <div className="taskArea">
        {taskCards.map((task) => (
          <div className="taskCard" key={task.id}>
            <h4>{task.title}</h4>
            <hr style={{ color: "grey" }} />
            <form onSubmit={(e) => onSubmitAddTask(e)}>
              <input
                type="text"
                placeholder="add your task"
                value={taskText}
                onChange={onChangeTaskText}
              />
            </form>
            <div className="card">
              <h3>{task.taskTitle}</h3>
              <div style={{ cursor: "pointer" }}>✔</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
