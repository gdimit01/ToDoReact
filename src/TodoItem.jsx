export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onToggle(todo.id, e.target.checked)}
        />
        {todo.title}
      </label>
      <button className="btn remove" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
}
