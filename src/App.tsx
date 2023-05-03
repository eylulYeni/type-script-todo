import React, { useState } from "react";

import "./App.css";
import Input from "./components/Input";
import { Todos } from "./types/Type";
import Message from "./components/Message";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

  console.log(todos);

  const addMessageHandler = () => {
    if (todo) setTodos([...todos, { message: todo, id: todos.length + 1 }]);
    setTodo("");
  };

  const deleteMessageHandler = (id: number) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  const updateMessageHandler = (id: number, newMessage: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, message: newMessage } : todo
      )
    );
  };

  return (
    <div className="App">
      <Input
        addMessageHandler={addMessageHandler}
        todo={todo}
        setTodo={setTodo}
      />
      <Message
        todos={todos}
        deleteMessageHandler={deleteMessageHandler}
        updateMessageHandler={updateMessageHandler}
      />
    </div>
  );
};

export default App;
