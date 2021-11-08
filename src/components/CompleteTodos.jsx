export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
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
  );
};
