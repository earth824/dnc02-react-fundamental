import { useState } from 'react';

// REACT TO State change cause UI change

export default function App() {
  console.log('Function App Run');
  return (
    <div>
      {/* <Header /> */}
      <Counter initialCurrent={2} />
      <br />
      <Counter initialCurrent={7} />
      {/* <Footer /> */}
    </div>
  );
}

function Counter(props) {
  console.log('Function Counter Run');
  // let current = 5;
  // const arr = ['Kaimook', 19];
  // const [name, age] = arr;
  const [current, setCurrent] = useState(props.initialCurrent);
  return (
    <div className="flex gap-8 items-center">
      {/* case decrese: () => { setCurrent(current-1) } */}
      <Button
        isDisabled={current === 0}
        onClick={() => {
          // #1 set to next state value
          // setCurrent(current - 1);
          // #2 set by callback function: (prevState) => { return next state value } ==> use this method in case of next state depend on previous state
          setCurrent((prev) => prev - 1);
        }}
      >
        -
      </Button>
      <span>{current}</span>
      {/* case decrese: () => { setCurrent(current+1) } */}
      <Button
        onClick={() => {
          let newValue = current;
          newValue += 1;
          newValue += 1;
          setCurrent(newValue);
          // setCurrent(current + 1);
          // setCurrent(current + 1);
          // setCurrent((prev) => prev + 1);
          // setCurrent((prev) => prev + 1);
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          setCurrent(0);
        }}
      >
        Reset
      </Button>
    </div>
  );
}

function Button(props) {
  console.log('Function Button Run');
  const isDisabled = props.isDisabled;
  const onClick = props.onClick;

  return (
    <button
      className="bg-blue-300 px-4 py-2"
      onClick={onClick}
      disabled={isDisabled}
    >
      {props.children}
    </button>
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
