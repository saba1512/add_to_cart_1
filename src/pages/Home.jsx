import { products } from "../data/Products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div className="products-container">
      {products.map((item) => {
        return <ProductCard key={item.id} product={item} />;
      })}
    </div>
  );
};

export default Home;