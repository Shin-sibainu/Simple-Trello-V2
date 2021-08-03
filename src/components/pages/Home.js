import React, { useState } from "react";
//import AddButton from "../atoms/button/AddButton";
//import TaskCard from "../organisms/TaskCard";

const Home = () => {
  const [taskText, setTaskText] = useState("");
  const [taskCards, setTaskCard] = useState([]);
  const [tasks, setTask] = useState([]);

  const onChangeTaskText = (event) => {
    setTaskText(event.target.value); //どのタスクカードもこれでセットされてる。
  };

  //「＋」の方のボタン
  const onClickAddTask = () => {
    const newDate = {
      id: taskCards.length, //タスクの数＝番号にする
      inputName: `input_${taskCards.length}`,
      title: `タスク ${taskCards.length + 1}`,
    };
    const newTask = [...taskCards, newDate];
    setTaskCard(newTask);
  };

  const onSubmitAddTask = (e) => {
    e.preventDefault();
    //追加されるたびにタスクを増やす。
    const newTaskTitleDate = {
      id: tasks.length,
      taskTitle: taskText,
    };
    const newTaskTitle = [...tasks, newTaskTitleDate];
    setTask(newTaskTitle);
    setTaskText("");
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
              <label>
                <input
                  name={task.inputName}
                  type="text"
                  placeholder="add your task"
                  value={taskText}
                  onChange={onChangeTaskText} //ここを変更？
                />
              </label>
            </form>
            {tasks.map((taskCard) => (
              <div className="card" key={taskCard.id}>
                <h3>{taskCard.taskTitle}</h3>
                <div style={{ cursor: "pointer" }}>✔</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

/* https://simple-trello.vercel.app/ */
