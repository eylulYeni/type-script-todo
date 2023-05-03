import React, { useState } from "react";
import { Todos } from "../types/Type";
import { FaTrash, FaEdit, FaSave } from "react-icons/fa";

type Props = {
  todos: Todos[];
  deleteMessageHandler: (id: number) => void;
  updateMessageHandler: (id: number, message: string) => void;
};

const Message: React.FC<Props> = ({
  todos,
  deleteMessageHandler,
  updateMessageHandler,
}) => {
  const [editableTodoId, setEditableTodoId] = useState<number | null>(null);
  const [editableTodoMessage, setEditableTodoMessage] = useState<string>("");

  const handleEditClick = (id: number, message: string) => {
    setEditableTodoId(id);
    setEditableTodoMessage(message);
  };

  const handleSaveClick = (id: number) => {
    if (editableTodoMessage) {
      updateMessageHandler(id, editableTodoMessage);
      setEditableTodoId(null);
      setEditableTodoMessage("");
    }
  };

  const handleCancelClick = () => {
    setEditableTodoId(null);
    setEditableTodoMessage("");
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {editableTodoId === todo.id ? (
            <>
              <input
                type="text"
                value={editableTodoMessage}
                onChange={(e) => setEditableTodoMessage(e.target.value)}
              />
              <FaSave
                onClick={() => handleSaveClick(todo.id)}
                style={{
                  cursor: "pointer",
                  color: "green",
                  marginLeft: "10px",
                }}
              />
              <FaTrash
                onClick={() => deleteMessageHandler(todo.id)}
                style={{ cursor: "pointer", color: "red", marginLeft: "10px" }}
              />
              <button onClick={handleCancelClick}>Cancel</button>
            </>
          ) : (
            <>
              {todo.message}
              <FaEdit
                onClick={() => handleEditClick(todo.id, todo.message)}
                style={{ cursor: "pointer", color: "blue", marginLeft: "10px" }}
              />
              <FaTrash
                onClick={() => deleteMessageHandler(todo.id)}
                style={{ cursor: "pointer", color: "red", marginLeft: "10px" }}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Message;
