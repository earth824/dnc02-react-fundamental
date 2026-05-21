import { useState } from 'react';

export default function App() {
  console.log('Function App Run');
  return (
    <div>
      <Header />
      <Counter />
      <Footer />
    </div>
  );
}

function Counter() {
  console.log('Function Counter Run');
  // let current = 5;
  // const arr = ['Kaimook', 19];
  // const [name, age] = arr;
  const [current, setCurrent] = useState(4);
  return (
    <div className="flex gap-8 items-center">
      <button className="bg-blue-300 px-4 py-2">-</button>
      <span>{current}</span>
      <button
        className="bg-blue-300 px-4 py-2"
        onClick={() => {
          setCurrent(current + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
function Footer() {
  console.log('Function Footer Run');
  return <footer>Footer</footer>;
}
function Header() {
  console.log('Function Header Run');
  return (
    <header>
      Header
      <Menu />
    </header>
  );
}
function Menu() {
  console.log('Function Menu Run');
  return <nav>Menu</nav>;
}

const arr = ['Kaimook', 19];
const [name, age] = arr;
