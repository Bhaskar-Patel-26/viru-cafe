'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import menuData from '@/data/menu.json';
import useFadeIn from '@/hooks/useFadeIn';

function MenuContent() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { addToCart, updateQuantity, getItemQuantity, setTableNumber } = useCart();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const table = searchParams.get('table');
    if (table) {
      setTableNumber(table);
    }
  }, [searchParams, setTableNumber]);

  // Re-run the fade-in observer whenever the category changes
  useFadeIn([activeCategory]);

  const filteredItems = activeCategory === 'All' 
    ? menuData.items 
    : menuData.items.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page">
      <div className="sec-label">Our Full Menu</div>
      <h2 className="sec-title">Freshly Brewed &<br />Cooked for You</h2>
      
      {/* Category Filters */}
      <div className="cat-filters">
        {menuData.categories.map(cat => (
          <button 
            key={cat}
            className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="full-menu-grid">
        {filteredItems.map((item) => {
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
    </div>
  );
}

export default function MenuPage() {
  return (
    <Suspense fallback={<div className="loading">Loading Menu...</div>}>
      <MenuContent />
    </Suspense>
  );
}
