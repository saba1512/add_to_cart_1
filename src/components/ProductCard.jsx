import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.price} GEL</p>
      <button onClick={() => addToCart(product)}>Add To Cart</button>
    </div>
  );
};

export default ProductCard
