'use client';

import { useCart } from "@/context/CartContext";

export default function CartFloating() {
  const { cart, totalPrice, totalItems, updateQuantity, generateWhatsAppLink, isCartOpen, setIsCartOpen } = useCart();

  if (totalItems === 0) return null;

  return (
    <>
      {/* Zomato-style Floating Bar */}
      <button 
        className={`cart-bar ${isCartOpen ? 'hidden' : ''}`}
        onClick={() => setIsCartOpen(true)}
      >
        <div className="cart-bar-info">
          <span className="cart-bar-count">{totalItems} Item{totalItems > 1 ? 's' : ''}</span>
          <span className="cart-bar-divider">|</span>
          <span className="cart-bar-price">₹{totalPrice}</span>
        </div>
        <div className="cart-bar-action">
          View Cart ↗
        </div>
      </button>

      {/* Cart Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Your Order</h3>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>×</button>
        </div>

        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">₹{item.price * item.quantity}</div>
              </div>
              <div className="cart-qty-ctrl">
                <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Total Amount</span>
            <span>₹{totalPrice}</span>
          </div>
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="order-btn"
          >
            Place Order on WhatsApp
          </a>
        </div>
      </div>

      {/* Overlay */}
      {isCartOpen && <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>}
    </>
  );
}
