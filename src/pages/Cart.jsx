import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, addToCart, decreaseQty, removeFromCart } = useCart();

  // ჯამური ფასის გამოთვლა
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>კალათა ცარიელია 🛒</h2>
        <p>ჯერ არაფერი დაგიმატებიათ.</p>
        <Link to="/" className="back-btn">მაღაზიაში დაბრუნება</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>თქვენი კალათა</h1>
      <div className="cart-container">
        
        {/* მარცხენა მხარე: ნივთების სია */}
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-card">
              <img src={item.image} alt={item.name} />
              
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="unit-price">{item.price} GEL</p>
              </div>

              <div className="quantity-controls">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => addToCart(item)}>+</button>
              </div>

              <div className="item-total-price">
                {(item.price * item.qty).toFixed(2)} GEL
              </div>

              <button 
                className="remove-btn" 
                onClick={() => removeFromCart(item.id)}
                title="წაშლა"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* მარჯვენა მხარე: ჩეკი */}
        <div className="cart-summary-card">
          <h3>შეკვეთის ჯამი</h3>
          <div className="summary-row">
            <span>ნივთები:</span>
            <span>{cartItems.length}</span>
          </div>
          <div className="summary-row total">
            <span>სულ გადასახდელი:</span>
            <span>{totalPrice.toFixed(2)} GEL</span>
          </div>
          <button className="checkout-btn">ყიდვა</button>
        </div>

      </div>
    </div>
  );
};

export default Cart;