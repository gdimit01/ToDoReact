import "./styles.css";

export default function App() {
  return <form className="new-item-form">
    <div className = "form-row">
      <label htmlFor = "Item">New Item</label>
      <input type = "text" id = "Item" />
    </div>
  </form>
}