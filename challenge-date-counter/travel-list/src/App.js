const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 🎒</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
    </div>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span
        style={item.packed ? { textDecoration: "line-through" } : {}}
        key={item.id}
      >
        {item.quantity} {item.description}
      </span>
      <button>❌ </button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>🎒 You have X item on your list, ad you already packed X (X%)</em>
    </footer>
  );
}
