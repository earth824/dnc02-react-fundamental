// function Button(props) {
//   // props must be an object { bgColor, children }
//   return (
//     <button className={`px-5 py-1.5 ${props.bgColor} text-white rounded-lg`}>
//       {props.children}
//     </button>
//   );
// }

function Button({ bgColor = 'bg-blue-500', children }) {
  // props must be an object { label, bgColor }
  return (
    <button className={`px-5 py-1.5 ${bgColor} text-white rounded-lg`}>
      {children}
    </button>
  );
}

export default Button;
