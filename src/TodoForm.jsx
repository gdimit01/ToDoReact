import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onAdd({
      id: crypto.randomUUID(),
      title: newItem,
      completed: false,
    });
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="Item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="Item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
