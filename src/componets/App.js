import { useState } from "react";
const itemsList = [];

export default function App() {
  const [items, setItems] = useState(itemsList);

  return (
    <div className="list">
      <Form items={items} onSetItems={setItems} />
    </div>
  );
}

function Form({ items, onSetItems }) {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const input = form.item;
    const newItems = [...items, input.value];
    onSetItems(newItems);
    form.reset();
  }
  function handleRemove(index) {
    const newItems = [...items];
    newItems.splice(index, 1);
    onSetItems(newItems);
  }

  return (
    <div>
      <h2>Tasks To Do</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="item" placeholder="Add new item" />
        <button>Add</button>
      </form>
      <Items items={items} onRemove={handleRemove} />
    </div>
  );
}

function Items({ items, onRemove }) {
  return (
    <ul>
      {items.map((item, index) => (
        <Item item={item} key={index} index={index} onRemove={onRemove} />
      ))}
    </ul>
  );
}

function Item({ item, onRemove, index }) {
  if (!item) return;
  return (
    <li>
      <span>{item}</span>
      <button className="delete" onClick={() => onRemove(index)}>
        ❌
      </button>
    </li>
  );
}
