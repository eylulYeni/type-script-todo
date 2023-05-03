import React from "react";

type IProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addMessageHandler: () => void;
};

const Input: React.FC<IProps> = ({ todo, setTodo, addMessageHandler }) => {
  return (
    <div>
      <input
        type="text "
        value={todo}
        placeholder="Enter a task"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addMessageHandler}>Add</button>
    </div>
  );
};

export default Input;
