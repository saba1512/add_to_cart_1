import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cartItems } = useCart();
  const totalCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">My Shop</Link>
      </div>
      <nav className="nav-menu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cart" className="cart-button">
          Cart <span className="cart-badge">{totalCount}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;