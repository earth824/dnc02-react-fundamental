export default function ProductCard(props) {
  // props is readonly, cannot modify props
  // props.name = 'abcd';

  // hide card if out of stock
  // if (props.isOutOfStock) return null;

  // Dont use key props, only optimized performance, using props.id instead
  // props.key

  return (
    <div className="border p-4">
      <h3>{props.name}</h3>
      <span>{props.price}</span>
      {props.isOutOfStock && <p>Out of stock</p>}
    </div>
  );
}
