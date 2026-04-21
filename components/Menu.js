'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import menuData from '@/data/menu.json';

export default function Menu() {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  
  // Show first 6 items as "Featured"
  const featuredItems = menuData.items.slice(0, 6);

  return (
    <section className="sec menu-sec fade-in" id="menu">
      <div className="sec-label">Our Menu</div>
      <h2 className="sec-title">Crafted with passion,<br />priced for everyone</h2>
      <p className="sec-sub">Fresh ingredients · Bold flavours</p>
      
      <div className="menu-grid">
        {featuredItems.map((item) => {
          const qty = getItemQuantity(item.id);
          
          return (
            <div key={item.id} className="mc fade-in">
              <div className="mc-img">
                <img src={item.img} alt={item.name} loading="lazy" />
              </div>
              <div className="mc-body">
                <div className="mc-tag">{item.category}</div>
                <div className="mc-name">{item.name}</div>
                <div className="mc-row">
                  <div className="mc-price">₹{item.price}</div>
                  
                  {qty === 0 ? (
                    <button 
                      className="mc-add"
                      onClick={() => addToCart(item)}
                    >
                      Add +
                    </button>
                  ) : (
                    <div className="inline-qty-ctrl">
                      <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                      <span>{qty}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <Link href="/menu" className="btn-full">
        View Full Menu
      </Link>
    </section>
  );
}
