import ProductCard from './ProductCard';

export default function ProductList() {
  // data from external (BACKEND SERVER)
  const products = [
    { name: 'Chicken Rice', price: 50, id: 1, isOutOfStock: true },
    { name: 'Noodles', price: 40, id: 2 },
    { name: 'Fried Rice', price: 70, id: 3 }
  ];

  return (
    <div className="flex gap-4">
      {products.map((product) => (
        // <ProductCard name={product.name} price={product.price} id={product.id} />
        <ProductCard {...product} key={product.id} />
      ))}
    </div>
  );
}
