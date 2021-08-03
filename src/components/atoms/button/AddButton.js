import React from "react";

const AddButton = (props) => {
  const { tasks, setTask } = props;

  const onAddTask = () => {};

  return (
    <div className="addButton">
      <button className="btn" onClick={onAddTask}>
        ＋
      </button>
    </div>
  );
};

export default AddButton;
