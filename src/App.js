import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (i) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(i, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (i) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(i, 1);
    setIncompleteTodos(newIncompleteTodos);
    const newCompleteTodos = [...completeTodos, incompleteTodos[i]];
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (i) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(i, 1);
    setCompleteTodos(newCompleteTodos);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[i]];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          id="add-text"
          type="text"
          placeholder="Todoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-are">
        <p>未完了のTodo</p>
        <ul id="incomplete-task-list" className="task-list">
          {incompleteTodos.map((todo, i) => {
            return (
              <li key={todo}>
                <p>{todo}</p>
                <button onClick={() => onClickComplete(i)}>完了</button>
                <button onClick={() => onClickDelete(i)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-are">
        <p>完了したTodo</p>
        <ul id="complete-task-list" className="task-list">
          {completeTodos.map((todo, i) => {
            return (
              <li key={todo}>
                <p>{todo}</p>
                <button onClick={() => onClickBack(i)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
