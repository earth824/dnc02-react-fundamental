// import { Component } from 'react';
import Button from './components-props/Button';
import Header from './components-props/Header';

export default function App() {
  return (
    <div>
      <Header />
      <Button>Click</Button>
      {/* Button({ label: 'Click', bgColor: 'bg-blue-500' }) */}
      <Button bgColor="bg-green-500">Submit</Button>
      <Button bgColor="bg-red-500">Cancel</Button>
      {/* <button className="px-5 py-2 bg-blue-500 text-white rounded-lg">
        Click
      </button>
      <button className="px-5 py-2 bg-green-500 text-white rounded-lg">
        Submit
      </button>
      <button className="px-5 py-2 bg-red-500 text-white rounded-lg">
        Cancel
      </button> */}
    </div>
  );
}

// Button({ label: 'Click' })
// Button({ label: 'Submit' })
// Button({ label: 'Cancel' })

// const Button = function () {};
// const Button = () => {};

// class OldWay extends Component {
//   render() {
//     return <div>Class Component</div>;
//   }
// }

// function sum(a, b) {
//   return a + b;
// }

// sum(1, 3); // 4
// sum(4, 2); // 6
// sum(5, 9); // 14
