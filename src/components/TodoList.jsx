function TodoList({ tasks, onDelete }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => onDelete(index)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;