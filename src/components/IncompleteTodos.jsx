export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
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
  );
};
