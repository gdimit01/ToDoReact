import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("")
  

  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="Item">New Item</label>
          <input value ={newItem} onChange={e => setNewItem(e.target.value)} type = "text" id="Item" />
          <input type="text" id="Item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn remove">Remove</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn remove">Remove</button>
        </li>
      </ul>
    </>
  );
}