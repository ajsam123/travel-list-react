/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
// import "./index.css";

import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 2, description: "Charger", quantity: 1, packed: false },
// ];

function App() {
  const [items, setItems] = useState([]);

  function handleAddNewItems(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleCheckedItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = confirm("Are you sure want to delete all items");
    {
      confirmed ? setItems([]) : items;
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddNewItems} />
      <PackingList
        items={items}
        onDeleteItem={deleteItem}
        onCheckedItems={handleCheckedItems}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🌴Far Away👜</h1>;
}
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    console.log(newItem);
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your Trip</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
function PackingList({ items, onDeleteItem, onCheckedItems, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onCheckedItems={onCheckedItems}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onCheckedItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onCheckedItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const percentPacked = (numPacked / numItems) * 100;
  if (!numItems) {
    return (
      <div className="stats">You have no Items here. Click to start adding</div>
    );
  }
  return (
    <footer className="stats">
      <em>
        👜You have {numItems} items on the list, and you already packed{" "}
        {numPacked} ({Math.round(percentPacked)}%)
      </em>
    </footer>
  );
}

export default App;

// import { useState } from "react";
// import Bill from "./components/Bill";
// import FriendRate from "./components/FriendRate";
// import Payment from "./components/Payment";
// import Rate from "./components/Rate";

// function App() {
//   const [bill, setBill] = useState(0);

//   return (
//     <>
//       <Bill bill={bill} onBill={setBill} />
//       <Rate />
//       <FriendRate />
//       <Payment />
//     </>
//   );
// }

// export default App;
